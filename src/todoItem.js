// import React,{useState} from "react";

// function TodoInput(props) {
//     const [inputText,setInputText] = useState('');
//     const handleEnterPress = (e)=>{
//         if(e.keyCode===13){
//             props.addList(inputText)
//             setInputText("")
//         }
//     }
//   return (
//     <div className="input-container">
//       <input
//         type="text"
//         className="input-box-todo"
//         placeholder="Enter your todo"
//         value={inputText}
//         onChange={e=>{
//             setInputText(e.target.value)
//         }}
//         onKeyDown={handleEnterPress}
//       />
//       <button className="add-btn" 
//       onClick={()=>{
//         props.addList(inputText)
//         setInputText("")
//       }}>+</button>      
//     </div>
//   );
// }

// export default TodoInput;





// import React from 'react'

// function Todolist(props) {
//   return (
//     <li className="list-item">
//         {props.item}
//         <span className='icons'>
//         <i className="fa-solid fa-trash-can icon-delete" 
//         onClick={e=>{
//             props.deleteItem(props.index)
//         }}></i>
//         </span>
//     </li>
//   )
// }

// export default Todolist