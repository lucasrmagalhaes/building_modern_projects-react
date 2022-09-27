import React from 'react';

import styled from 'styled-components';

const ItemContainer = styled.div`
    background: #FFF;
    border-radius: 8px;
    border-bottom: 2px solid #22EE22;
    margin-top: 8px;
    padding: 16px;
    position: relative;
    box-shadow: 0 4px 8px grey;
`;

const ItemContainerWithWarning = styled(ItemContainer)`
    border-bottom: 2px solid red;
`;

const ButtonsContainer = styled.div`
    position: absolute;
    right: 12px;
    bottom: 12px;
`;

const Button = styled.button`
    font-size: 16px;
    padding: 8px;
    border: none;
    border-radius: 8px;
    outline: none;
    cursor: pointer;
    display: inline-block;
`;

const CompletedButton = styled(Button)`
    background-color: #22EE22;
`; 

const RemoveButton = styled(Button)`
    background-color: #EE2222;
    margin-left: 8px;
`; 

const TodoListItem = ({ todo, onRemovePressed, onCompletedPressed }) => {
    const completedButton = (
        <CompletedButton 
            onClick={() => onCompletedPressed(todo.id)}
        >
            Mark as Completed
        </CompletedButton>
    );

    const Container = todo.isCompleted ? ItemContainer : ItemContainerWithWarning;

    return (
        <Container createdAt={todo.createdAt}>
            <h3>{todo.text}</h3>

            <p>
                Create at:&nbsp;
                {( new Date(todo.createdAt)).toLocaleDateString() }
            </p>

            <ButtonsContainer>
                { todo.isCompleted ? null : completedButton }
                
                <RemoveButton 
                    onClick={() => onRemovePressed(todo.id)}
                >
                    Remove
                </RemoveButton>
            </ButtonsContainer>
        </Container>
    );
};

export default TodoListItem;