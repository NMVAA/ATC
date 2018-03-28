import React, { Component } from 'react';
import "./actionComponent.css";

const ActionComponent = (props) => {
  let actionData = `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">
  <foreignObject width="100%" height="100%">
  <h2>Action</h2>
  </foreignObject>
  </svg>`;
  let actionDataBlob = new Blob([actionData], { type: 'image/svg+xml' });
  return (
    <div id={actionDataBlob} className="actionComponent" draggable="true" onDragStart={props.drag}>
      <p>Action</p>
    </div>
  );
}
export default ActionComponent;
