import React, { Component } from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';

class App extends Component {
  state = { images: [] };

  onSearchSubmit = async term => {
    try {
      const response = await unsplash.get('/search/photos', {
        params: { query: term },
      });
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
