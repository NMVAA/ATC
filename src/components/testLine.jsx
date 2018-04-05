import React, { Component } from "react";
import { render } from "react-dom";
import { Stage, Layer, Image, Line, Arrow } from "react-konva";


class LFM extends Component {
  constructor(props){
    super(props);
    this.state = {}
  }
  render(){
    return (
      <Arrow
         points = { this.props.lineCords||[100,
                    100,
                    200,
                    200
                  ]}
         stroke = "#999999"
         fill = "#999999"
         strokeWidth = {1.5}
         lineCap = 'round'
         lineJoin = 'round'
         />
    )
  }
}

export default LFM