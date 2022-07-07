import React from 'react';
import {squareItems, navItems, mainText} from './state/state';
import './App.css';
import Content from "./components/Content/Content";

const App = () => {
    return (
        <>
            <Content squareItems={squareItems} navItems={navItems} mainText={mainText} />
        </>
    );
}

export default App;
