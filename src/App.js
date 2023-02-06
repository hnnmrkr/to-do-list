import './App.css';
import './Components/FormList/FormList'
import styled from "styled-components";
import FormList from "./Components/FormList/FormList";
import NewTask from './Components/NewTask/NewTask'
import {useState} from "react";
import Tasks from "./Components/Tasks/Tasks"

const DUMMY_TASKS = [
    {
        id: 'e1',
        task: 'Do JS',
        date: new Date(2023,0,10),
        priority: 'High'
    }
]

function App() {
    const [tasks, setTasks] = useState(DUMMY_TASKS)

    const addTaskHandler = (task) => {
        setTasks((previousTasks) =>{
            return [task, ...previousTasks]
        })
    }

  return (
    <div className="App">
        <NewTask onAddTask={addTaskHandler}></NewTask>
        <Tasks tasks={tasks}></Tasks>
    </div>
  );
}

export default App;
