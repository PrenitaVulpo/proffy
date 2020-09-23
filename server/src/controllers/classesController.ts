import {Request, Response} from 'express'
import db from '../db/connection';
import convertHourToMinutes from '../utils/convertHourToMinutes';



interface ScheduleItem{
    week_day: number;
    from: string;
    to: string;
}

export default class ClassesControler{
    async index(request: Request, response:Response){
        const filters = request.query;
        if(!filters.week_day||!filters.subject||
            !filters.time){
            return response.status(400).json({
                error: 'Faltam filtros de busca'
            })
        
        }
        const minutes = convertHourToMinutes(filters.time as string);
        console.log(filters.subject)

        const classes = await db('classes')
        .whereExists(function(){
            this.select('class_schedule.*')
            .from('class_schedule')
            .whereRaw('`class_schedule`.`class_id`=`classes`.`id`')
            .whereRaw('`class_schedule`.`week_day`=??', [Number(filters.week_day)])
            .whereRaw('`class_schedule`.`from` <= ??', [minutes])
            .whereRaw('`class_schedule`.`to`>??', [minutes])
        })
            .where('classes.subject','=',filters.subject as string)
            .join('users', 'classes.user_id', '=', 'users.id')
            .select(['classes.*', 'users.*'])
        return response.json(classes);
    }


    async create(request: Request, response: Response) {
        const {name, avatar, whatsapp, bio, subject, cost, schedule} = request.body;
        const transact = await db.transaction();
        
        try{
            const usersIds = await transact('users').insert({
                name, avatar, whatsapp, bio
            });
            const user_id = usersIds[0]
            const classesIds = await transact('classes').insert({
                subject,
                cost,
                user_id
            })
            const class_id = classesIds[0]
            const classSchedule = schedule.map((scheduleItem: ScheduleItem) =>{
                return {
                    week_day: scheduleItem.week_day,
                    from: convertHourToMinutes(scheduleItem.from),
                    to: convertHourToMinutes(scheduleItem.to),
                    class_id
                }
            })
            await transact('class_schedule').insert(classSchedule)
            await transact.commit();
            return response.status(201).send();
        }catch(erro){
            await transact.rollback();
            console.log(erro);
            return response.status(400).json({
                error: 'Erro durante a criação de nova entrada'
            })
        }
    }
}