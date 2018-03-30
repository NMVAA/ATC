import React from "react";
import { Layer, Stage, Line, Rect, Label, Animation } from 'react-konva';
import "./canvasComponent.css";

const CanvasComponent = (props) => {
    return [
        <Stage width={props.width} height={props.height} >
            <Layer>
                {/* <Label draggble={true}
                    x={100}
                    y={100}
                >
                    <Rect
                        x={0}
                        y={0}
                        stroke={"black"}
                        strokeWidth={2}
                        width={100}
                        height={100}

                    />
                    <Rect
                        x={30}
                        y={60}
                        fill={"black"}
                        width={40}
                        height={40}
                    />
                </Label> */}
                {props.createdElements}
            </Layer>
        </Stage>
    ]
}

export default CanvasComponent