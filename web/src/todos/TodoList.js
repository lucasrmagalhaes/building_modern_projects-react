import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import TodoForm from './TodoForm';
import TodoListItem from './TodoListItem';

import { removeTodo, markTodoAsCompleted } from './actions';
import { loadTodos } from './thunks';

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

            {todos.map((todo, key) => 
                <TodoListItem
                    key={key} 
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
    todos: state.todos,
    isLoading: state.isLoading
});

const mapDispatchToProps = dispatch => ({
    onRemovePressed: text => dispatch(removeTodo(text)),
    onCompletedPressed: text => dispatch(markTodoAsCompleted(text)),
    startLoadingTodos: () => dispatch(loadTodos())
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);