import express, { request, response } from 'express';
import db from './db/connection';
import convertHourToMinutes from './utils/convertHourToMinutes';

const routes = express.Router();

interface ScheduleItem{
    week_day: number;
    from: string;
    to: string;
}

routes.get('/', (request, response) => {
    return response.json({message: 'Hello World'})
})

routes.post('/classes', async (request, response) =>{
    const {name, avatar, whatsapp, bio, subject, cost, schedule} = request.body;
    const usersIds = await db('users').insert({
        name, avatar, whatsapp, bio
    });
    const user_id = usersIds[0]
    const classesIds = await db('classes').insert({
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
    await db('class_schedule').insert(classSchedule)
    return response.send();
})

export default routes;