import React, { useState } from 'react'

function TodoMain() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);
  const [edit, setEdit] = useState(false);
  const [index, setIndex] = useState(null);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSave = () => {
    if (input !== '')
      setList([...list, input]);
    setInput('');
    console.log([...list, input]);

  };

  const handleDelete = (index) => {
    const deleteItem = list.filter((e, i) => (index !== i))
    setList(deleteItem);
    console.log("delete item", index)
  };



  const handleEdit = (index) => {
    const editItem = list.filter((e, i) => i == index)
    setInput(editItem);
    setIndex(index)
    setEdit(true)


  };

  const handerUpdate = () => {
    const editItem = list.map((e, i) => i == index ? input : e)
    setList(editItem)
    setIndex(null)
    setInput("")
    setEdit(false)
  };

  const handleEnterPress =(e)=>{
    if(e.key === "Enter"){
      if(edit){
        handerUpdate();
      }else{
        handleSave();
      }
    }
  };

  return (
    <div>
      <h1>TodoApp</h1>
      <div className='main-container'>
        <input
          className='input'
          type='text'
          onChange={handleChange}
          value={input}
          placeholder='Enter Text'
          onKeyDown={handleEnterPress}
          />
        

        {
          edit ? <button onClick={handerUpdate}>Update</button> :
            <button onClick={handleSave}>Add</button>
        }

      </div>

      {list.map((list, index) => {
        return (
          <div className="todo-item">
            <ul className='list'>
              
              <li key={index}>{list}</li>
              <button onClick={() => handleEdit(index)}>Edit</button>
              <button onClick={() => handleDelete(index)}>Delete</button>

            </ul>
          </div>
        )
      })}

    </div>
  )
}

export default TodoMain;