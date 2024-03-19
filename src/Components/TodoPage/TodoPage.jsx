import React, { useState } from 'react';
import './TodoPage.css';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function TodoPage() {

    const { username } = useParams();
    const [todo, setTodo] = useState("");
    const [todos, setTodos] = useState([]);

    const handleTodo = () => {
        if (todo.trim() !== "") {
          setTodos([...todos, todo]);
          setTodo("");
          toast.success("Todo added SuccessFully!");
        }else{
            toast.error("Empty Input field")
        }
      }
    
      const handleDelete = (index) => {
        const newTodos = todos.filter((item, i) => i !== index);
        setTodos(newTodos);
        toast.error("Todo Deleted Successfully !")
      }

      const handleEdit = (index)=>{
        const newTodo = todos[index];
        setTodo(newTodo);
        const newTodos = todos.filter((item, i) => i !== index);
        setTodos(newTodos);
        toast.info("Todo will be Edit!");
      }

    
    return (
        <div className='container'>
            <h2>Hello, {username}</h2>
            <div className="input-box">
                <input type="text" placeholder='Create Todo' value={todo} onChange={(e) => setTodo(e.target.value)} />
                <button onClick={handleTodo}>+</button>
            </div>

            <div className="todo-list">
                <ul>
                    {todos.length === 0 ? <p>No Todos To Display</p> : ""}
                    {
                        todos.map((item, index) => {
                            return <li key={index}>{item} <div><button className='edit' onClick={()=>handleEdit(index)}>Edit</button> <button className='dlt' onClick={() => handleDelete(index)}>Delete</button></div></li>
                        })
                    }
                </ul>
            </div>
        </div>
    )
}
