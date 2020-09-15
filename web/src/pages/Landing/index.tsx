import React from 'react';

import {Link} from 'react-router-dom'

import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import studyIcon from '../../assets/images/icons/study.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

import './style.css'

function Landing(){
    return (
        <div id="page-landing">
          <div id="page-landing-content" className="container">
            <div className="logo-container">
              <img src={logoImg} alt="Proffy" />
              <h2>Sua plataforma de estudos online.</h2>
            </div>
            <img src={landingImg} alt="Plataforma de estudos" className="hero-image" />
    
            <div className="buttons-container">
              <Link to="/estudar" className="study">
                <img src={studyIcon} alt="Estudar" />
                Estudar
              </Link>
    
              <Link to="/ensinar" className="give-classes">
                <img src={giveClassesIcon} alt="Ensinar" />
                Ensinar
              </Link>
            </div>
    
            <span className="total-connections">
              Já são
              X
              conexões já realizadas
              <img src={purpleHeartIcon} alt="Coração roxo" />
            </span>
          </div>
        </div>
      );
}

export default Landing;