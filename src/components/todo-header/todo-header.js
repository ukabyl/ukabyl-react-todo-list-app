import React from 'react'

import './todo-header.css';

const TodoHeader = () => {
    return (
        <div className="todo-header">
            <h1>My Todo List</h1>
            <span>3 more to do, 0 done</span>
        </div>
    );
}

export default TodoHeader;