import {useState} from "react";
import './FormList.css'

const FormList = (props) => {
    const [userInput, setUserInput] = useState({
        enteredTask: '',
        enteredDate: '',
        enteredPriority: ''
    })

    const taskChangeHandler = (event) => {
        setUserInput({
            ...userInput,
            enteredTask: event.target.value
        })
    }
    const dateChangeHandler = (event) => {
        setUserInput({
            ...userInput,
            enteredDate: event.target.value
        })
    }
    const priorityChangeHandler = (event) => {
        setUserInput({
            ...userInput,
            enteredPriority: event.target.value
        })
    }

    const submitHandler = (event) => {
        event.preventDefault()
        const taskData = {
            task: userInput.enteredTask,
            date: new Date(userInput.enteredDate),
            priority: userInput.enteredPriority
        }
    props.onSaveTaskData(taskData)
        setUserInput({
            enteredTask: '',
            enteredDate: '',
            enteredPriority: ''
        })
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__control">
                <h1 >TO-DO LIST</h1>
                <div className="new-expense__controls">
                    <label>New Task</label><br/>
                    <input type="text" onChange={taskChangeHandler} value={userInput.enteredTask}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" onChange={dateChangeHandler} value={userInput.enteredDate}/>
                </div>
                <div className="new-expense__control">
                    <label>Select task priority</label>
                    <select onChange={priorityChangeHandler} value={userInput.enteredPriority}>
                        <option value="All">All</option>
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                    </select>
                </div>
                <div className="new-expense__actions">
                    <button type="submit">Add Task</button>
                </div>
            </div>
        </form>
    )
}

export default FormList

