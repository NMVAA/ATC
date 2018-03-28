import React, { Component } from 'react';
import "./sideBarComponent.css";


class SideBarComponent extends Component {
  render() {
    return (
      <div className="sideBarComponent">
        {this.props.children}
      </div>
    );
  }
}

export default SideBarComponent;
