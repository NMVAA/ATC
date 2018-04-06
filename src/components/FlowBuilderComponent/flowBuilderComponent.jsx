import React, { Component } from 'react';
import { Text, Rect, Line, Label, Layer } from 'react-konva';
import CanvasComponent from "../CanvasComponent/canvasComponent.jsx"
import ReactResizeDetector from 'react-resize-detector';
import "./flowBuilderComponent.css";
import TextBoxSmallComponent from "../TalkBlockComponents/TextBoxComponent/TextBoxSmallComponent.jsx"
import EventCatchSmallComponent from "../EventBlock/EventCatchComponent/EventCatchSmallComponent.jsx"

class FlowBuilderComponent extends Component {
  constructor() {
    super();
    this.state = {
      IsCanvas: false,
      elementsCount: 0,
      receivedData: {},
      createdElements: [],
      draggable: true,
      lineCords: null,
      isLineDrawing: false,
      isDraggable: true,
      scale: 0.75 || 0.4
    }
  }

  // Allow drop draggable object to this element 
  allowDrop = (e) => {
    e.preventDefault();
  }

  // Making data from dropped file 
  drop = (e) => {
    e.preventDefault();
    this.setState({
      elemestsCount: this.state.elementsCount++
    })
    let sideBarWidth = document.querySelector(".sideBarComponent").offsetWidth;
    let data = e.dataTransfer.getData("objectData");
    let id = data + this.state.elementsCount;
    let receivedData = this.state.receivedData;
    receivedData[id] = {
      cardType: data,
      cords: {
        x: e.clientX - 700 * (this.state.scale/2),
        y: e.clientY - 20
      }
    };
    this.setState({
      receivedData: receivedData
    })

    this.createCanvasElements();
  }

  //On drag ends  DO I NEED THIS !?!?!
  onDragEnd = (e) => {
    let {x,y} = e.target.getClientRect();
    let receivedData = this.state.receivedData;
    receivedData[e.target.attrs.name].cords = { x: x, y: y };
    this.setState({
      receivedData: receivedData
    })
    this.createCanvasElements();
  
  }
  // Set lines start position
  setLinesStartPos = (e) => {
    console.log("mouseDown");
    console.log(e.target)
  }
  // Set Lines end position
  setLinesEndPos = (e) => {
    
    if (this.state.isLineDrawing && this.state.lineCords){
      console.log(e.target.attrs.name)
    }
  }

  //Draw conections
  drawConnection= () => {
    let connections = this.state.receivedData.map((obj, i) => {
       if (obj.connectedTo){
         console.log(obj.index)
         return <Line key = {i}
         points = {[obj.connectedTo.startPos.x,
                    obj.connectedTo.startPos.y,
                    obj.connectedTo.endPos.x,
                    obj.connectedTo.endPos.y
                  ]}
         stroke = "black"
         strokeWidth = {1}
         lineCap = 'round'
         lineJoin = 'round'
         />         

    }
      })
      this.setState({
        connections: connections
      })
      console.log(this.state.connections)
    }

    activateDraggability = (e) => {
      console.log(e.target.draggable)
    }
  // Create canvas elements from this.state.receivedData 
  createCanvasElements = () => {
    let createdElements = [];
    for (let obj in this.state.receivedData){
        if (this.state.receivedData[obj].cardType === "text"){
            createdElements.push(<TextBoxSmallComponent
            onDragEnd = {this.onDragEnd}
            onMouseDown = {this.setLinesStartPos}
            onMouseUp = {this.setLinesEndPos}
            isDraggable = {this.state.isDraggable}
            activateDraggability = {this.activateDraggability}
            key = {obj + this.state.elementsCount}
            id = {obj}
            scale = {this.state.scale}
            x={this.state.receivedData[obj].cords.x} 
            y={this.state.receivedData[obj].cords.y}/>
            )
          }
          //fix first element render positioning
          if (this.state.receivedData[obj].cardType === "catch"){
              createdElements.push(<EventCatchSmallComponent
              onDragEnd = {this.onDragEnd}
              onMouseDown={this.setLinesStartPos}
              onMouseUp={this.setLinesEndPos}
              isDraggable = {this.state.isDraggable}
              key = {obj + this.state.elementsCount}
              id = {obj}
              scale = {this.state.scale}
              x={this.state.receivedData[obj].cords.x} 
              y={this.state.receivedData[obj].cords.y}
              />)
            }
        }
    this.setState({
      createdElements: createdElements
    })
  }

  // CanvasZoom 
  canvasZoom = (e) => {
    if (e.evt.altKey && this.state.scale > 0.4){
      console.log(-e.evt.deltaY/1000);
      this.setState({
        scale: this.state.scale + (-e.evt.deltaY/1000)
      })
      console.log(this.state.scale)
      this.createCanvasElements()
    } else {
      this.setState({
        scale: 0.41
      })
    }
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
  drawLine = (e) => {
      // console.log(e.evt.layerX, e.evt.layerY);
      if (this.state.isLineDrawing){
      this.setState({
        lineCords: [100,100,e.evt.layerX,e.evt.layerY]
      })
    }
  }
  render() {
    return (
      <div className="flowBuilderComponent" onDrop={this.drop} onDragOver={this.allowDrop} onKeyPress={() => {
        console.log("key")
      }}>
        <CanvasComponent
          canvasZoom = {this.canvasZoom}
          lineCords = {this.state.lineCords}
          drawLine = {this.drawLine}
          createdElements={this.state.createdElements}
          connections={this.state.connections}
          width={this.state.canvasWidth}
          height={this.state.canvasHeight} /> 
        <ReactResizeDetector handleWidth handleHeight onResize={this.resizeCanvas} />
      </div>
    );
  }
}

export default FlowBuilderComponent


