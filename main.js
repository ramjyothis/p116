noseX=""
noseY =""

function preload() {
    clown_nose =loadimage ="https://i.postimg.cc/c44vDqVw/download.png";
}
function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
     video.size(300, 300);
     video.hide();
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses );
}
function modelLoaded(){
console.log('PoseNet Is Intialized');
}
function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        console.log("noseX ="+ results[0].pose.nose.x);
        console.log("noseY ="+ results[0].pose.nose.y);
    }
}


function draw(){
image(video, 0, 0, 300, 300);
Fill(255,0,0);
stroke(255, 0, 0);

}
function take_snapshot(){
 save('myFilterImage.png');
}