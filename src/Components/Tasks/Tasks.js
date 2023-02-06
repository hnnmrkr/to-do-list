import {useState} from "react";

import './Tasks.css'
import TaskItem from "./TaskItem";
import Card from "../UI/Card"
import TasksFilter from "../TasksFilter/TasksFilter";
import TasksList from "./TasksList"

function Tasks(props) {
    const [filteredPriority, setFilteredPriority] = useState('low')

    const filterChangeHandler = (priority) => {
        setFilteredPriority(priority)
    }

    props.tasks.map((task) => {
        console.log(task)
    })

    const filteredTasks = props.tasks.filter((task) => {
        return task.priority === filteredPriority
    })
    return (
        <Card className='expenses'>
            <TasksFilter selected={filteredTasks} onChangeFilter={filterChangeHandler}></TasksFilter>
            <TasksList filteredTasks={filteredTasks}></TasksList>
        </Card>
    )
}

export default Tasks