function preload(){

}
function setup(){
    canvas = createCanvas(500, 500);
    canvas.center();
    canvas = createCapture(VIDEO);
}
function draw(){
    image(video, 0, 0, 500, 500);
}