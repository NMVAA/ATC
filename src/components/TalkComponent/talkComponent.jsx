import React from 'react';
import "./talkComponent.css";

const TalkComponent = (props) => {
  return (
    <div id={"text"} className="talkComponent" draggable="true" onDragStart={props.drag}>
      <p>{`Text`}</p>
    </div>
  );
}


export default TalkComponent;