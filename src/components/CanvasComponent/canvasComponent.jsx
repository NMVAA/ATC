import React from "react";
import { Layer, Rect, Stage, Group } from 'react-konva';
import Konva from "konva";
import "./canvasComponent.css";

const CanvasComponent = (props) => {

    return (
        <Stage width={props.width} height={props.height} >
            <Layer>
                <Rect
                    x={props.width/2} y={props.height/2} width={50} height={50}
                    fill={"black"}
                    shadowBlur={10}
                />
            </Layer>
        </Stage>
    )
}

export default CanvasComponent