import React, {useEffect, useRef, useState} from 'react';
import Header from "../Header/Header";
import Block_1 from "./Block_1/Block_1";
import Block_2 from "./Block_2/Block_2";
import Block_3 from "./Block_3/Block_3";
import Block_4 from "./Block_4/Block_4";

const Content = ({squareItems, navItems, mainText}) => {

    //first block background size changing (because of position:absolute param)
    const [backgroundHeight, setBackgroundHeight] = useState(0);
    const [windowWidth, setWindowWidth] = useState(0);
    const headerRef = useRef(null);
    const block_1Ref = useRef(null);
    useEffect(() => {
        if (headerRef.current && block_1Ref.current) {
            setBackgroundHeight(headerRef.current.offsetHeight + block_1Ref.current.offsetHeight);
        }
        window.addEventListener('resize', () => {
            setWindowWidth(window.innerWidth);
        });
    });

    return (
        <div className='content'>
            <Header headerRef={headerRef} navItems={navItems}
                    backgroundHeight={backgroundHeight} setBackgroundHeight={setBackgroundHeight}
                    windowWidth={windowWidth} />
            <Block_1 block_1Ref={block_1Ref} mainText={mainText} squareItems={squareItems}
                     backgroundHeight={backgroundHeight} setBackgroundHeight={setBackgroundHeight} />
            <Block_2 />
            <Block_3 />
            <Block_4 />
        </div>
    );
};

export default Content;