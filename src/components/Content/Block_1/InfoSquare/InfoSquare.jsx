import React from 'react';
import {nanoid} from 'nanoid';
import s from './InfoSquare.module.css';

const InfoSquare = ({squareItems}) => {
    return (
        <div className={s.square}>
            {squareItems.map(el => (
                <div className={s.block} key={nanoid()}>
                    <div className={s.elem}>{el[0]}{}</div>
                    {el[1].substr(-2) === 'г.'
                        ? <div className={s.elem}>{el[1].substr(0, el[1].length - 2)}
                            <span style={{fontSize: '20px'}}>{el[1].substr(-2)}</span>
                        </div>
                        : <div className={s.elem}>{el[1]}</div>
                    }
                    <div className={s.elem}>{el[2]} </div>
                </div>
            ))}
        </div>
    );
}

export default InfoSquare;