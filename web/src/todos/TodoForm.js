import React, { useState } from 'react';
import { connect } from 'react-redux';

import { addTodoRequest } from './thunks';
import { getTodos } from './selectors';

import styled from 'styled-components';

const Form = styled.div`
    border-radius: 8px;
    padding: 16px;
    text-align: center;
    box-shadow: 0 4px 8px grey;
`;

const Input = styled.input`
    font-size: 16px;
    padding: 8px;
    border: none;
    border-bottom: 2px solid #DDD;
    border-radius: 8px;
    width: 70%;
    outline: none;
`;

const Button = styled.button`
    font-size: 16px;
    padding: 8px;
    border: none;
    border-radius: 8px;
    outline: none;
    cursor: pointer;
    margin-left: 8px;
    width: 20%;
    background-color: #22EE22;
`;

const TodoForm = ({ todos, onCreatePressed }) => {
    const [inputValue, setInputValue] = useState('');

    return (
        <Form>
            <Input
                type="text"
                placeholder="Type your new todo here"
                value={inputValue}
                onChange={ e => setInputValue(e.target.value) } 
            />
                
            <Button 
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
            </Button>
        </Form>
    );
};

const mapStateToProps = state => ({
    todos: getTodos(state)
});

const mapDispatchToProps = dispatch => ({
    onCreatePressed: text => dispatch(addTodoRequest(text))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);