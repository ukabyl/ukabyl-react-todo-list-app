import React, { Component } from 'react'

import './app.css';

import TodoHeader from '../todo-header';
import SearchPanel from '../search-panel';
import Filter from '../filters';
import TodoList from '../todo-list';
import TodoNewItem from '../todo-new-item';

export default class App extends Component {

    maxId = 100;

    state = {
        todoData: [
            {label: 'Drink Coffee', important: false, done: false, id: 1},
            {label: 'Learn React', important: true, done: false, id: 2},
            {label: 'Build an awesome app', important: true, done: false, id: 3},
            {label: 'Do exercises', important: false, done: false, id: 4},
        ],
        search: '',
        filter: 'all'
    }

    createNewItem = (label) => {
        const newItem = {
            label, 
            important: false, 
            done: false, 
            id: this.maxId++
        }

        this.setState(({ todoData }) => {
            return {
                todoData: [...todoData, newItem]
            }
        });
    }

    onDeleteItem = (id) => {
        this.setState(({ todoData }) => {
            const idx = todoData.findIndex(el => id === el.id);

            return {
                todoData: [...todoData.slice(0, idx), ...todoData.slice(idx + 1)]
            }
        })
    }

    changeProp(arr, prop, id) {
        const idx = arr.findIndex(el => id === el.id);
        const changedItem = {...arr[idx]};

        const  newItem = {...changedItem, [prop]: !changedItem[prop]};
        
        return [
            ...arr.slice(0, idx),
            newItem,
            ...arr.slice(idx + 1)
        ];
    }

    onChangeImportant = (id) => {
        this.setState(({ todoData }) => {
            const newArr = this.changeProp(todoData, 'important', id);
            return {
                todoData: newArr
            }
        }) 
    }
    onChangeDone = (id) => {
        this.setState(({ todoData }) => {
            const newArr = this.changeProp(todoData, 'done', id);
            return {
                todoData: newArr
            }
        }) 
    }

    search(arr, searchText) {
        if (!searchText.length) {
            return arr;
        }
        return arr.filter(el => {
            return el.label.toLowerCase().indexOf(searchText.toLowerCase()) !== -1;
        })
    }

    onSearchChange = (search) => {
        this.setState({ search });
    }

    filter(arr, filter) {
        switch(filter) {
            case 'all':
                return arr;
            case 'active':
                return arr.filter(el => !el.done);
            case 'done':
                return arr.filter(el => el.done);
            default: 
                return arr;
        }
    }

    onChangeFilter = (filter) => {
        this.setState({ filter })
    }

    render() {
        const { todoData, search, filter } = this.state;
        const visibleItems = this.filter(this.search(todoData, search), filter);

        return (
            <div className="todo">
                <TodoHeader />
                <div className="todo-filters">
                    <SearchPanel onSearchChange={this.onSearchChange} />
                    <Filter filter={filter} onChangeFilter={this.onChangeFilter} />
                </div>
                <TodoList 
                    onChangeImportant={this.onChangeImportant}
                    onChangeDone={this.onChangeDone} 
                    items={visibleItems} 
                    onDeleteItem={this.onDeleteItem}/>
                <TodoNewItem createNewItem={this.createNewItem} />
            </div>
        );
    }
}