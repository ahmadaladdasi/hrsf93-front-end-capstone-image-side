import React from 'react';
import ReactDOM from 'react-dom';
import ImageSide from './ImageSide';

const App = () => (
  <div>
    <ImageSide />
  </div>
);

ReactDOM.render(<App />, document.getElementById('images-sidebar'));
