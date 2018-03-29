import React, { Component } from 'react';
import {Layer, Rect, Stage, Group} from 'react-konva';
import "./flowBuilderComponent.css";

class FlowBuilderComponent extends Component {
  constructor() {
    super();
    this.state = {
      IsCanvas: false,
      receivedData: []
    }
  }
  allowDrop = (e) => {
    e.preventDefault();
  }
  drop = (e) => {
    e.preventDefault();
    let data = e.dataTransfer.getData("text");
    let DOMURL = window.URL || window.webkitURL || window;
    let svg = new Blob([data], { type: 'image/svg+xml' });
    let imgUrl = DOMURL.createObjectURL(svg);
    this.setState({
      receivedData: this.state.receivedData.concat(imgUrl)
    })

    console.log(this.state.receivedData)
  }
  componentDidMount() {
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
         
      </div>
    );
  }
}

export default FlowBuilderComponent
