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
            <Label className = {"eventCatchSmallComponent"} x = {25}  y = {25} draggable = {true}>
                <Rect 
                x = {0}
                y = {0}
                width = {600/2}
                height = {300/2}
                fill = {"#99cc67"}
                stroke = {"#999999"}
                strokeWidth = {1.5}
                cornerRadius = {5} 
                />

                <Image 
                image={this.state.imageCatchEvt}
                x = {14/2}
                y = {12/2}
                width = {58/2}
                height = {58/2}
                />
                <Text
                x = {112/2} 
                y = {26/2}
                text = {"Catch event"}
                fontSize = {18}

                />
                <Text
                x = {74/2} 
                y = {100/2}
                width = {400/2} 
                text = {"TRIGGER SEQUENCE-> {$value}, {$key}"}
                fontSize = {18}
                />
                <Label className = {"eventCatchSmallComponent-button"}  x = {0}
                y = {230/2}  >
                <Rect 
                width = {600/2}
                height = {70/2}
                fill = {"white"}
                stroke = {"#999999"}
                strokeWidth = {1.5}
                cornerRadius = {5}
                />
                <Text
                x = {0}
                y = {70/2/2/2} 
                width = {600/2} 
                text = {"OK"}
                fontSize = {18}
                align = {"center"}
                />
                <Circle className = {"talkBlock-quickReply-element-cntnCircle"}
                x = {600/2/2}
                y = {74/2}
                radius = {15/2}
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