import React, { Component } from "react"
import { Shape, Group, Rect, Text, Circle, Image, Label} from "react-konva"
import Konva from "konva"
import TalkImage from "../../../img/talk.png"
import Telegram from "../../../img/telegram.png"
import Facebook from "../../../img/facebook.png"
import Dices from "../../../img/dices.png"



class TextBoxSmallComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            text: `Hi $firstName!

I'm VacationBot and I'll help you find your perfect vacation`,
            imageTitle: null,
            imagefaceB: null,
            imageTeleG: null,
            imageDices: null
        };
    }
    componentDidMount(){
        const imageTeleG = new window.Image();
        imageTeleG.src =  Telegram;
        imageTeleG.onload = () => {
          this.setState({
            imageTeleG: imageTeleG
          });
        };
        const imagefaceB = new window.Image();
        imagefaceB.src =  Facebook;
        imagefaceB.onload = () => {
          this.setState({
            imagefaceB: imagefaceB
          });
        };
        const imageTitle = new window.Image();
        imageTitle.src =  TalkImage;
        imageTitle.onload = () => {
          this.setState({
            imageTitle: imageTitle
          });
        };
        const imageDices = new window.Image();
        imageDices.src =  Dices;
        imageDices.onload = () => {

          this.setState({
            imageDices: imageDices
          });
        };
    }
    render(){
    return (
        <Label name = {this.props.id}
          x = {this.props.x + 21}
          y = {this.props.y + 21}
          draggable = {this.props.isDraggable}
          onDragEnd = { this.props.onDragEnd}
          onMouseUp = {this.props.onMouseUp}
          // onMouseDown ={this.props.onMouseDown}
        > 
        <Rect
        name = {this.props.id}
        shadowColor =  {"black"}
        shadowBlur =  {20}
        shadowOffset = {[10, 10]}
        shadowOpacity = {0.2}
            className ={"talkBlock"}
            x = {0}
            y = {0}
            width = {600/this.props.scale}
            height = {600/this.props.scale}
            fill = {"#D4EAFF"}
            stroke = {"#999999"}
            strokeWidth = {1.5} 
            cornerRadius = {5}
        />
        <Label
          name = {this.props.id}
          className = {"talkBlock-header"}
          x = {20/this.props.scale}
          y = {14/this.props.scale}
            >
            <Image
              name = {this.props.id}
              image={this.state.imageTitle}
              width = {60/this.props.scale}
              height = {54/this.props.scale}
            />
            <Text
             name = {this.props.id}
             x = {100/this.props.scale}
             y = {12/this.props.scale} 
             text = {"Weclome"}
             fontSize = {36/this.props.scale}
             />
             <Image image={this.state.imagefaceB}
             name = {this.props.id}
             x = {480/this.props.scale}
             y = {6/this.props.scale}
             width = {17/this.props.scale}
             height = {36/this.props.scale}
             />
             <Image image={this.state.imageTeleG}
             name = {this.props.id}
             x = {510/this.props.scale}
             y = {6/this.props.scale}
             width = {42/this.props.scale}
             height = {38/this.props.scale}
             />
        </Label>
        <Label name = {this.props.id} className = {"talkBlock-massage"} x = {30/this.props.scale} y = {130/this.props.scale}>
            <Rect
            name = {this.props.id}
            width = {540/this.props.scale}
            height = {270/this.props.scale}
            fill = {"white"}
            stroke = {"#999999"}
            strokeWidth = {1.5} 
            cornerRadius = {5}
            />
            <Text x = {20/this.props.scale} y = {30/this.props.scale}
            name = {this.props.id}
            text = {this.state.text}
            width = {500/this.props.scale}
            fontSize = {36/this.props.scale}
            />
            <Image image={this.state.imageDices}
             name = {this.props.id}
             x = {470/this.props.scale}
             y = {255/this.props.scale}
             width = {59/this.props.scale}
             height = {46/this.props.scale}
             />
         </Label>
         <Label name = {this.props.id}  className = {"talkBlock-getStarted"}  x = {30/this.props.scale} y = {450/this.props.scale}>
            <Rect
            name = {this.props.id}
            x ={0}
            y = {0}
            width = {540/this.props.scale}
            height = {115/this.props.scale}
            fill = {"white"}
            stroke = {"#999999"}
            strokeWidth = {1.5} 
            cornerRadius = {5}
            />
            <Text x = {160/this.props.scale} y = {40/this.props.scale}
            name = {this.props.id}
            text = {"Get Started"}
            width = {230/this.props.scale}
            fontSize = {44/this.props.scale}
            />
            <Label name = {this.props.id} x = {30/this.props.scale} y = {30/this.props.scale} className = {"talkBlock-getStarted-icon"}>
                    <Rect
                    name = {this.props.id}
                    x = {0}
                    y = {0}
                    width = {30/this.props.scale}
                    height = {25/this.props.scale}
                    fill = {"#b3b3b3"}
                    stroke = {"#999999"}
                    strokeWidth = {1.5} 
                    cornerRadius = {2}
                    />
                    <Rect
                    name = {this.props.id}
                    x = {38/this.props.scale}
                    y = {0}
                    width = {30/this.props.scale}
                    height = {25/this.props.scale}
                    fill = {"#b3b3b3"}
                    stroke = {"#999999"}
                    strokeWidth = {1.5} 
                    cornerRadius = {2}
                    />
                    <Rect
                    name = {this.props.id}
                    x = {0}
                    y = {30/this.props.scale}
                    width = {30/this.props.scale}
                    height = {25/this.props.scale}
                    fill = {"#b3b3b3"}
                    stroke = {"#999999"}
                    strokeWidth = {1.5} 
                    cornerRadius = {2}
                    />
                    <Rect
                    name = {this.props.id}
                    x = {38/this.props.scale}
                    y = {30/this.props.scale}
                    width = {30/this.props.scale}
                    height = {25/this.props.scale}
                    fill = {"#b3b3b3"}
                    stroke = {"#999999"}
                    strokeWidth = {1.5} 
                    cornerRadius = {2}
                    />
                </Label>
                <Circle className = {"talkBlock-getStarted-cntnCircle"}
                name = {this.props.id}
                onMouseDown={this.props.onMouseDown}
                x ={540/this.props.scale}
                y = {115/this.props.scale /2}
                radius = {15/this.props.scale}
                fill = {"#f15a24"}
                stroke = {"#999999"}
                strokeWidth = {1.5} 
                />
            </Label>
        </Label>
    );  
}
  }   

  export default  TextBoxSmallComponent