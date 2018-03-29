import React from 'react';
import "./actionComponent.css";

const ActionComponent = (props) => {
  return (
    <div id={"ActionComponent"} className="actionComponent" draggable="true" onDragStart={props.drag}>
      <p>Action</p>
    </div>
  );
}
export default ActionComponent;
