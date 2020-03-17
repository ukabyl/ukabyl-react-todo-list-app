import React from 'react'

import './todo-list.css';

import TodoListItem from '../todo-list-item';

const TodoList = ({ items, onChangeImportant, onChangeDone, onDeleteItem }) => {
    const elements = items.map((item) => {
        const { id, ...props } = item;

        return <TodoListItem 
            onChangeImportant={() => onChangeImportant(id)}
            onChangeDone={() => onChangeDone(id)}
            onDeleteItem={() => onDeleteItem(id)} 
            key={id} item={props} />
    })

    return (
        <ul className="todo-list list-group text-center">
            { elements.length ? elements : 'You\'ve done everything you want' }
        </ul>
    );
}

export default TodoList;

