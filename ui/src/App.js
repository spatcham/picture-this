import React, { Component } from 'react';
import Sidebar from './components/Sidebar';
import PictureCanvas from './components/PictureCanvas'
import './css/main.css';

class App extends Component {
  render() {
    return (
      <div className="main">
        <Sidebar />
        <PictureCanvas />
      </div>
    );
  }
}

export default App;
