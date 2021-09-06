import React from 'react';

class SearchBar extends React.Component {
    state = { term: '' }

    handleChange = (e) => {
        this.setState({ term: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onTermSubmit(this.state.term);        
    }    

    render() {
        return (
            <div className="ui segment search-bar">
                <form className="ui form" onSubmit={this.handleSubmit}>
                    <div className="field">
                        <label>Search Video</label>
                        <input type="text" placeholder="Search..." value={this.state.term} onChange={this.handleChange}></input>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;