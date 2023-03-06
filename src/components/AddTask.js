import { Button } from '@mui/material';
import React, { useState } from 'react';

const AddTask = () => {

    const [name, setName] = useState("")

    const [day,setDay] = useState("")

    const [hour, setHour] = useState("")

    const [reminder, setReminder] = useState(false)

    return (
        <div>
            <div className='form-control'>
                <laybel>Task</laybel>
                <input type="text" 
                placeholder='Add Task..'
                value={name}
                onChange={(e)=> setName(e.target.value)}/>
            </div>
            <div className='form-control'>
                <laybel>Day</laybel>
                <input type="date" 
                placeholder='day'
                value={day}
                onChange={(e)=> setDay(e.target.value)}/>
            </div>
            <div className='form-control'>
                <laybel>Time</laybel>
                <input type="time" 
                placeholder='time'
                value={hour}
                onChange={(e)=> setHour(e.target.value)}/>
            </div>
            <div className='form-control form-control-check'>
                <laybel>Reminder</laybel>
                <input type="checkbox" 
                checked={reminder}
                value={reminder}
                onChange={(e)=> setReminder(e.currentTarget.value)}/>
            </div>

            <input type="submit" value="save task" />
           
        </div>
    );
}

export default AddTask;
