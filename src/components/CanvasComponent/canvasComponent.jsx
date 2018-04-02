import React from "react";
import { Layer, Stage, Line, Rect, Label, Animation } from 'react-konva';
import "./canvasComponent.css";

const CanvasComponent = (props) => {
    return [
        <Stage width={props.width} height={props.height} >
            <Layer>
                {props.createdElements}
                {props.connections}
            </Layer>
        </Stage>
    ]
}

export default CanvasComponent