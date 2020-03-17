import React, { Component } from 'react'

import './todo-new-item.css';

export default class TodoNewItem extends Component {
    
    state = {
        newItem: '',
        clazz: ''
    }

    onNewItemChanged = (e) => {
        const newItem = e.target.value;
        this.setState({newItem})
    }

    createNewItem = (e) => {
        e.preventDefault();
        console.log(e)
        if ( this.state.newItem.length < 1 ) {
            return
        }
        this.props.createNewItem(this.state.newItem);
    }

    render() {
        return (
            <div className="todo-new-item">
                <form onSubmit={this.createNewItem}>
                    <input
                        value={this.state.newItem}
                        onChange={this.onNewItemChanged} 
                        className="form-control"
                        type="text" 
                        placeholder="What would like to do?" />
                    <button type="submit" className="btn btn-outline-secondary">Add</button>
                </form>
            </div>
        );
    }
}
