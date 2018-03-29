import React from 'react';
import "./talkComponent.css";

const TalkComponent = (props) => {
  return (
    <div id={"TalkComponent"} className="talkComponent" draggable="true" onDragStart={props.drag}>
      <p>{`Talk`}</p>
    </div>
  );
}


export default TalkComponent;