smithereens = "";
semi_automatic = "";

function preload(){
    smithereens = loadSound("smithereens.mp3");
    semi_automatic = loadSound("semi-automatic.mp3");
}

function setup(){
    canvas = createCanvas(800,600);
    canvas.position(560,250)

    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video,0,0,800,600);
}