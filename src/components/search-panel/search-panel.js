import React, { Component } from 'react';

export default class SearchPanel extends Component {

    state = {
        search: ''
    }

    onSearchChange = (e) => {
        const search = e.target.value;
        this.setState({ search })
        this.props.onSearchChange(search);
    }
    
    render() {
        return (
            <div className="search-panel">
                <input 
                    className="form-control" 
                    type="text"
                    value={this.state.search} 
                    placeholder="What would like to find?" 
                    onChange={this.onSearchChange}/>
            </div>
        );
    }
}
