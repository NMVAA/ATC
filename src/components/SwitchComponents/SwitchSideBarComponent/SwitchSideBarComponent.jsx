import React from 'react';
import "./SwitchSideBarComponent.css";
import Switch from "./../../../img/switch.png"

const SwitchSideBarComponent = (props) => {
  return (
    <div id={"switch"} className="switchSideBarComponent" draggable="true" onDragStart={props.drag}>
      <div className="switchimgContent">
        <img src={Switch} alt="TextIcon"/>
      </div>
      <span className="switchiconName">SWITCH</span>
    </div>
  );
}


export default SwitchSideBarComponent;