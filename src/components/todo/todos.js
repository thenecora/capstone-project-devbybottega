import React from 'react';
import { useState } from 'react';

import nextId from 'react-id-generator';

import TodosList from '../todo/todos-list';


export default function Todos() {

    const [title, setTitle] = useState("");
    const [todos, setTodos] = useState([]);

    function handleChange(e) {
        const value = e.target.value;

        setTitle(value)
    }

    function handleSubmit(e) {
        e.preventDefault();

        const newTodo = {
            id: nextId(),
            title: title,
            completed: false
        };

        setTodos([... todos, newTodo]);

        setTitle("");
    }

    function handleUpdate(id, value){
        const temp = [...todos];
        const item = temp.find((item) => item.id === id);
        item.title = value;
        setTodos(temp);
    }

    function handleDelete(id){
        const temp = todos.filter(item => item.id !== id );

        setTodos(temp);
    }

    return (
        <div className='todo-container'>

            <h1>Welcome to your To-Do App</h1>

            <form className='todo-form' onSubmit={handleSubmit}>
                <input
                    onChange={handleChange}
                    className='todo-input'
                    value={title}
                />
                <input 
                    onClick={handleSubmit}
                    type="submit"
                    value= "Add"
                    className='btn-add'
                />
            </form>

            <div className='todos-list-container'>
                {todos.map(item => (
                    <TodosList key={item.id} item={item} onUpdate={handleUpdate} onDelete={handleDelete}/>
                ))}
            </div>
        </div>
    );
}