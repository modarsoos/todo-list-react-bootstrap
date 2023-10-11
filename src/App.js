import { useRef, useState } from 'react';
import './App.css';
// import { FaBeer } from 'react-icons/fa';
// import Button from 'react-bootstrap/Button';
// import { Button, Form } from "react-bootstrap";

function App() {
  const [todos, setTodos] = useState([]);
  const inputRef = useRef();

  // Add buttun Function
  const handleAddTodo = () => {
    const inputValue = inputRef.current.value.trim(); // Remove spaces from the beginning and end of the text
  
    if (inputValue !== "") {
      const newItem = { completed: false, text: inputValue };
      setTodos([...todos, newItem]);
    // call function to clear form after add a note
      handleClearTodo();
    }
  }

  const handleItemDone = (index) => {
    const newTodos = [...todos]
    newTodos[index].completed = !newTodos[index].completed
    setTodos(newTodos)
  }

  // Clear buttun Function
  const handleClearTodo = () => {
    inputRef.current.value = '';
    // console.log(text)
  }

  const handleRemoveTodo = () => {
    if (todos.length > 0) {
      const newTodos = [...todos];
      newTodos.pop();
      setTodos(newTodos);
    }
  }

  // functions to edit the list
  // if (todos.length === 5) {
  //   todos.unshift('you reached the 5 element')
  // }
  // if (todos.length === 7) {
  //   todos.unshift('you reached the 7 element')
  // }
  // if (todos.length === 9) {
  //   todos.sort()
  // }

  return (
    <div className='container'>
      <div className="App">
        <h2 className='title text-center'>Modar Todo-List <span role="img" aria-label="tada">🎉</span> </h2>

        <div className='to-do-container mb-3' >
          <ul className='list-group'>
            {todos.map(({ text, completed }, index) => {
              return <li
                className={`list-group-item ${completed ? 'text-decoration-line-through font-monospace text-muted' : ''}`}
                onClick={() => handleItemDone(index)}
                key={index}>{text}
              </li>

            })}
          </ul>
        </div>

        <div className="input-group flex-nowrap input-group-lg mb-3">
          <span className="input-group-text" id="addon-wrapping">✏️</span>
          <input type="text" className='form-control' ref={inputRef} placeholder="Add new item..." aria-label="notes" aria-describedby="addon-wrapping"></input>
        </div>

        <div className="btn-group mb-3 d-flex flex-md-column flex-sm-row" role="group" aria-label="Basic buttons">
          <button type="button" className="btn btn-outline-success flex-fill" onClick={handleAddTodo}>Add</button>

          <button type="button" className="btn btn-outline-warning flex-fill" onClick={handleClearTodo}>Clear</button>

          <button type="button" className="btn btn-outline-danger flex-fill" onClick={handleRemoveTodo}>Remove last note</button>
        </div>

        <p className="alert alert-dark text-center font-monospace" role="alert">You have: <span className="badge bg-secondary">{todos.length}</span> notes in your list</p>
      </div>
    </div>
  );
}

export default App;