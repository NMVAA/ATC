import React, { Component } from 'react';
import "./askComponent.css"

const AskComponent = (props) => {
  return (
    <div className="askComponent" draggable="true" onDragStart={props.drag} >
      <p>Ask</p>
    </div>
  );
}

export default AskComponent;
