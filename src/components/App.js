import React, { Component } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import accessKey from '../config';

class App extends Component {
  state = { images: [] };

  onSearchSubmit = async term => {
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
      this.setState({ images: response.data.results });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        Found: {this.state.images.length} images
      </div>
    );
  }
}

export default App;
