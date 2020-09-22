
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var boy;
function preload()
{
	Image1 = loadImage("sprites/boy.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600,height,1200,20);
	stone1= new stone(200,200,20);
	mango1= new MANGO(400,200,20,10,20);

	Engine.run(engine);
  
}


function draw() {
	
  rectMode(CENTER);
  background(230,230,230);
  ground.display();
  mango1.display();
  stone1.display();
  drawSprites();
 
}



