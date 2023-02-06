import {useState} from "react";
import './TaskItem.css'
import TaskDate from './TaskDate';
import Card from "../UI/Card"

function TaskItem(props){
    return(
        <li>
            <Card className="expense-item">
                <TaskDate date={props.date}></TaskDate>
                <div className="expense-item__description">
                    <h2>{props.task}</h2>
                    <div className="expense-item__price">{props.priority}</div>
                </div>
            </Card>
        </li>
    )
}

export default TaskItem