const images = [
    "0.jpeg",
    "1.jpeg",
    "2.jpeg",

]


const changeImge = images[Math.floor(Math.random()) * images.length];
const bgImge = document.createElement("img");

bgImge.src = `img/${changeImge}`;

document.body.appendChild(bgImge);