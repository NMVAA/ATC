import React from 'react';
import "./ListenBoxSideBarComponent.css"
import ListenImage from "./../../../../img/listen.png"

const ListenBoxSideBarComponent = (props) => {
  return (
    <div id={"listen"} className="listenBoxSideBarComponent" draggable="true" onDragStart={props.drag}>
      <div className="listenimgContent">
        <img src={ListenImage} alt="TextIcon"/>
      </div>
      <span className="listeniconName">LISTEN</span>
    </div>
  );
}



export default ListenBoxSideBarComponent;
