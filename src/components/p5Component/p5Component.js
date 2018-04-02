import React, { Component } from "react";
import p5 from "p5"

window.p5 = p5
class p5Component extends Component {
    componentDidMount(){
        
    }
    render(){
        p5.setup = () => {
            let canvas = p5.createCanvas(200,200);
            canvas.parent("p5Canvas");
            p5.frameRate(10);
        }

        p5.draw = () => {
            p5.background("#111");
            p5.ellipse(100,100,80,80)
        }
        return (
            <div id="p5Canvas"></div>
        )
    }
}