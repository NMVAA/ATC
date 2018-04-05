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
      receivedData: [],
      createdElements: [],
      draggable: true,
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
      cardType: data,
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
    receivedData[e.target.index].cords = { x: e.evt.x, y: e.evt.y };
    this.setState({
      receivedData: receivedData
    })
    this.createCanvasElements()
  }
  // Set lines start position
  setLinesStartPos = (e) => {
    console.log("mouseDown");
    let receivedData = this.state.receivedData;
    receivedData[e.target.index - 1].connectedTo = {
      ...receivedData[e.target.index - 1].connectedTo,
      startPos: { x: e.evt.x - 200, y: e.evt.y },// need to calc correnct pos
      
    }
    receivedData[e.target.index - 1].startTargetIndex = e.target._id
    this.setState({
      receivedData: receivedData,
    })

    console.log(this.state.receivedData)
  }
  // Set Lines end position
  setLinesEndPos = (e) => {
    console.log(e.target._id);
    let receivedData = this.state.receivedData;
    receivedData[e.target.index - 1].connectedTo = {
      ...receivedData[e.target.index - 1].connectedTo,
      endPos: { x: e.evt.x - 200, y: e.evt.y },// need to calc correnct pos
      
    }
    receivedData[e.target.index - 1].endTargetIndex = e.target._id
    this.setState({
      receivedData: receivedData,
      endTargetIndex: e.target.index

    })
    this.drawConnection();
    console.log(this.state.receivedData)
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
  // Create canvas elements from this.state.receivedData 
  createCanvasElements = () => {
    let canvasElements = this.state.receivedData.map((obj, i) => {
      if (obj.cardType === "text"){
        return <TextBoxSmallComponent
        x={obj.cords.x - 200} 
        y={obj.cords.y}/>
      }

      if (obj.cardType === "catch"){
        return <EventCatchSmallComponent
        x={obj.cords.x - 200} 
        y={obj.cords.y}/>
      }

      // return <Label
      //   key={i}
      //   draggable={this.state.draggable}
      //   onDragEnd={this.onDragEnd}
      //   x={obj.cords.x - 200}
      //   y={obj.cords.y}
      // >
      //   <Rect
      //     x={0}
      //     y={0}
      //     width={50}
      //     height={50}
      //     stroke="black"
      //     strokeWidth={1}
      //     onMouseOver={() => {
      //       this.setState({
      //         ...this.state, draggable: true
      //       });
      //       this.createCanvasElements()
      //     }
      //     }

      //   />
      //   <Rect
      //     x={20}
      //     y={40}
      //     width={10}
      //     height={10}
      //     fill="black"
      //     onMouseDown={this.setLinesStartPos}
      //     onMouseUp={this.setLinesEndPos}
      //     onMouseOver={() => {
      //       this.setState({
      //         ...this.state, draggable: false
      //       })
      //       this.createCanvasElements()
      //     }
      //     }
      //   />

      // </Label>
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
        <CanvasComponent createdElements={this.state.createdElements} connections={this.state.connections} width={this.state.canvasWidth} height={this.state.canvasHeight} /> 
        <ReactResizeDetector handleWidth handleHeight onResize={this.resizeCanvas} />
      </div>
    );
  }
}

export default FlowBuilderComponent


