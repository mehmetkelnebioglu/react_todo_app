import React from 'react';

const Task = ({task, toggleReminder, deleteTask }) => {

    const {id,name,day,hour,reminder}=task

    return (
        <div className={`task ${reminder && "task-reminder"}`}
        onDoubleClick={()=>toggleReminder(id)}
        >
            <h3 className='name-section'>{name} 
             <span onClick={()=> deleteTask(id)} className='btn-delete'>x</span>
             </h3>
            
            <p>
                {" "}
                {day} {hour} {" "}
                </p>
        </div>
    );
}

export default Task;


