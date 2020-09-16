import React from 'react';
import iconZap from '../../assets/images/icons/whatsapp.svg';
import './style.css';

const ProfItem = () => {
    return(
        <article className="teacher-item">
            <header>
                <img src="https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F4e%2F02%2Fce%2F4e02ce4ae0a68a2b118ecc757e138c8c.jpg&sp=1600222054T8e0c563918c8ddc97d4c54e66b00e79315b39ab59e408953a22eb5609da9804b" 
                alt="Pikachu"/>
                <div>
                    <strong>Pikachu</strong>
                    <span>Física</span>
                </div>
            </header>
            <p>
                Pikapi
                <br/><br/>
                pikapikaa
            </p>
            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 75,00</strong>
                </p>
                <button type="button">
                    <img src={iconZap} alt="Whatsapp"/>
                    Entrar em contato
                </button>
                </footer>
        </article>
    )
}

export default ProfItem;