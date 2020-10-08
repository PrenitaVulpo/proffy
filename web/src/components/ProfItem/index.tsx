import React from 'react';
import iconZap from '../../assets/images/icons/whatsapp.svg';
import './style.css';

export interface Prof{
    avatar: string;
    bio: string;
    cost: number;
    id: number;
    name: string;
    subject: string;
    user_id: number;
    whatsapp: string;
};

interface ProfItemProps{
    prof: Prof;
}

const ProfItem: React.FC<ProfItemProps> = ({prof}) => {
    return(
        <article className="teacher-item">
            <header>
                <img src={prof.avatar} 
                alt={prof.name}/>
                <div>
                    <strong>{prof.name}</strong>
                    <span>{prof.subject}</span>
                </div>
            </header>
            <p>{prof.bio}</p>
            <footer>
                <p>
                    Preço/hora
                    <strong>R$ {prof.cost}</strong>
                </p>
                <a href={'https://wa.me/'+prof.whatsapp}>
                    <img src={iconZap} alt="Whatsapp"/>
                    Entrar em contato
                </a>
                </footer>
        </article>
    )
}

export default ProfItem;