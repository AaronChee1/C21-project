
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let ball;
let ground, leftSide,rightSide;
function preload()
{
	
}

function setup() {
	createCanvas(1300, 700);


	engine = Engine.create();
	world = engine.world;

	let ball_options={
	isStatic:false,
	restitution:0.3,
	friction:0,
	density:1.2	
	}
	ground = new Ground(width/2,670, width, 20)
	leftSide = new Ground(1000, 600, 20, 120)
	rightSide = new Ground (1250, 600, 20, 120)
	//Create the Bodies Here.
	ball = Bodies.circle(260, 100, 30, ball_options)
	World.add(world, ball)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ellipse(ball.position.x, ball.position.y, 30, 30)
 
	ground.show()
	leftSide.show()
	rightSide.show()
}
function keyPressed(){
	if(keyCode===RIGHT_ARROW){
	Matter.Body.applyForce(ball, ball.position, {x: 85, y: -85})
	}
}


