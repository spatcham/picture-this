import React, { Component } from 'react';
import FrameSelectionWidget from './FrameSelectionWidget';

class Sidebar extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="navbar-frame-grid">
          <span>Select a Frame</span>
          <FrameSelectionWidget />
        </div>
      </div>
    );
  }
}

export default Sidebar;