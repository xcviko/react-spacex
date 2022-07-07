import React from 'react';
import s from './Button.module.css';

const Button = ({text}) => {
    return (
        <a href="#" className={s.button}>
            <div>{text}</div>
            {/*corners*/}
            <div className={`${s.corner} ${s.tr}`}>
                <div className={s.t}></div>
                <div className={s.r}></div>
            </div>
            <div className={`${s.corner} ${s.bl}`}>
                <div className={s.b}></div>
                <div className={s.l}></div>
            </div>
        </a>
    );
}

export default Button;