import React from "react";
import { Layer, Stage, Line, Rect, Label, Animation, Path } from 'react-konva';
import "./canvasComponent.css";
import TextBoxSmallComponent from "../TalkBlockComponents/TextBoxComponent/TextBoxSmallComponent.jsx"
import EventCatchSmallComponent from "../EventBlock/EventCatchComponent/EventCatchSmallComponent.jsx"

const CanvasComponent = (props) => {
    // <TextBoxSmallComponent/>
    return [
        <Stage width={props.width} height={props.height} >
        <Layer>
        <EventCatchSmallComponent x = {300} y = {100}/>
                {props.createdElements}
                {props.connections}
            </Layer>
        </Stage>
    ]
}

export default CanvasComponent