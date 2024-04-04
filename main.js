function setup(){
    canvas= createCanvas(480,380);
    canvas.center();
    
}
function draw(){
    image(video,0,0,480,380);
}

function start(){
    objectDetector= ml5.objectDetector ('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="Status:Detecting Objects";
    name= document.getElementById("name").value;
}
function modelLoaded(){
    console.log("MODEL LOADED");
    status=true;

}