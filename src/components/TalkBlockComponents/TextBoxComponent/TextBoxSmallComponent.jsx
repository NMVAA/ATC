import React, { Component } from "react"
import { Shape, Group, Rect, Text, Circle, Image, Label} from "react-konva"
import Konva from "konva"
import TalkImage from "../../../img/talk.png"
import Telegram from "../../../img/telegram.png"
import Facebook from "../../../img/facebook.png"
import Dices from "../../../img/dices.png"
import Ear from "../../../img/ear.png"


class TextBoxSmallComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            text: `Hi $firstName!

I'm VacationBot and I'll help you find your perfect vacation`,
            imageTitle: null,
            imagefaceB: null,
            imageTeleG: null,
            imageDices: null,
            imageListener: null,
            imageEar: null
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
        const imageEar = new window.Image();
        imageEar.src =  Ear;
        imageEar.onload = () => {
          this.setState({
            imageEar: imageEar
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
          onMouseDown ={this.props.onMouseDown}
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
            width = {600*(this.props.scale/2)}
            height = {920*(this.props.scale/2)}
            fill = {"#D4EAFF"}
            stroke = {"#999999"}
            strokeWidth = {1.5} 
            cornerRadius = {5}
        />
        <Label
          name = {this.props.id}
          className = {"talkBlock-header"}
          x = {20*(this.props.scale/2)}
          y = {14*(this.props.scale/2)}
            >
            <Image
              name = {this.props.id}
              image={this.state.imageTitle}
              width = {60*(this.props.scale/2)}
              height = {54*(this.props.scale/2)}
            />
            <Text
             name = {this.props.id}
             x = {100*(this.props.scale/2)}
             y = {12*(this.props.scale/2)} 
             text = {"Weclome"}
             fontSize = {36*(this.props.scale/2)}
             />
             <Image image={this.state.imagefaceB}
             name = {this.props.id}
             x = {480*(this.props.scale/2)}
             y = {6*(this.props.scale/2)}
             width = {17*(this.props.scale/2)}
             height = {36*(this.props.scale/2)}
             />
             <Image image={this.state.imageTeleG}
             name = {this.props.id}
             x = {510*(this.props.scale/2)}
             y = {6*(this.props.scale/2)}
             width = {42*(this.props.scale/2)}
             height = {38*(this.props.scale/2)}
             />
        </Label>
        <Label name = {this.props.id} className = {"talkBlock-massage"} x = {30*(this.props.scale/2)} y = {130*(this.props.scale/2)}>
            <Rect
            name = {this.props.id}
            width = {540*(this.props.scale/2)}
            height = {270*(this.props.scale/2)}
            fill = {"white"}
            stroke = {"#999999"}
            strokeWidth = {1.5} 
            cornerRadius = {5}
            />
            <Text x = {20*(this.props.scale/2)} y = {30*(this.props.scale/2)}
            name = {this.props.id}
            text = {this.state.text}
            width = {500*(this.props.scale/2)}
            fontSize = {36*(this.props.scale/2)}
            />
         </Label>
         <Label name = {this.props.id}  className = {"talkBlock-getStarted"}  x = {30*(this.props.scale/2)} y = {450*(this.props.scale/2)}>
            <Rect
            name = {this.props.id}
            x ={0}
            y = {0}
            width = {540*(this.props.scale/2)}
            height = {115*(this.props.scale/2)}
            fill = {"white"}
            stroke = {"#999999"}
            strokeWidth = {1.5} 
            cornerRadius = {5}
            />
            <Text x = {160*(this.props.scale/2)} y = {40*(this.props.scale/2)}
            name = {this.props.id}
            text = {"Get Started"}
            width = {230*(this.props.scale/2)}
            fontSize = {44*(this.props.scale/2)}
            />
            <Label name = {this.props.id} x = {30*(this.props.scale/2)} y = {30*(this.props.scale/2)} className = {"talkBlock-getStarted-icon"}>
                    <Rect
                    name = {this.props.id}
                    x = {0}
                    y = {0}
                    width = {30*(this.props.scale/2)}
                    height = {25*(this.props.scale/2)}
                    fill = {"#b3b3b3"}
                    stroke = {"#999999"}
                    strokeWidth = {1.5} 
                    cornerRadius = {2}
                    />
                    <Rect
                    name = {this.props.id}
                    x = {38*(this.props.scale/2)}
                    y = {0}
                    width = {30*(this.props.scale/2)}
                    height = {25*(this.props.scale/2)}
                    fill = {"#b3b3b3"}
                    stroke = {"#999999"}
                    strokeWidth = {1.5} 
                    cornerRadius = {2}
                    />
                    <Rect
                    name = {this.props.id}
                    x = {0}
                    y = {30*(this.props.scale/2)}
                    width = {30*(this.props.scale/2)}
                    height = {25*(this.props.scale/2)}
                    fill = {"#b3b3b3"}
                    stroke = {"#999999"}
                    strokeWidth = {1.5} 
                    cornerRadius = {2}
                    />
                    <Rect
                    name = {this.props.id}
                    x = {38*(this.props.scale/2)}
                    y = {30*(this.props.scale/2)}
                    width = {30*(this.props.scale/2)}
                    height = {25*(this.props.scale/2)}
                    fill = {"#b3b3b3"}
                    stroke = {"#999999"}
                    strokeWidth = {1.5} 
                    cornerRadius = {2}
                    />
                </Label>
        <Circle className = {"talkBlock-getStarted-cntnCircle"}
        name = {this.props.id}
        onMouseDown={this.props.onMouseDown}
        x ={540*(this.props.scale/2)}
        y = {115*(this.props.scale/2) /2}
        radius = {15*(this.props.scale/2)}
        fill = {"#f15a24"}
        stroke = {"#999999"}
        strokeWidth = {1.5} 
        />
        </Label>
        <Label name = {this.props.id} className = {"talkBlock-quickReplys"} x = {30*(this.props.scale/2)} y = {632*(this.props.scale/2)} >
        <Label name = {this.props.id} className = {"talkBlock-quickReply-element"} x = {0} y = {0} >
            <Rect
            name = {this.props.id}
            width = {540*(this.props.scale/2)}
            height = {84*(this.props.scale/2)}
            fill = {"white"}
            stroke = {"#999999"}
            strokeWidth = {1.5} 
            cornerRadius = {20}
            />
            <Text x = {160*(this.props.scale/2)} y = {22*(this.props.scale/2)}
            name = {this.props.id}
            text = {"Unsubscribe"}
            width = {230*(this.props.scale/2)}
            fontSize = {40*(this.props.scale/2)}
            />
            <Circle className = {"talkBlock-quickReply-element-cntnCircle"}
            name = {this.props.id}
            onMouseDown={this.props.onMouseDown}
            x = {540*(this.props.scale/2)}
            y = {84*(this.props.scale/2) / 2}
            radius = {15*(this.props.scale/2)}
            fill = {"#8cc63f"}
            stroke = {"#999999"}
            strokeWidth = {1.5} 
            />
            </Label>
            <Label name = {this.props.id} className = {"talkBlock-quickReply-element"} x = {0} y = {94*(this.props.scale/2)} >
            <Rect
            name = {this.props.id}
            width = {540*(this.props.scale/2)}
            height = {84*(this.props.scale/2)}
            fill = {"white"}
            stroke = {"#999999"}
            strokeWidth = {1.5} 
            cornerRadius = {20}
            />
            <Text x = {160*(this.props.scale/2)} y = {22*(this.props.scale/2)}
            name = {this.props.id}
            text = {"Yes, please"}
            width = {230*(this.props.scale/2)}
            fontSize = {40*(this.props.scale/2)}
            />
            <Circle className = {"talkBlock-quickReply-element-cntnCircle"}
            name = {this.props.id}
            onMouseDown={this.props.onMouseDown}
            x = {540*(this.props.scale/2)}
            y = {84*(this.props.scale/2) /2}
            radius = {15*(this.props.scale/2)}
            fill = {"#8cc63f"}
            stroke = {"#999999"}
            strokeWidth = {1.5} 
            />
            </Label>
            </Label>
            <Label name = {this.props.id} className = {"talkBlock-listener"} x = {0} y = {920*(this.props.scale/2) - 74*(this.props.scale/2)}>
             <Rect
             name = {this.props.id}
             x = {0}
             y = {0}
             width = {600*(this.props.scale/2)}
             height = {74*(this.props.scale/2)}
             fill = {"white"}
             stroke = {"#999999"}
             strokeWidth = {1.5}
             cornerRadius = {5}
             />
             <Text x = {0} y = {20*(this.props.scale/2)}
             name = {this.props.id}
             align = {"center"}
             text = {"LISTEN"}
             width = {600*(this.props.scale/2)}
             fontSize = {40*(this.props.scale/2)}
             />
             <Circle className = {"talkBlock-quickReply-element-cntnCircle"}
             name = {this.props.id}
             onMouseDown={this.props.onMouseDown}
             x = {600*(this.props.scale/2) / 2}
             y = {74*(this.props.scale/2)}
             radius = {15*(this.props.scale/2)}
             fill = {"#fcee21"}
             stroke = {"#999999"}
             strokeWidth = {1.5} 
             />
            </Label>
        </Label>
    );  
}
  }   

  export default  TextBoxSmallComponent