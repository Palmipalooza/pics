import React, { Component } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import accessKey from '../config';

class App extends Component {
  async onSearchSubmit(term) {
    try {
      const response = await axios.get(
        'https://api.unsplash.com/search/photos',
        {
          params: {
            query: term,
          },
          headers: {
            Authorization: `Client-ID ${accessKey}`,
          },
        }
      );
      console.log(response.data.results);
    } catch (error) {
      console.log(error);
    }
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
