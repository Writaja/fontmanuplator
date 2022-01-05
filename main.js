function preload(){

}
function setup(){
video=createCapture(VIDEO);
video.size(550,500);
canvas=createCanvas(550,550);
canvas.position(560,150);
 posenet=ml5.poseNet(video,modelloaded);
posenet.on("pose",gotposes);
}
function draw(){
background("#8f8d88");
}
function modelloaded(){
    console.log("modelloaded");
}
function gotposes(results){
    if (results.length>0){
        console.log(results);
    }
}