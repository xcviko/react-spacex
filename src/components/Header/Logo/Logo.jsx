import React from 'react';
import s from './Logo.module.css';

const Logo = () => {
    return (
        <a href={'/'} className={s.logoWrapper}>
            <div className={s.logo}></div>
            {/*corners*/}
            <div className={`${s.corner} ${s.tl}`}></div>
            <div className={`${s.corner} ${s.tr}`}></div>
            <div className={`${s.corner} ${s.br}`}></div>
            <div className={`${s.corner} ${s.bl}`}></div>
        </a>
    );
}

export default Logo;