import React, { FormEvent, useState } from 'react';

import './styles.css'
import PageHeader from '../../components/PageHeader';
import ProfItem, {Prof} from '../../components/ProfItem';
import Input from '../../components/Input';
import Select from '../../components/Select';
import api from '../../services/api';



function ProfList(){
    const [teachers, setTeachers] = useState([]);

    const [subject, setSubject] = useState('');
    const [week_day, setWeek_day] = useState('');
    const [time, setTime] = useState('');

    async function searchProf(e: FormEvent){
        e.preventDefault();

        const response = await api.get('classes',{
            params:{
                subject,
                week_day,
                time
            }
        });

        setTeachers(
            response.data
        )
    }

    return(
    <div id="page-teacher-list" className="container">
        <PageHeader text="Esses são os proffys disponíveis:">
            <form id="search-teachers" onSubmit={searchProf}>
                <Select inputName="subject" label="Matéria"
                value={subject}
                onChange={e => {setSubject(e.target.value)}}
                options={[
                    {value: 'Artes', label: 'Artes'},
                    {value: 'Português', label: 'Português'},
                    {value: 'Inglês', label: 'Inglês'},
                    {value: 'Espanhol', label: 'Espanhol'},
                    {value: 'Matemática', label: 'Matemática'},
                    {value: 'Química', label: 'Química'},
                    {value: 'Física', label: 'Física'},
                    {value: 'Biologia', label: 'Biologia'},
                    {value: 'Literatura', label: 'Literatura'},
                    {value: 'História', label: 'História'},
                    {value: 'Geografia', label: 'Geografia'},
                    {value: 'Redação', label: 'Redação'}
                ]}/>
                <Select inputName="week_day" label="Dia da semana"
                value={week_day}
                onChange={e => {setWeek_day(e.target.value)}}
                options={[
                    {value: '0', label: 'Domingo'},
                    {value: '1', label: 'Segunda-feira'},
                    {value: '2', label: 'Terça-feira'},
                    {value: '3', label: 'Quarta-feira'},
                    {value: '4', label: 'Quinta-feira'},
                    {value: '5', label: 'Sexta-feira'},
                    {value: '6', label: 'Sábado'},

                ]}/>
                <Input type="time" inputName="time" label="Hora"
                value={time}
                onChange={e => {setTime(e.target.value)}}/>
                <button type="submit">Buscar</button>
            </form>
        </PageHeader>

        <main>
            {teachers.map((teacher: Prof) =>{
                return <ProfItem key={teacher.id} prof={teacher}/>
            })}
        </main>
    </div>
    )
}

export default ProfList;