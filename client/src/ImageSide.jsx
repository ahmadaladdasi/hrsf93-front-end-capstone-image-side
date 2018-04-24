import React from 'react';
import { Carousel } from 'react-responsive-carousel';


const randomData = {
  urls: ['#'],
  _id: '5ad7f2d009f1fa5d5b8f6303',
  id: 100101,
  name: 'cats',
};

class ImageSide extends React.Component {
  constructor() {
    super();
    this.state = {
      data: randomData.urls,
    };
    this.loadSlides = this.loadSlides.bind(this);
  }

  componentDidMount() {
    fetch(`http://127.0.0.1:24623${window.location.pathname}data`)
      .then(info => info.json())
      .then((info) => {
        this.loadSlides(info.urls);
        this.setState({ data: info.urls });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  loadSlides(pics) {
    this.setState({
      data: pics,
    });
  }

  render() {
    return (
      <Carousel width="500px" showStatus={false} showIndicators={false}>
        {
        this.state.data.map((url, index) => (
          <img key={index} src={url} alt="logo" />
        ))
      }
      </Carousel>
    );
  }
}

export default ImageSide;
