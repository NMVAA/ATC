import React from 'react';
import "./SwitchSideBarComponent.css"
import TextIcon from "./../../../img/catchEvt.png"

const SwitchSideBarComponent = (props) => {
  return (
    <div id={"switch"} className="switchSideBarComponent" draggable="true" onDragStart={props.drag}>
      <div className="switchimgContent">
        <img src={TextIcon} alt="TextIcon"/>
      </div>
      <span className="switchiconName">SWITCH</span>
    </div>
  );
}



export default SwitchSideBarComponent;
