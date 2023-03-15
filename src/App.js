import React, { useEffect, useState } from 'react';
import './App.css'
import AddTask from './components/AddTask';
import Header from './components/Header';
import Sun from './components/Sun';
import Task from './components/Task'

const App = () => {

    const [tasks, setTasks] = useState([])



    useEffect(() => {
        fetch('http://localhost:5001/tasks',{
            method:"GET",
        } )
        .then(response=>response.json())
        .then()
        .then(response=>{
            console.log('get task', response);
            setTasks(response)
        })
        .catch((error)=> console.log("get task",error))

        return () => {
           
        };
    }, []);

  


    const onAddTask=(data)=>{
        console.log('data',data)
        fetch(' http://localhost:5001/tasks',{
            method:'POST',
            headers:{
                "Content-type":"application/json",
            },
            body: JSON.stringify(data),
        })
        .then(response=>response.json())
        .then(response=>{
            console.log('add task',response)
            setTasks([response , ...tasks])
        })
        .catch((error)=> console.log("add task",error))
    } 

    const toggleReminder = (id) => {
        console.log("id", id);
        const task = tasks.filter((elm) => elm.id === id)[0];
        const updatedTask = { ...task, reminder: !task.reminder };
    
        fetch(`http://localhost:5001/tasks/${id}`, {
          method: "PUT",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(updatedTask),
        })
          .then((response) => response.json())
          .then((response) => {
            console.log("update tasks", response);
            const updatedTasks = tasks.map((task) =>
              task.id === id ? response : task
            );
            setTasks(updatedTasks);
          })
          .catch((error) => console.log("update task", error));
      };


      const deleteTask = (id) => {
        fetch(`http://localhost:5001/tasks/${id}`, {
          method: "DELETE",
        })
          .then((response) => {
            console.log("delete task", response);
            if (response.status === 200) {
              const updatedTasks = tasks.filter((elm) => elm.id !== id);
              setTasks(updatedTasks);
            }
          })
          .catch((error) => console.log("delete task", error));
      };

    return (
        <div className='main-container'>
            <Sun/>
            <Header/>
            
            <div className='container'>
            <AddTask onSubmitTask={
              onAddTask  
            } />

            <div className='tasks-wrapper'>
            {tasks.map((task)=>{
                    return(
                        <Task deleteTask={deleteTask} toggleReminder={toggleReminder} task={task} key={task.id}/>
                    )
                })}
            </div>
                 
            </div>
            
        </div>
    );
}

export default App;


