//Add a click listener on every .box element to turn it green if all boxes are green start never gonna give you up by rick astley

const boxes = document.getElementsByClassName('box');
let current_color_hsl_orange = "hsl(30, 35%, 50%)";
let saturation_body = 35;
let saturation = 35;
const fadein=10
const fadeout=10
for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener('click', function () {
        if (boxes[i].getAttribute("clicked") == "true") {
            boxes[i].setAttribute("clicked", "false")
            boxes[i].style.backgroundColor = "";
            for (let j = 0; j < boxes.length; j++) {
                if (boxes[j].getAttribute("clicked") == "true") {
                    boxes[j].style.backgroundColor = current_color_hsl_orange.replace(saturation+"%", (saturation - fadein)+"%");
                }
            }
            document.body.style.backgroundColor = current_color_hsl_orange.replace(saturation+"%", (saturation_body + fadeout)+"%");
            current_color_hsl_orange = current_color_hsl_orange.replace(saturation+"%", (saturation - fadein)+"%");
            saturation -= fadein;
            saturation_body += fadeout;
            return;
        }
        boxes[i].setAttribute("clicked", "true")
        for (let j = 0; j < boxes.length; j++) {
            if (boxes[j].getAttribute("clicked") == "true") {
                boxes[j].style.backgroundColor = current_color_hsl_orange.replace(saturation+"%", (saturation + fadein)+"%");
            }
        }
        /* boxes[i].style.backgroundColor = current_color_hsl_orange.replace(saturation+"%", (saturation + fadein)+"%"); */
        document.body.style.backgroundColor = current_color_hsl_orange.replace(saturation+"%", (saturation_body - fadeout)+"%");
        console.log(current_color_hsl_orange.replace(saturation+"%", (saturation + fadein)+"%"   ));
        current_color_hsl_orange = current_color_hsl_orange.replace(saturation+"%", (saturation + fadein)+"%");
        saturation_body -= fadeout;
        saturation += fadein;
        if (saturation >= 135) {
            window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
        }
    });
}