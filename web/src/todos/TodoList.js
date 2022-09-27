import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import TodoForm from './TodoForm';
import TodoListItem from './TodoListItem';

import { 
    loadTodos, 
    removeTodoRequest, 
    markTodoAsCompletedRequest 
} from './thunks';

import { 
    getTodosLoading, 
    getCompletedTodos, 
    getIncompleteTodos 
} from './selectors';

import styled from 'styled-components';

const ListWrapper = styled.div`
    max-width: 700px;
    margin: auto;
`;

const TodoList = ({ 
    completedTodos,
    incompleteTodos,
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
        <ListWrapper>
            <TodoForm />

            <h3>Incomplete:</h3>

            {incompleteTodos.map((todo) => 
                <TodoListItem
                    key={todo.id} 
                    todo={todo}
                    onRemovePressed={onRemovePressed}
                    onCompletedPressed={onCompletedPressed}
                /> 
            )}

            <h3>Completed:</h3>
            
            {completedTodos.map((todo) => 
                <TodoListItem
                    key={todo.id} 
                    todo={todo}
                    onRemovePressed={onRemovePressed}
                    onCompletedPressed={onCompletedPressed}
                /> 
            )}
        </ListWrapper>
    );

    return isLoading ? loadingMessage : content;
};

const mapStateToProps = state => ({
    completedTodos: getCompletedTodos(state),
    incompleteTodos: getIncompleteTodos(state),
    isLoading: getTodosLoading(state)
});

const mapDispatchToProps = dispatch => ({
    onRemovePressed: id => dispatch(removeTodoRequest(id)),
    onCompletedPressed: id => dispatch(markTodoAsCompletedRequest(id)),
    startLoadingTodos: () => dispatch(loadTodos())
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);