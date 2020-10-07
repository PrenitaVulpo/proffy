import React, {InputHTMLAttributes} from 'react';

import './style.css';

interface Properties extends InputHTMLAttributes<HTMLInputElement>{
    label: string;
    inputName: string;
}

const Input: React.FC<Properties> = ({label, inputName, ...rest}) =>{
    return(
        <div className="input-block">
            <label htmlFor={inputName}>{label}</label>
            <input id={inputName} {...rest}/>
        </div>
    );
}

export default Input;