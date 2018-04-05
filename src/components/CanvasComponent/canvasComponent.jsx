import React from "react";
import { Layer, Stage, Line, Rect, Label, Animation, Path } from 'react-konva';
import "./canvasComponent.css";
import TextBoxSmallComponent from "../TalkBlockComponents/TextBoxComponent/TextBoxSmallComponent.jsx"
import EventCatchSmallComponent from "../EventBlock/EventCatchComponent/EventCatchSmallComponent.jsx"
import LFM from "../testLine.jsx"

const CanvasComponent = (props) => {
    // <TextBoxSmallComponent/>
    console.log(props)
    return [
        <Stage
         onMouseMove = {props.drawLine} 
        width={props.width} height={props.height} >
            <Layer >
                <LFM lineCords = {props.lineCords} />
                {props.createdElements}
                {props.connections}
            </Layer>
        </Stage>
    ]
}

export default CanvasComponent