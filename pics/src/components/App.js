import React, { Component } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';


class App extends Component {

  onSearchSubmit(term){
    axios.get('https://api.unsplash.com/search/photos', {
      params: { query: term  },
      headers: {
        Authorization: 'Client-ID c26c12591b8eae6e0fb09793d12fdcf38f783c7bab1ba3340d61b5a1025dfd42'
      }
    });
  }

  render(){
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} /> 
      </div>
    );
  }
}

export default App;