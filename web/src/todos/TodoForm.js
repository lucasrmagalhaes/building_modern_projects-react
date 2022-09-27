import React, { useState } from 'react';
import { connect } from 'react-redux';

import { addTodoRequest } from './thunks';
import { getTodos } from './selectors';

import './TodoForm.css';

const TodoForm = ({ todos, onCreatePressed }) => {
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
                
            <button 
                className="todo-button"
                onClick={() => {
                    const isDuplicateText = 
                        todos.some(todo => todo.text === inputValue);

                    if (!isDuplicateText) {
                        onCreatePressed(inputValue);
                        setInputValue('');
                    }
                }}
            >
                Create Todo
            </button>
        </div>
    );
};

const mapStateToProps = state => ({
    todos: getTodos(state)
});

const mapDispatchToProps = dispatch => ({
    onCreatePressed: text => dispatch(addTodoRequest(text))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);