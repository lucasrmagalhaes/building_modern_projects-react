import React from 'react';

import TodoForm from './TodoForm';
import TodoListItem from './TodoListItem';

import './TodoList.css';

const TodoList = ({ todos = [{ text: 'Hello' }] }) => (
    <div className='list-wrapper'>
        <TodoForm />

        {todos.map((todo, key) => 
            <TodoListItem
                key={key} 
                todo={todo} 
            /> 
        )}
    </div>
);

export default TodoList;