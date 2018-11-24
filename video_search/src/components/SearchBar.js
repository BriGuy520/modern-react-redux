import React, { Component } from 'react';
import '../styles/SearchBar.css';


class SearchBar extends Component {

  state = {term: ''};

  handleInputChange = (event) =>{
    this.setState({term: event.target.value});
  }

  render(){
    return (
      <div className="search-bar ui segment">
      <form className="ui form">
        <div className="field">
          <label>Video Search</label>
          <input
            className="prompt"
            type="text"
            value={this.state.term}
            onChange={this.handleInputChange}
            placeholder="What's on your noggin?"
          />
        </div>
      </form>      
      </div>
      
    )
  }
}

export default SearchBar;