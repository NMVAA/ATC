import React, { Component } from 'react';
import { Layer, Rect, Stage, Group } from 'react-konva';
import CanvasComponent from "../CanvasComponent/canvasComponent.jsx"
import ReactResizeDetector from 'react-resize-detector';
import "./flowBuilderComponent.css";
import { Canvas } from 'konva';

class FlowBuilderComponent extends Component {
  constructor() {
    super();
    this.state = {
      IsCanvas: false,
      receivedData: []
    }
  }

  // Allow drop draggable object to this element 
  allowDrop = (e) => {
    e.preventDefault();
  }

  // Making data from dropped file 
  drop = (e) => {
    e.preventDefault();
    let data = JSON.parse(e.dataTransfer.getData("objectData"));
    this.setState({
      receivedData: this.state.receivedData.concat(data)
    })

    console.log(this.state.receivedData)
  }

  // Resizing Canvas to the container size 
  resizeCanvas = () => {
    let con = document.querySelector(".flowBuilderComponent");
    let canvas = document.querySelector("canvas");
    let width = con.offsetWidth;
    let height = con.offsetHeight;
    this.setState({
      canvasWidth: width,
      canvasHeight: height
    })
  }


  componentDidMount() {

    this.resizeCanvas();
    // this.canvas = new p5(sketch);
    // const CreateCanvas = () => {
    //   return new Promise((resolve, reject) => {
    //     this.canvas = new p5(sketch);
    //     resolve("CanvasIsLoaded");
    //   }).then(() => {
    //     setTimeout(() => {
    //       let canvasElement = document.querySelector("canvas");
    //       let a = document.createAttribute("data-info");
    //       a.value = "datainfo";
    //       canvasElement.setAttributeNode(a);
    //     }, 100)

    //   })
    // }
    //CreateCanvas();

  }
  render() {

    return (
      <div className="flowBuilderComponent" onDrop={this.drop} onDragOver={this.allowDrop}>
        <CanvasComponent width={this.state.canvasWidth} height={this.state.canvasHeight} />
        <ReactResizeDetector handleWidth handleHeight onResize={this.resizeCanvas}/>
      </div>
    );
  }
}

export default FlowBuilderComponent


