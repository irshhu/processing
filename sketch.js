let img;
let tiles = 100; // Grid resolution
let tileSize;

function preload() {
    img = loadImage("https://unsplash.com/photos/woman-staring-directly-at-camera-near-pink-wall-bqe0J0b26RQ"); // Replace with your image
}

function setup() {
    createCanvas(900, 900, WEBGL);
    tileSize = width / tiles;
}

function draw() {
    background(240);
    noStroke();
    for (let x = 0; x < tiles; x++) {
        for (let y = 0; y < tiles; y++) {
            let c = img.get(int(x * tileSize), int(y * tileSize));
            let b = map(brightness(c), 0, 255, 1, 0);
            let z = map(b, 0, 1, -50, 50);
            push();
            translate(x * tileSize - width / 2, y * tileSize - height / 2, z);
            fill(c);
            box(tileSize * b);
            pop();
        }
    }
}
