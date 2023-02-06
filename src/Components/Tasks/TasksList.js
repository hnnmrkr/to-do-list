import React from "react";
import TaskItem from "./TaskItem";
import "./TasksList.css";

const TasksList = (props) => {
    if(props.filteredTasks.length === 0){
        return <p className="expenses-list__fallback">No tasks found.</p>
    }
    return (
        <ul className="expenses-list">
            {
                props.filteredTasks.map((task) => {
                    return <TaskItem
                        id={task.id}
                        task={task.task}
                        date={task.date}
                        priority={task.priority}
                    ></TaskItem>
                })
            }
        </ul>
    )
}

export default TasksList
