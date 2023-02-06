import React from "react";
import './NewTask.css';
import FormList from '../FormList/FormList';

const NewTask = (props) => {
    const saveTaskDatahandler = (enteredTaskData) => {
        const taskData = {
            ...enteredTaskData,
            id:Math.random().toString()
        }
        props.onAddTask(taskData)
    }
    return(
        <div className='new-task'>
            <FormList onSaveTaskData={saveTaskDatahandler}></FormList>
        </div>
    )
}

export default NewTask