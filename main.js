noseX=0;
noseY=0;
leftWrist=0;
rightWrist=0;
difference=0;
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
document.getElementById("squaresize").innerHTML="width and height of the square will be ="+difference+"px";
fill("#fc03b1");
stroke("#fc03b1");
square(noseX,noseY,difference);
}
function modelloaded(){
    console.log("modelloaded");
}
function gotposes(results){
    if (results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x;
noseY=results[0].pose.nose.y;
console.log(noseX,noseY);
leftWrist=results[0].pose.leftWrist.x;
rightWrist=results[0].pose.rightWrist.x;
difference=floor(leftWrist-rightWrist);
console.log(leftWrist,rightWrist,difference);


    }
}