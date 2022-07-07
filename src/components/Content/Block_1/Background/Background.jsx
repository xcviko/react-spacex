import React, {useEffect, useRef} from 'react';
import s from './Background.module.css';

const Background = ({height}) => {
    const background = useRef(null);
    useEffect(() => {
        if (background.current) {background.current.style.height = `${height}px`}
    }, [height]);

    return (
        <div style={{height:`${height}px`}}ref={background} className={s.backgroundImage}></div>
    );
}

export default Background;