import React from 'react';
import { Routes, Route, } from 'react-router-dom';
import "./App.css";
import Home from './Home'
import AboutMe from 'first'
const App = () => {
    return (
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='about' element={<AboutMe/>} />
            
        </Routes>
    );
}

export default App;
