import React, { Component } from 'react';
import { Text, Rect, Line, Label, Layer } from 'react-konva';
import CanvasComponent from "../CanvasComponent/canvasComponent.jsx"
import p5Component from "../p5Component/p5Component.js"
import ReactResizeDetector from 'react-resize-detector';
import "./flowBuilderComponent.css";

class FlowBuilderComponent extends Component {
  constructor() {
    super();
    this.state = {
      IsCanvas: false,
      receivedData: [],
      createdElements: [],
      draggable: true

    }
  }

  // Allow drop draggable object to this element 
  allowDrop = (e) => {
    e.preventDefault();
  }

  // Making data from dropped file 
  drop = (e) => {
    e.preventDefault();
    let sideBarWidth = document.querySelector(".sideBarComponent").offsetWidth;
    let data = e.dataTransfer.getData("objectData");
    let receivedData = this.state.receivedData;
    receivedData.push({
      objectData: data,
      cords: {
        x: e.clientX,
        y: e.clientY
      },
      connectedTo: {}
    })
    this.setState({
      receivedData: receivedData
    })

    this.createCanvasElements();
  }

  //On drag ends 
  onDragEnd = (e) => {
    let receivedData = this.state.receivedData;
    receivedData[e.target.index].cords = { x: e.evt.x, y: e.evt.y };
    this.setState({
      receivedData: receivedData
    })
    this.createCanvasElements()
  }
  // Set lines start position
  setLinesStartPos = (e) => {
    console.log("mouseDown")
    let receivedData = this.state.receivedData;
    receivedData[e.target.index - 1].connectedTo = {
      ...receivedData[e.target.index - 1].connectedTo,
      startPos: { x: e.target.attrs.x, y: e.target.attrs.y }
    }
    this.setState({
      receivedData: receivedData
    })
  }
  // Set Lines end position
  setLinesEndPos = (e) => {
    console.log(e)
  }
  // Create canvas elements from this.state.receivedData 
  createCanvasElements = () => {
    let canvasElements = this.state.receivedData.map((obj, i) => {
      return <Label
        key={i}
        draggable={this.state.draggable}
        onDragEnd={this.onDragEnd}
        x={obj.cords.x - 200}
        y={obj.cords.y}
      >
        <Rect
          x={0}
          y={0}
          width={50}
          height={50}
          stroke="black"
          strokeWidth={1}
          onMouseOver={() => {
            this.setState({
              ...this.state, draggable: true
            });
            this.createCanvasElements()
          }
          }

        />
        <Rect
          x={20}
          y={40}
          width={10}
          height={10}
          fill="black"
          onMouseDown={this.setLinesStarPos}
          onMouseUp={this.setLinesEndPos}
          onMouseOver={() => {
            this.setState({
              ...this.state, draggable: false
            })
            this.createCanvasElements()
          }
          }
        />

      </Label>
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


