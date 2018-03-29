import p5 from "p5";
//import data from "";

const sketch = (p5, data) => {
    let canvasParent = document.querySelector(".flowBuilderComponent")
    const canvasWidth = canvasParent.offsetWidth;
    const canvasHeight = canvasParent.offsetHeight;

    window.p5 = p5;


    p5.setup = () => {
        let canvas = p5.createCanvas(canvasWidth, canvasHeight);
        canvas.parent(canvasParent);
        p5.frameRate(30);
        p5.background(255);
        document.querySelector("#defaultCanvas0").addEventListener("ondrop", function(e) {
            e.preventDefault();
            let data = e.dataTransfer.getData("text");
            console.log("Droped on canvas");
        })
        document.querySelector("#defaultCanvas0").addEventListener("ondragover", function(e) {
            e.preventDefault();
        })
    }

    p5.draw = () => {
        // p5.ellipse(p5.mouseX,p5.mouseY,80,80)

    }
}

export default sketch