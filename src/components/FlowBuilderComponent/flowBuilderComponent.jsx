import React, { Component } from 'react';
import p5 from "p5";
import "p5/lib/addons/p5.dom";
import sketch from "../../sketch.js"
import "./flowBuilderComponent.css";

class FlowBuilderComponent extends Component {
  constructor() {
    super();
    this.state = {
      IsCanvas: false,
      receiveData: "",
      
    }


  }
  allowDrop = (e) => {
    e.preventDefault();
  }
  drop = (e) => {
    e.preventDefault();
    let data = e.dataTransfer.getData("text");
    console.log("droped ", data); 
  }
  componentDidMount() {
    const CreateCanvas = () => {
      return new Promise((resolve, reject) => {
        this.canvas = new p5(sketch);
        resolve("CanvasIsLoaded");
      }).then(() => {
        setTimeout(() => {
          let canvasElement = document.querySelector("canvas");
          let a = document.createAttribute("data-info");
          a.value = "datainfo";
          canvasElement.setAttributeNode(a);
        }, 100)

      })
    }
    //CreateCanvas();

  }
  render() {
    return (
      <div className="flowBuilderComponent" onDrop={this.drop} onDragOver={this.allowDrop}>
        {}
      </div>
    );
  }
}

export default FlowBuilderComponent;
