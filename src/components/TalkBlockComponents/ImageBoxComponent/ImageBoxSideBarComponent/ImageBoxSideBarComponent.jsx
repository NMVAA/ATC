import React from 'react';
import "./ImageBoxSideBarComponent.css"
import TalkImage from "./../../../../img/talkImage.png"

const ImageBoxSideBarComponent = (props) => {
  return (
    <div id={"image"} className="imageCatchSideBarComponent" draggable="true" onDragStart={props.drag}>
      <div className="imageimgContent">
        <img src={TalkImage} alt="TextIcon"/>
      </div>
      <span className="imageiconName">IMAGE</span>
    </div>
  );
}



export default ImageBoxSideBarComponent;
