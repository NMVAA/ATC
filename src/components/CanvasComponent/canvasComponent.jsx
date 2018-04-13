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
    let posX = 0;
    let posY = 0
    let elems = props.createdElements.map(elem => elem)
    return [
        <div 
        onKeyDown = {(e) => {
            console.log(e.currentTarget)
        }}
        >
        <Stage 
        x = {-props.canvasOffScreen}
        y = {-props.canvasOffScreen}
        stroke = {"#999999"}
            strokeWidth = {1.5} 
        // onMouseDown = {(e) => {
        //     if (e.evt.ctrlKey) {
        //         console.log("ctrlKey")
        //       }
        // }}
        scale = {{ x: props.scaleStage, y: props.scaleStage }}
        onMouseUp = {props.onMouseUp}
        onWheel = {props.canvasZoom}

        //
        
        //
        onMouseMove = {props.canvasScroll}
        // {props.drawLine} 
        width={props.width} height={props.height}
        // onMouseOver = {(e) => {
        //     console.log(e.target)
        // }}
        >
        
        <Layer
        x = {0}
        y = {0}
        stroke = {"#999999"}
        onDragMove = {props.dragAndDropCollisionDetection}
        >
        {elems}
                {props.connections}
            </Layer>
        </Stage>
        </div>
    ]
}

export default CanvasComponent