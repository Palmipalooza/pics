import React, { Component } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import accessKey from '../config';

class App extends Component {
  onSearchSubmit(term) {
    axios.get('https://api.unsplash.com/search/photos', {
      params: {
        query: term,
      },
      headers: {
        Authorization: `Client-ID ${accessKey}`,
      },
    });
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
