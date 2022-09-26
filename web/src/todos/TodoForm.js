import React, { useState } from 'react';
import { connect } from 'react-redux';

import { createTodo } from './actions';

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
    todos: state.todos
});

const mapDispatchToProps = dispatch => ({
    onCreatePressed: text => dispatch(createTodo(text))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);