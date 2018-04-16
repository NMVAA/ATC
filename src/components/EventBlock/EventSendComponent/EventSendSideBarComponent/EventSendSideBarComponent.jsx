import React from 'react';
import "./EventSendSideBarComponent.css"
import SendEvt from "./../../../../img/sendEvt.png"

const EventSendSideBarComponent = (props) => {
  return (
    <div id={"send"} className="eventSendSideBarComponent" draggable="true" onDragStart={props.drag}>
      <div className="sendimgContent">
        <img className= "sendimg" src={SendEvt} alt="TextIcon"/>
      </div>
      <span className="sendiconName">SEND</span>
    </div>
  );
}



export default EventSendSideBarComponent;
 