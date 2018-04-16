import React from 'react';
import "./TextBoxSideBarIconComponent.css";
import TextIcon from "./../../../img/textIcon.png"

const TextBoxSideBarIconComponent = (props) => {
  return (
    <div id={"text"} className="textBoxSideBarIconComponent" draggable="true" onDragStart={props.drag}>
      <div className="container">
      <div className="imgContent">
        <img src={TextIcon} alt="TextIcon"/>
        <span className="iconTxt">T</span>
      </div>
      <span className="iconName">TEXT</span>
      </div>
    </div>
  );
}


export default TextBoxSideBarIconComponent;