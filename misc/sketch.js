'use strict'

let video;
let poseNet;
let pose;
let skeleton;

function setup() {
  createCanvas(700, 700);

  video = createCapture(VIDEO);
  video.hide();

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function modelLoaded(){
console.log('poseNet ready');
}

function gotPoses(poses){
console.log(poses);
if (poses.length > 0){
   poses = poses[0].pose;
   skeleton.poses[0].skeleton;
}

}

function draw() {
image(video, 0, 0);

if (pose) {
  let d = dist(pose.rightEye.x, pose.rightEye.y, pose.leftEye.x, pose.leftEye.y);
}

strokeWeight(0);
fill(255, 50, 100);
ellipse(pose.nose.x, pose.nose.y, d);

for (let i = 0; i < skeleton.length; i++){
let a = skeletion[i][0];
let b = skeleton[i][1];
stroke(255);
strokeWeight(5);
line(a.position.x, a.position.y, b.position.x, b.position.y);

}

}
