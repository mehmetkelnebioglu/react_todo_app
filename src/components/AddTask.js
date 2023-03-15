
import React, { useState } from 'react';

const AddTask = ({onSubmitTask}) => {

    const [name, setName] = useState("")

    const [day,setDay] = useState("")

    const [hour, setHour] = useState("")

    const [reminder, setReminder] = useState(false)

    const onSubmit = (e)=>{
        e.preventDefault()
        console.log("test",name,day,hour)
        if(!name || !day || !hour){
            alert("please fill the inputs")
        }
        onSubmitTask({name,day,hour,reminder})
    }


    return (
        <form onSubmit={onSubmit} >
            <div className='form-control'>
                <label>Task</label>
                <input type="text" 
                placeholder='Add Task..'
                value={name}
                onChange={(e)=> setName(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label>Day</label>
                <input type="date" 
                placeholder='day'
                value={day}
                onChange={(e)=> setDay(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label>Time</label>
                <input type="time" 
                placeholder='time'
                value={hour}
                onChange={(e)=> setHour(e.target.value)}/>
            </div>
            <div className='form-control form-control-check'>
                <label>Reminder</label>
                <input type="checkbox" 
                checked={reminder}
                value={reminder}
                onChange={(e)=> setReminder(e.currentTarget.checked)}/>
            </div>

            <input type="submit" value="save task" className="btn btn-block" />
           
        </form>
    );
}

export default AddTask;
