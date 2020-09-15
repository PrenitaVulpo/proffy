import React from 'react';
import{Link} from 'react-router-dom'

import imgLogo from '../../assets/images/logo.svg'
import iconBack from '../../assets/images/icons/back.svg'

import './styles.css'

interface PageHeaderProps{
    text: String;
}

const PageHeader: React.FunctionComponent<PageHeaderProps> = (properties) => {
    return(
        <header className="page-header">
            <div className="top-bar-container">
                <Link to="/">
                    <img src={iconBack} alt="Voltar"/>
                </Link>
                <img src={imgLogo} alt="Proffy"/>
            </div>
            <div className="header-content">
                <strong>{properties.text}</strong>
                {properties.children}
            </div>
        </header>
    )
}

export default PageHeader;