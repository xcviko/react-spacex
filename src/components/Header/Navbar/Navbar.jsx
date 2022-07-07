import React, {useEffect, useState} from 'react';
import {nanoid} from 'nanoid';
import s from './Navbar.module.css';

const Navbar = ({items, headerRef, backgroundHeight, setBackgroundHeight, windowWidth}) => {
    const [navbarVisibility, setNavbarVisibility] = useState(false);
    const [initialHeaderHeight, setInitialHeaderHeight] = useState(0);
    useEffect(() => {
        setInitialHeaderHeight(headerRef.current && headerRef.current.offsetHeight);
    });

    useEffect(() => {
        if (navbarVisibility) {
            if (headerRef.current) {
                setBackgroundHeight(backgroundHeight + (headerRef.current.offsetHeight - initialHeaderHeight));
            }
        } else {
            if (headerRef.current) {
                setBackgroundHeight(backgroundHeight - (headerRef.current.offsetHeight - initialHeaderHeight));
            }
        }
    }, [navbarVisibility, headerRef, windowWidth]);

    return (
        <>
            <a href={'#'} className={s.toggleNavbarVisibility} onClick={() => {setNavbarVisibility(!navbarVisibility);}}>
                {navbarVisibility ? 'Закрыть меню ↑' : 'Открыть меню ↓'}
                {navbarVisibility && <div className={s.line}></div>}
            </a>

            <div className={`${s.navbar} ${!navbarVisibility && s.disabled}`}>
                {items.map((value) => {
                    return <a key={nanoid()} className={s.item} href={'#'}>{value}</a>
                })}
            </div>
        </>
    );
}

export default Navbar;