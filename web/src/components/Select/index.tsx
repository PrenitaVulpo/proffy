import React, {InputHTMLAttributes as SelectHTMLAttributes} from 'react';

import './style.css';

interface Properties extends SelectHTMLAttributes<HTMLSelectElement>{
    label: string;
    inputName: string;
    options: Array<{
        value: string;
        label: string;
    }>;
}

const Input: React.FC<Properties> = ({label, inputName,options, ...rest}) =>{
    return(
        <div className="select-block">
            <label htmlFor={inputName}>{label}</label>
            <select value="" id={inputName} {...rest}> 
                <option value="" disabled hidden>Selecione uma opção</option>
                {options.map(opt => {
                    return <option key={opt.value} value={opt.value}>{opt.label}</option>})}
            </select>
        </div>
    );
}

export default Input;