import React from 'react';
import "./eventCatchSideBarComponent.css"
import TextIcon from "./../../../img/catchEvt.png"

const EventCatchSideBarComponent = (props) => {
  return (
    <div id={"catch"} className="eventCatchSideBarComponent" draggable="true" onDragStart={props.drag}>
      <div className="catchimgContent">
        <img src={TextIcon} alt="TextIcon"/>
      </div>
      <span className="catchiconName">CATCH</span>
    </div>
  );
}



export default EventCatchSideBarComponent;
