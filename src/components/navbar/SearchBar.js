import React from "react";
import "./navbar.css";

class SearchBar extends React.Component {
    state = { term: "" }

    onFormSubmit = e => {
        e.preventDefault()
        this.props.onFormSubmit(this.state.term)
        console.log(this.state.term)
    }

    onInputChange = e => {
        this.setState({term: e.target.value})
        console.log(this.state.term)
    }
    
    render(){
        return(
            <form onSubmit={this.onFormSubmit} className="ui fluid action input">
                <input 
                    type="text"
                    onChange={this.onInputChange}
                    placeholder="Search..."
                />
                <div onSubmit={this.onFormSubmit} className="ui-button ui button">Search</div>
            </form>
        );
    }
}

export default SearchBar;