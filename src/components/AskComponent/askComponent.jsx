import React from 'react';
import "./askComponent.css"

const AskComponent = (props) => {
  let elemData = `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">
  <foreignObject width="100%" height="100%">
 <h2>Talk</h2>
  </foreignObject>
  </svg>`;
  let elemDataB = new Blob([elemData], { type: 'image/svg+xml' });
  return (
    <div id={elemDataB} className="askComponent" data-elemdata={elemData} draggable="true"  onDragStart={props.drag} >
      <p>Ask</p>
    </div>
  );
}

export default AskComponent;
