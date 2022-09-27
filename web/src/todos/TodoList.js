import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import TodoForm from './TodoForm';
import TodoListItem from './TodoListItem';

import { loadTodos, removeTodoRequest, markTodoAsCompletedRequest } from './thunks';
import { getTodos, getTodosLoading } from './selectors';

import './TodoList.css';

const TodoList = ({ 
    todos = [], 
    onRemovePressed, 
    onCompletedPressed, 
    isLoading, 
    startLoadingTodos 
}) => {
    useEffect(() => {
        startLoadingTodos()
    }, []);

    const loadingMessage = <div>Loading todos...</div>; 

    const content = (
        <div className='list-wrapper'>
            <TodoForm />

            {todos.map((todo) => 
                <TodoListItem
                    key={todo.id} 
                    todo={todo} 
                    onRemovePressed={onRemovePressed}
                    onCompletedPressed={onCompletedPressed}
                /> 
            )}
        </div>
    );

    return isLoading ? loadingMessage : content;
};

const mapStateToProps = state => ({
    todos: getTodos(state),
    isLoading: getTodosLoading(state)
});

const mapDispatchToProps = dispatch => ({
    onRemovePressed: id => dispatch(removeTodoRequest(id)),
    onCompletedPressed: id => dispatch(markTodoAsCompletedRequest(id)),
    startLoadingTodos: () => dispatch(loadTodos())
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);