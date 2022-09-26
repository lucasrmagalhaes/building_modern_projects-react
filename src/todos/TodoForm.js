import React, { useState } from 'react';
import './TodoForm.css';

const TodoForm = () => {
    const [inputValue, setInputValue] = useState('');

    return (
        <div className="todo-form">
            <input
                className="todo-input"
                type="text"
                placeholder="Type your new todo here"
                value={inputValue}
                onChange={ e => setInputValue(e.target.value) } 
            />
                
            <button className="todo-button">Create Todo</button>
        </div>
    );
};

export default TodoForm;