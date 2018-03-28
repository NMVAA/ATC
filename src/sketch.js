import p5 from "p5";

const sketch = (p5) => {
    let canvasParent = document.querySelector(".flowBuilderComponent")
    const canvasWidth = canvasParent.offsetWidth;
    const canvasHeight = canvasParent.offsetHeight;

    window.p5 = p5;


    p5.setup = () => {
        let canvas = p5.createCanvas(canvasWidth, canvasHeight);
        canvas.parent(canvasParent);
        p5.frameRate(30);
        p5.background(0);
    }
    p5.draw = () => {
        p5.noLoop();
    }


}

export default sketch