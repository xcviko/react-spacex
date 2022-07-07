import React, {useRef} from 'react';
import s from './Header.module.css';
import Logo from "./Logo/Logo";
import Navbar from "./Navbar/Navbar";

const Header = ({headerRef, navItems, backgroundHeight, setBackgroundHeight, windowWidth}) => {
    return (
        <div ref={headerRef} className={s.headerWrapper}>
            <div className={s.header}>
                <Logo />
                <Navbar items={navItems} headerRef={headerRef}
                        backgroundHeight={backgroundHeight} setBackgroundHeight={setBackgroundHeight}
                        windowWidth={windowWidth} />
            </div>
        </div>
    );
}

export default Header;