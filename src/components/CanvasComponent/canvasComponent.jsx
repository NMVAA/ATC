import React from "react";
import { Layer, Stage, Line } from 'react-konva';
import "./canvasComponent.css";

const CanvasComponent = (props) => {
    return [
        <Stage width={props.width} height={props.height} >
            <Layer>
                <Line
                    points={[0, 0, 140, 23, 250, 60, 300, 20]}
                    stroke='red'
                    strokeWidth={2}
                    lineCap='round'
                    lineJoin='round'
                />
                {props.createdElements}
            </Layer>
        </Stage>
    ]
}

export default CanvasComponent