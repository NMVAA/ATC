import React, { Component } from "react"
import { Shape, Group, Rect, Text, Circle, Image, Label} from "react-konva"
import Konva from "konva"

class TalkBlock extends Component {
    constructor(props){
        super(props);
        this.state = {
            text: `Hi $firstName!

I'm VacationBot and I'll hepl you find your perfect vacation`
        };
    }
    render(){
    return (
        <Label x = {100} y = {20}> 
        <Rect
        className ={"talkBlock"}
        x = {0}
        y = {0}
        width = {600/2}
        height = {920/2}
        fill = {"#D4EAFF"}
        stroke = {"#999999"}
        strokeWidth = {1}
        cornerRadius = {5}
        />
        <Label  x = {30/2} y = {130/2}>
        <Rect
        className = {"talkBlock-massage"} 
        width = {540/2}
        height = {270/2}
        fill = {"white"}
        stroke = {"#999999"}
        strokeWidth = {1}
        cornerRadius = {5}
        />
        <Text x = {20/2} y = {30/2}
        text = {this.state.text}
        width = {500/2}
        fontSize = {18}
        
        />
        </Label>
        </Label>
    );
}
  }   

  export default  TalkBlock