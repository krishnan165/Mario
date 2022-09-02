NoseX=0;
NoseY=0;

function preload() {
	world_start = loadSound("world_start.wav");
	jump=loadSound("jump.wav");
	coinmario=loadSound("coin.wav");
    gameover=loadSound("gameover.wav");
	kick=loadSound("kick.wav");
	diemario=loadSound("mariodie.wav")

	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	instializeInSetup(mario);
	canvas.parent("canvas");

	video=createCapture(VIDEO);
	video.size(800,400);
	video.parent("switch_vid");

	pose=ml5.poseNet(video,modelLoaded);
    pose.on("pose",gotResults);
}

function modelLoaded()
{
	console.log("Model is loading");
}
function gotResults(results)
{
	if(results.length>0)
	{ 
	  NoseX=results[0].pose.nose.x;
	  NoseY=results[0].pose.nose.y;
      console.log("Nose X"+NoseX);
	  console.log("Nose Y"+NoseY);
    }
}

function draw() {
	game()
}






