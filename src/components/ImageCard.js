import React, { Component, createRef } from 'react';

class ImageCard extends Component {
  constructor(props) {
    super(props);

    this.imageRef = createRef();
  }

  async componentDidMount() {
    const image = await this.imageRef.current.clientHeight;
    console.log(image);
  }

  render() {
    const { urls, description } = this.props.image;

    return (
      <div>
        <img ref={this.imageRef} alt={description} src={urls.regular} />
      </div>
    );
  }
}

export default ImageCard;
