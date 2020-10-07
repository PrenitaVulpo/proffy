import React, {TextareaHTMLAttributes} from 'react';

import './style.css';

interface Properties extends TextareaHTMLAttributes<HTMLTextAreaElement>{
    label: string;
    inputName: string;
}

const Textarea: React.FC<Properties> = ({label, inputName, ...rest}) =>{
    return(
        <div className="textarea-block">
            <label htmlFor={inputName}>{label}</label>
            <textarea id={inputName} {...rest}/>
        </div>
    );
}

export default Textarea;