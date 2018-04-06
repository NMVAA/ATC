import React, {
    Component
} from "react"
import {
    Shape,
    Group,
    Rect,
    Text,
    Circle,
    Image,
    Label
} from "react-konva"
import Konva from "konva"
import CatchEvt from "../../../img/catchEvt.png"

class EventCatchSmallComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imageCatchEvt: null
        }
    }

    componentDidMount() {
        const imageCatchEvt = new window.Image();
        imageCatchEvt.src = CatchEvt;
        imageCatchEvt.onload = () => {
            // setState will redraw layer
            // because "image" property is changed
            this.setState({
                imageCatchEvt: imageCatchEvt
            });
        };
    }
    render(){
        return (
            <Label name = {this.props.id}
                className = {"eventCatchSmallComponent"}
                x = {this.props.x || 200}
                y = {this.props.y || 10}
                draggable = {true}
                onDragEnd = { this.props.onDragEnd}
                onMouseUp = {this.props.onMouseUp}
                onMouseDown = {this.props.activateDraggability}
                onMouseDown ={this.props.onMouseDown}
            >
                <Rect 
                x = {0}
                y = {0}
                width = {600* (this.props.scale/2)}
                height = {300* (this.props.scale/2)}
                fill = {"#99cc67"}
                stroke = {"#999999"}
                strokeWidth = {1.5}
                cornerRadius = {5} 
                />

                <Image 
                image={this.state.imageCatchEvt}
                x = {14* (this.props.scale/2)}
                y = {12* (this.props.scale/2)}
                width = {58* (this.props.scale/2)}
                height = {58* (this.props.scale/2)}
                />
                <Text
                x = {112* (this.props.scale/2)} 
                y = {26* (this.props.scale/2)}
                text = {"Catch event"}
                fontSize = {36* (this.props.scale/2)}

                />
                <Text
                x = {74* (this.props.scale/2)} 
                y = {100* (this.props.scale/2)}
                width = {400* (this.props.scale/2)} 
                text = {"TRIGGER SEQUENCE-> {$value}, {$key}"}
                fontSize = {36* (this.props.scale/2)}
                />
                <Label className = {"eventCatchSmallComponent-button"}  x = {0}
                y = {230* (this.props.scale/2)}  >
                <Rect 
                width = {600* (this.props.scale/2)}
                height = {70* (this.props.scale/2)}
                fill = {"white"}
                stroke = {"#999999"}
                strokeWidth = {1.5}
                cornerRadius = {5}
                />
                <Text
                x = {0}
                y = {20* (this.props.scale/2)} 
                width = {600* (this.props.scale/2)} 
                text = {"OK"}
                fontSize = {36* (this.props.scale/2)}
                align = {"center"}
                />
                <Circle className = {"talkBlock-quickReply-element-cntnCircle"}
                // onMouseDown={this.props.onMouseDown}
                x = {600* (this.props.scale/2) / 2}
                y = {74* (this.props.scale/2)}
                radius = {15* (this.props.scale/2)}
                fill = {"#8cc63f"}
                stroke = {"#999999"}
                strokeWidth = {1.5} 
                />
                </Label>
            </Label>      
        )
    }
}

export default EventCatchSmallComponent