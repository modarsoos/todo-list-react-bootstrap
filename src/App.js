import React from 'react';
import { useRef, useState } from 'react';
import './App.css';
import { FcCancel } from "react-icons/fc";
import { FcPlus } from "react-icons/fc";


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

  const handleDeleteNote = (index) => {
    const newTodos = [...todos]
    newTodos.splice(index, 1)
    setTodos(newTodos)
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
    <div className='container '>
      <div className="App ">
        <nav className='navbar-text text-center text-white sticky-top navbar-dark bg-info rounded mt-3'>Modar Todo-List

        </nav>

        <div className='to-do-container mb-3 mt-3' >
          <ul className='list-group'>
            {todos.map(({ text, completed }, index) => {
              return <div className="container">
                <div className="row justify-content-between">
                  <div className="col-11 rounded">
                    <li
                      className={`list-group-item ${completed ? 'text-truncate text-decoration-line-through font-monospace text-muted' : 'text-success'}`}
                      onClick={() => handleItemDone(index)}
                      key={index}>{text}
                    </li>
                  </div>
                  <div className="col">
                    <span className='deleteNote ' data-toggle="tooltip" data-placement="top" title="delete this note" onClick={() => handleDeleteNote(index)}><FcCancel /></span>
                  </div>

                </div>
              </div>

            })}
          </ul>
        </div>

        <div className="input-group flex-nowrap input-group-lg mb-3">
          <span className="input-group-text" id="addon-wrapping"><FcPlus /></span>
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