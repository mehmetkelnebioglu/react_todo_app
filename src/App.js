import React from 'react';
import './App.css'
import AddTask from './components/AddTask';
import Header from './components/Header';
import Sun from './components/Sun';


const App = () => {
    return (
        <div className='main-container'>
            <Sun/>
            <Header/>
            
            <div className='container'>
            <AddTask/>
            </div>
        </div>
    );
}

export default App;

