import React from "react";
import { Layer, Stage, Line, Rect, Label, Animation, Path } from 'react-konva';
import "./canvasComponent.css";
import TextBoxSmallComponent from "../TalkBlockComponents/TextBoxComponent/TextBoxSmallComponent.jsx"
import EventCatchSmallComponent from "../EventBlock/EventCatchComponent/EventCatchSmallComponent.jsx"
import LFM from "../testLine.jsx"
import Konva from "konva"

const CanvasComponent = (props) => {
    // <TextBoxSmallComponent/>
    // {props.createdElements}
    let elems = props.createdElements.map(elem => elem)
    return [
        <Stage 
        scale = {{ x: props.scaleStage, y: props.scaleStage }}
        onMouseUp = {props.onMouseUp}
        onWheel = {props.canvasZoom}
        onMouseMove = {props.drawLine} 
        width={props.width} height={props.height} >
        
        <Layer
        onDragMove = {props.dragAndDropCollisionDetection}
        >
        {elems}
                {props.connections}
            </Layer>
        </Stage>
    ]
}

export default CanvasComponent