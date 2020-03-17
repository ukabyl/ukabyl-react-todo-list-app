import React from 'react'

import './todo-list-item.css';

const TodoListItem = ({ item, onChangeImportant, onChangeDone, onDeleteItem }) => {
    const { label, important, done } = item;

    let classNames = 'todo-list-item list-group-item';
    if ( important ) {
        classNames += ' important';
    }
    if ( done ) {
        classNames += ' done';
    }

    return (
        <li className={classNames}
        >
            <span 
                onClick={onChangeDone}
            >{ label }</span>
            <div className="todo-list-item__buttons">
                <button 
                    className="btn btn-primary"
                    onClick={onChangeImportant}
                    ><i className="fa fa-exclamation"></i></button>
                <button 
                    onClick={onDeleteItem}
                    className="btn btn-danger"
                    ><i className="fa fa-trash"></i></button>
            </div>
        </li> 
    );
}

export default TodoListItem;