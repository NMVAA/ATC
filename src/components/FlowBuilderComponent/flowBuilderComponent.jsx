import React, { Component } from 'react';
import { Text, Rect } from 'react-konva';
import CanvasComponent from "../CanvasComponent/canvasComponent.jsx"
import ReactResizeDetector from 'react-resize-detector';
import "./flowBuilderComponent.css";

class FlowBuilderComponent extends Component {
  constructor() {
    super();
    this.state = {
      IsCanvas: false,
      receivedData: [],
      createdElements: []

    }
  }

  // Allow drop draggable object to this element 
  allowDrop = (e) => {
    e.preventDefault();
  }

  // Making data from dropped file 
  drop = (e) => {
    e.preventDefault();
    console.log("x.pos: .", e.clientX, "y.pos: ", e.clientY)
    let sideBarWidth = document.querySelector(".sideBarComponent").offsetWidth;
    let data = e.dataTransfer.getData("objectData");
    let receivedData = this.state.receivedData;
    receivedData.push({
      objectData: data,
      cords: {
        x: e.clientX,
        y: e.clientY
      }
    })
    this.setState({
      receivedData: receivedData
    })
    
    this.createCanvasElements();
  }

  //On drag ends 
  onDragEnd = (e) => {
    let receivedData = this.state.receivedData;
    console.log(receivedData[e.target.index  - 1]);
    receivedData[e.target.index - 1].cords = { x: e.evt.x, y: e.evt.y };
    this.setState({
      receivedData: receivedData
    })
    console.log("cords in state", this.state.receivedData[0].cords);
    console.log("created element in state", this.state.createdElements[0].props);
    this.createCanvasElements()
  }
  // Create canvas elements from this.state.receivedData 
  createCanvasElements = () => {
    let canvasElements = this.state.receivedData.map((obj, i) => {
      return <Rect
        key={i}
        x={obj.cords.x - 200}
        y={obj.cords.y}
        width={50}
        height={50}
        fill='black'
        draggable={true}
        onMouseUp={this.canvasElementClickHandler}
        onDragEnd={this.onDragEnd}
      />
    });
    this.setState({
      createdElements: canvasElements
    })

  }

  // Resizing Canvas to the container size 
  resizeCanvas = () => {
    let con = document.querySelector(".flowBuilderComponent");
    let width = con.offsetWidth;
    let height = con.offsetHeight;
    this.setState({
      canvasWidth: width,
      canvasHeight: height
    })
  }
  componentDidMount() {
    this.resizeCanvas();
  }
  render() {
    return (
      <div className="flowBuilderComponent" onDrop={this.drop} onDragOver={this.allowDrop}>
        <CanvasComponent createdElements={this.state.createdElements} width={this.state.canvasWidth} height={this.state.canvasHeight} />
        <ReactResizeDetector handleWidth handleHeight onResize={this.resizeCanvas} />
      </div>
    );
  }
}

export default FlowBuilderComponent


