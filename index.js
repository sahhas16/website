var nosex = 0;
var nosey =0;
var clownphoto ="";
var hat = ""

var lefteyex = 0;
var lefteyey= 0;
function preload(){
clownphoto = loadImage("https://i.postimg.cc/ZKXRgxb1/1-l-H3-Ql-W2-O3-G5-A-p-Ahh-JU0-Dw-removebg-preview.png")
hat = loadImage("https://i.postimg.cc/nczVYJwc/hat-PNG5698.png")
}
function setup(){
canvas = createCanvas(300,300);
canvas.center()
canvas.position(530,200);
video= createCapture(VIDEO);
video.size(300,300);
video.hide()

posenet = ml5.poseNet(video,modelloaded);
posenet.on('pose',(results)=>{
if(results.length>0){
    console.log(results)
    nosex = (results[0].pose.nose.x)-10;
    nosey = (results[0].pose.nose.y)+14.90;
    lefteyex = (results[0].pose.leftEye.x)-80
    lefteyey = (results[0].pose.leftEye.y)-120

}
    
});


}


function modelloaded(){
    console.log("Ml5 version"+ml5.version);
}
function draw(){
image(video,0,0,300,300)
//fill(255,0,0);
//stroke(255,0,0);
//circle(nosex,nosey,35.5)

image(clownphoto,nosex,nosey,60,35)
image(hat,lefteyex,lefteyey,130,50)
}
function take_snapshot(){
save("Image.png");
}