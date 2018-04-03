import React from "react";
import { Layer, Stage, Line, Rect, Label, Animation, Path } from 'react-konva';
import "./canvasComponent.css";
import TalkBlock from "../talkBlock.jsx"


const CanvasComponent = (props) => {
    
    return [
        <Stage width={props.width} height={props.height} >
            <Layer>
            <TalkBlock/>
                {props.createdElements}
                {props.connections}
            </Layer>
        </Stage>
    ]
}

export default CanvasComponent