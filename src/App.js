import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AddTaskAction, RemoveTAskAction } from './reduxtodo/acions/TodoActions';

const App = () => {
  const[newTask , setNewTask] = useState('');
  const dispatch = useDispatch();
const handleSubmit =(e) =>{
  e.preventDefault();
  dispatch(AddTaskAction(newTask));
  setNewTask("");

}
const handleDelete = (task) => {
  dispatch(RemoveTAskAction(task));
};

const todoState = useSelector((state) => state.Task)
const {taskBox} = todoState;



  return (
    <div>
      <h1>Todo App</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter a Todo" value={newTask} onChange={(e) => setNewTask(e.target.value) }  style={{
            width: 350,
            padding: 10,
            borderRadius: 20,
            border: 'none',
            fontSize: 20,
          }} />
        <button type="submit"  style={{
            padding: 12,
            borderRadius: 25,
            fontSize: 15,
            marginLeft: 20,
          }} >Add</button>
      </form>

      <ul>
        {taskBox && taskBox.map((task) =>(
          <li key={task.id}>
            <span>{task.task}</span>
            <button onClick={() => handleDelete(task)}  style={{
                  borderRadius: 25,
                  padding: 10,
                  border: '1px solid white',
                  color: 'white',
                  backgroundColor: 'orangered',
                }}>Delete</button>
          </li>

        ))}
      </ul>

    </div>
  )
}

export default App