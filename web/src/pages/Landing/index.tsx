import React from 'react';

import imgLogo from '../../assets/images/logo.svg';
import imgLanding from '../../assets/images/landing.svg';
import imgClasses from '../../assets/images/icons/study.svg';
import imgStudy from '../../assets/images/icons/give-classes.svg';
import imgPurpleHearth from '../../assets/images/icons/purple-heart.svg';

function Landing(){
    return (    
        <div id="landing-page">
            <div id="landing-page-content" className="container">
                <div id="logo-container">
                    <img src={imgLogo} alt="Proffy"/>
                    <h2>Sua plataforma de estudos online</h2>
                </div>
                <img src={imgLanding} alt="Plataforma de estudos"
                className="hero-image"/>
                <div className="buttons-container">
                    <a href="" className="study">
                        Estudar
                        <img src={imgStudy} alt="Estudar"/>
                    </a>
                    <a href="" className="give-classes">
                        Ensinar
                        <img src={imgClasses} alt="Ensinar"/>
                    </a>
                </div>
                <span className="total-connections">
                    Já são X conexões realizadas
                    <img src={imgPurpleHearth} alt="Coração roxo"/>
                </span>
            </div>
        </div>
    )
}

export default Landing;