import React from 'react';
import { Carousel } from 'react-responsive-carousel';


const randomData = {
  urls: ['http://lorempixel.com/output/cats-q-c-640-480-1.jpg',
    'http://lorempixel.com/output/cats-q-c-640-480-2.jpg'],
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
  }

  render() {
    return (
      <Carousel width="500px" showStatus={false} showIndicators={false}>
        {
        this.state.data.map((url, index) => (
          <div key={index}>
            <img src={url} alt="logo" />
          </div>
        ))
      }
      </Carousel>
    );
  }
}

export default ImageSide;
