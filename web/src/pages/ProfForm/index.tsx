import React, {FormEvent, useState} from 'react';
import Input from '../../components/Input';
import PageHeader from '../../components/PageHeader';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';
import './style.css'
import iconWarning from '../../assets/images/icons/warning.svg';
import api from '../../services/api';
import { useHistory } from 'react-router-dom';

function ProfForm(){
    const history = useHistory();

    const [scheduleItems, setScheduleItem] = useState([
        {week_day: 0,from: '',to: ''}
    ])

    function newScheduleItem(){
        setScheduleItem([
            ...scheduleItems,
            {
                week_day: 0,
                from: '',
                to: ''
            }
        ])
    }

    const [name, setName] = useState('');
    const [avatar, setAvatar] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [bio, setBio] = useState('');
    const [subject, setSubject] = useState('');
    const [cost, setCost] = useState('');

    function setScheduleItemValue(position: number, field: string, value: string){
        const updatedScheduleItems = scheduleItems.map((scheduleItem, index) => {
            if(index === position){
                return{...scheduleItem, [field]: value}
            }
            return scheduleItem;
        });
        setScheduleItem(updatedScheduleItems);
    }

    
    function handleCreateClass(e: FormEvent){ 
        e.preventDefault();
        api.post('classes',{
        name, avatar, whatsapp, bio, subject, cost, 
        schedule: scheduleItems
        }).then(() =>{
            alert('Cadastro realixado com sucesso.');
            history.push('/');
        }).catch(() => {
            alert('Erro no cadastro.')
        });
    console.log({name, avatar, whatsapp, bio, subject, cost, scheduleItems})}

    return(
    <div id="page-teacher-form" className="container">
        <PageHeader text="Obrigado por querer ser um proffy!"
        description="Primeiro, preencha esse formulário:"/>
        <main>
            <form onSubmit={handleCreateClass}>
                <fieldset>
                    <legend>Seus Dados</legend>
                    <Input inputName="name" label="Nome completo"
                    value={name} onChange={(e) => {setName(e.target.value)}}/>
                    <Input inputName="avatar" label="Avatar"
                    value={avatar} onChange={(e) => {setAvatar(e.target.value)}}/>
                    <Input inputName="whastapp" label="WhatsApp"
                    value={whatsapp} onChange={(e) => {setWhatsapp(e.target.value)}}/>
                    <Textarea inputName="bio" label="Biografia"
                    value={bio} onChange={(e) => {setBio(e.target.value)}}/>
                </fieldset>
                <fieldset>
                    <legend>Sobra a aula</legend>
                    <Select inputName="subject" label="Matéria"
                    value={subject} onChange={(e) => {setSubject(e.target.value)}}
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
                    <Input inputName="cost" label="Custo da hora/aula"
                    value={cost} onChange={(e) => {setCost(e.target.value)}}/>
                </fieldset>
                <fieldset>
                    <legend>Horários fornecidos
                        <button type="button" onClick={newScheduleItem}>+ Novo horário</button>
                    </legend>
                    {scheduleItems.map((scheduleItem, index) =>{
                        return <div key={scheduleItem.week_day} className="schedule-item">
                        <Select inputName="week_day" label="Dia da semana"
                        value={scheduleItem.week_day}
                        onChange={e => setScheduleItemValue(index, 'week_day', e.target.value)}
                        options={[
                            {value: '0', label: 'Domingo'},
                            {value: '1', label: 'Segunda-feira'},
                            {value: '2', label: 'Terça-feira'},
                            {value: '3', label: 'Quarta-feira'},
                            {value: '4', label: 'Quinta-feira'},
                            {value: '5', label: 'Sexta-feira'},
                            {value: '6', label: 'Sábado'},

                        ]}/>
                        <Input inputName="from" label="Das" type="time"
                        value={scheduleItem.from}
                        onChange={e => setScheduleItemValue(index, 'from', e.target.value)}/>
                        <Input inputName="to" label="Até" type="time"
                        value={scheduleItem.to}
                        onChange={e => setScheduleItemValue(index, 'to', e.target.value)}/>
                    </div>
                    })}
                </fieldset>
                <footer>
                    <img src={iconWarning} alt="Atenção"/>
                    Importante"<br/>
                    Preencha todos os dados
                    <button type="submit">Salvar cadastro</button>
                </footer>
            </form>
        </main>
    </div>
    )
}

export default ProfForm;