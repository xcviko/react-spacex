import React from 'react';
import s from './Block_1.module.css';
import Button from "./Button/Button";
import InfoSquare from "./InfoSquare/InfoSquare";
import Background from "./Background/Background";

const Block_1 = ({block_1Ref, mainText, squareItems, backgroundHeight}) => {

    return (
        <div ref={block_1Ref} className={s.block_1}>
            {/*first block*/}
            <div className={s.block}>
                <div className={s.mainText}>
                    <div className={s.mainTextLarge}>{mainText[0]}</div>
                    <div className={s.mainTextDefault}>{mainText[1]}</div>
                </div>
                <Button text={mainText[2]}/>

                <div className={s.line}>
                    <div className={s.main}></div>
                    <div className={s.curved}></div>
                    <div className={s.circle}></div>
                </div>
            </div>
            {/*secondBlock*/}
            <div className={s.block}>
                <InfoSquare squareItems={squareItems}/>
            </div>
            <Background height={backgroundHeight} />
        </div>
    );
}

export default Block_1;