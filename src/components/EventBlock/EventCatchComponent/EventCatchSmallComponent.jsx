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
                draggable = {this.props.isDraggable}
                onDragEnd = { this.props.onDragEnd}
              
                // onMouseUp = {this.props.onMouseUp}
                // onMouseDown ={this.props.onMouseDown}
            >
                <Rect 
                name = {this.props.id}
                x = {0}
                y = {0}
                width = {600/this.props.scale}
                height = {300/this.props.scale}
                fill = {"#99cc67"}
                stroke = {"#999999"}
                strokeWidth = {1.5}
                cornerRadius = {5} 
                />

                <Image
                name = {this.props.id}
                image={this.state.imageCatchEvt}
                x = {14/this.props.scale}
                y = {12/this.props.scale}
                width = {58/this.props.scale}
                height = {58/this.props.scale}
                />
                <Text
                name = {this.props.id}
                x = {112/this.props.scale} 
                y = {26/this.props.scale}
                text = {"Catch event"}
                fontSize = {36/this.props.scale}

                />
                <Text
                name = {this.props.id}
                x = {74/this.props.scale} 
                y = {100/this.props.scale}
                width = {400/this.props.scale} 
                text = {"TRIGGER SEQUENCE-> {$value}, {$key}"}
                fontSize = {36/this.props.scale}
                />
                <Label
                className = {"eventCatchSmallComponent-button"}
                x = {0}
                y = {230/this.props.scale}  >
                <Rect 
                name = {this.props.id}
                width = {600/this.props.scale}
                height = {70/this.props.scale}
                fill = {"white"}
                stroke = {"#999999"}
                strokeWidth = {1.5}
                cornerRadius = {5}
                />
                <Text
                name = {this.props.id}
                x = {0}
                y = {20/this.props.scale} 
                width = {600/this.props.scale} 
                text = {"OK"}
                fontSize = {36/this.props.scale}
                align = {"center"}
                />
                <Circle
                onMouseUp = {this.props.onMouseUp}
                onMouseDown ={this.props.onMouseDown}
                className = {"talkBlock-quickReply-element-cntnCircle"}
                name = {this.props.id}
                x = {600/this.props.scale / 2}
                y = {74/this.props.scale}
                radius = {15/this.props.scale}
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