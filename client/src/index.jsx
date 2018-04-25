import React from 'react';
import ReactDOM from 'react-dom';
import ImageSide from './ImageSide';

const App = () => (
  <div>
    <ImageSide />
  </div>
);

// future Components to be added in the App Component.

ReactDOM.render(<App />, document.getElementById('images-sidebar'));
