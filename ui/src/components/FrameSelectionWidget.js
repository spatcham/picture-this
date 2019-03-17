import React, { Component } from 'react';
import FrameItem from './FrameItem'

class FrameSelectionWidget extends Component {
  render() {
    return (
      <div className="frame-widget">
        <FrameItem />
        <FrameItem />
        <FrameItem />
        <FrameItem />
        <FrameItem />
      </div>
    );
  }
}

export default FrameSelectionWidget;