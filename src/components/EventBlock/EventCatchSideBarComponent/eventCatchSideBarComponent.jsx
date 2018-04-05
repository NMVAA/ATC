import React from 'react';
import "./eventCatchSideBarComponent.css"

const EventCatchSideBarComponent = (props) => {
  return (
    <div id={"catch"} className="eventCatchSideBarComponent" draggable="true"  onDragStart={props.drag} >
      <p>Catch</p>
    </div>
  );
}

export default EventCatchSideBarComponent;
