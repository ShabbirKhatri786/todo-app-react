import React, { useState } from 'react'

function TodoMain() {
  const [list, setList] = useState("");
  const [todo, setTodo] = useState([]);

  const handleSave = (e) => {
    setList(e.target.value);
  };

  const addButton = () => {
    if (list !== '') {
      setTodo([...todo, list]);
      setList('');
      console.log([...todo, list]);
    }
  };

  return (
    <div>
      <h1>TodoApp</h1>
      <div className='main-container'>
        <input className='input' type='text' onChange={handleSave} value={list} placeholder='Enter Text' />
        <button onClick={addButton}>Add</button>
        <div>

        </div>
        <ul>
          {todo.map((todo, index) => {
            <li key={index}>{todo}</li>
          })}
        </ul>
      </div>
    </div>
  )
}

export default TodoMain;