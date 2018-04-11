import React, { Component } from 'react';
import { Text, Rect, Line, Label, Layer, Arrow} from 'react-konva';
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
      isDraggable: false,
      scale: 2.5 || 0.4,
      scaleStage: 1
    }
    this.isLineDrawing = false;
    this.linesStartElement =  "";
    this.otherCordsforCollisionFunc = null
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
        x: e.clientX - 700 / 2,
        y: e.clientY - 20
      },
      connectedTo: []
    };
    this.setState({
      receivedData: receivedData
    })

    this.createCanvasElements();
  }

  //On drag ends  DO I NEED THIS !?!?!
  onDragEnd = (e) => {
    let {x,y} = e.target.getClientRect();
    let {width,height} = e.target.getClientRect();
    let receivedData = this.state.receivedData;
    let name = e.target.attrs.name;
    receivedData[name].cords = { x: x, y: y };
    receivedData[name].size = { width: width, height: height };
    if (this.otherCordsforCollisionFunc){
      receivedData[name].cords = {
        x: this.otherCordsforCollisionFunc.x > x ?
           this.otherCordsforCollisionFunc.x - width:
           this.otherCordsforCollisionFunc.x + width + width/10,
        y: y };
      this.otherCordsforCollisionFunc = {};
    }

    this.setState({
      receivedData: receivedData
    })

    this.createCanvasElements();
  }
  // Set lines start position
  setLinesStartPos = (e) => {
    this.linesStartElement = e.target.attrs.name
    this.isLineDrawing = true
    this.createCanvasElements();
    let receivedData = this.state.receivedData;
    if (!this.state.receivedData[e.target.attrs.name].size){
      receivedData[e.target.attrs.name].connectedTo.startPos = {x: e.evt.layerX, y: e.evt.layerY};
      receivedData[e.target.attrs.name].connectedTo.endPos = {x: e.evt.layerX, y: e.evt.layerY}
    } else {
      receivedData[e.target.attrs.name].connectedTo.startPos = {
        x: this.state.receivedData[e.target.attrs.name].cords.x + (this.state.receivedData[e.target.attrs.name].size.width /2) ,
        y: this.state.receivedData[e.target.attrs.name].cords.y + (this.state.receivedData[e.target.attrs.name].size.height)
      }
      receivedData[e.target.attrs.name].connectedTo.endPos = {
        x: e.evt.layerX,
        y: e.evt.layerY
      }
    }
    this.setState({
      receivedData: receivedData
    })
    this.drawConnection()
  }
  // Set Lines end position
  setLinesEndPos = (e) => {
    let receivedData = this.state.receivedData;
    this.isLineDrawing = false;
    if (e.target.nodeType === "stage"){
      receivedData[this.linesStartElement].connectedTo.endPos = {
        x: e.evt.layerX,
        y: e.evt.layerY
      }
      this.drawConnection()
    }
  }

  //Draw conections
  drawConnection= () => {
    let connections = [];
      for (let obj in this.state.receivedData){
         connections.push(<Arrow
         name = {obj  + "line"}
         key = {obj + "line"}
         points = {[this.state.receivedData[obj].connectedTo.startPos.x,
                    this.state.receivedData[obj].connectedTo.startPos.y,
                    this.state.receivedData[obj].connectedTo.endPos.x,
                    this.state.receivedData[obj].connectedTo.endPos.y
                  ]}
         onClick = {(e) => {
           console.log(e.target.attrs.name)
         }}
         stroke = "#999999"
         fill = "#999999"
         strokeWidth = {1.5}
         lineCap = 'round'
         lineJoin = 'round'
         />)
        }
      this.setState({
        connections: connections
      })
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
            x = {this.state.receivedData[obj].cords.x} 
            y = {this.state.receivedData[obj].cords.y}/>
            )
          }
          //fix first element render positioning
          if (this.state.receivedData[obj].cardType === "catch"){
              createdElements.push(<EventCatchSmallComponent
              onDragEnd = {this.onDragEnd}
              onMouseDown = {this.setLinesStartPos}
              onMouseUp = {this.setLinesEndPos}
              isDraggable = {this.state.isDraggable}
              key = {obj + this.state.elementsCount}
              id = {obj}
              scale = {this.state.scale}
              x = {this.state.receivedData[obj].cords.x} 
              y = {this.state.receivedData[obj].cords.y}
              />)
            }
        }
    this.setState({
      createdElements: createdElements
    })
  }

  // CanvasZoom 
  canvasZoom = (e) => {
    if (e.evt.altKey && this.state.scaleStage > 0.4){
      let receivedData = this.state.receivedData;
        this.setState({
          scaleStage: this.state.scaleStage + (-e.evt.deltaY/1000)
        })
      this.createCanvasElements()
    } 
    if (this.state.scaleStage < 0.4) {
      this.setState({
        scaleStage: 0.41
      })
    }
    if (this.state.scaleStage > 2.1) {
      this.setState({
        scaleStage: 2
      })
    }
  }
  //

  dragAndDropCollisionDetection =(e) => {
    let target  = e.target;
    let targetRect = e.target.getClientRect();
    let layerChildren = e.target.parent.children
    layerChildren.forEach( (group) =>  {
        // do not check intersection with itself
        if (group === target) {
            return;
        }
        if (this.haveIntersection(group.getClientRect(), targetRect)) {
            console.log("Kolision")
            let receivedData = this.state.receivedData
            this.otherCordsforCollisionFunc = group.getClientRect()
            console.log(this.otherCordsforCollisionFunc);
        } 
        else {
          this.otherCordsforCollisionFunc = null;
  
        }
        
    });
    
  }
  haveIntersection = (r1, r2) => {
  return !(
    r2.x > r1.x + r1.width ||
          r2.x + r2.width < r1.x ||
          r2.y > r1.y + r1.height ||
          r2.y + r2.height < r1.y
      );
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
    if (this.isLineDrawing){
      let receivedData = this.state.receivedData;
      receivedData[this.linesStartElement].connectedTo.endPos = {
        x: e.evt.layerX,
        y: e.evt.layerY
      }
      this.drawConnection();
      this.setState({
        receivedData: receivedData
      })
    }
  }
  render() {
    return (
      <div className="flowBuilderComponent" onDrop={this.drop} onDragOver={this.allowDrop} onKeyPress={() => {
        console.log("key")
      }}>
        <CanvasComponent
          dragAndDropCollisionDetection = {this.dragAndDropCollisionDetection}
          scaleStage ={this.state.scaleStage}
          stageZoom = {this.state.stageZoom}
          onMouseUp = {this.setLinesEndPos}
          canvasZoom = {this.canvasZoom}
          lineCords = {this.state.lineCords}
          drawLine = {this.drawLine}
          createdElements = {this.state.createdElements}
          connections = {this.state.connections}
          width = {this.state.canvasWidth}
          height = {this.state.canvasHeight} /> 
        <ReactResizeDetector handleWidth handleHeight onResize = {this.resizeCanvas} />
      </div>
    );
  }
}

export default FlowBuilderComponent