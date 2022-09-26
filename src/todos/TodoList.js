import React from 'react';
import { connect } from 'react-redux';

import TodoForm from './TodoForm';
import TodoListItem from './TodoListItem';

import { removeTodo, markTodoAsCompleted } from './actions';
import { displayAlert } from './thunks';

import './TodoList.css';

const TodoList = ({ todos = [], onRemovePressed, onCompletedPressed, onDisplayAlertClicked }) => (
    <div className='list-wrapper'>
        <TodoForm />

        {todos.map((todo, key) => 
            <TodoListItem
                key={key} 
                todo={todo} 
                onRemovePressed={onRemovePressed}
                onCompletedPressed={onDisplayAlertClicked}
            /> 
        )}
    </div>
);

const mapStateToProps = state => ({
    todos: state.todos
});

const mapDispatchToProps = dispatch => ({
    onRemovePressed: text => dispatch(removeTodo(text)),
    onCompletedPressed: text => dispatch(markTodoAsCompleted(text)),
    onDisplayAlertClicked: text => dispatch(displayAlert(text))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);