import React, { Component } from 'react'

import './filters.css';

export default class Filters extends Component {

    buttons = [
        { name: 'all', label: 'All' },
        { name: 'active', label: 'Active' },
        { name: 'done', label: 'Done' },
    ]

    state = {
        filter: '',
        
    }

    onChangeFilter = (filter) => {
        this.setState({filter});
        this.props.onChangeFilter(filter);
    }
    
    render() {
        const { filter } = this.props;

        const buttons = this.buttons.map(({ name, label }) => {
            const isActive = name === filter;
            const clazz = isActive ? 'btn-info' : 'btn-outline-secondary';
            return (
                <button
                    key={name}
                    onClick={() => this.onChangeFilter(name)}
                    className={`btn ${clazz}`}>{label}
                </button>
            );
        })

        return (
            <div className="filters">
                { buttons }
            </div>
        );
    }
}
