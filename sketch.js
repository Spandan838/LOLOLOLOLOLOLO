
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1370, 700);
	
	

	//groundSprite=createSprite(width/2, height-35, width,10);
	//groundSprite.shapeColor=color("yellow")


	engine = Engine.create();
	world = engine.world;

	box1 = new Box(1250,650,170,20);
	box2 = new Box(1325,605,20,70);
	box3 = new Box(1175,605,20,70);
	paper = new Ball(100,100,22);

	//Create the Bodies Here.
	
    ground1 = new ground(200, 665, 2800, 10);
    ground2 = new ground(200, 670, 2800, 10);
    ground3 = new ground(1360, 665, 10, 5800);
    
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  box1.display();
  box2.display();
  box3.display();
  paper.display();
  //ball.display();
  ground1.display();
  ground2.display();
  ground3.display();
  keyPressed();
  drawSprites();
 
}


function keyPressed(){
  if (keyCode === UP_ARROW){

     Matter.Body.applyForce(paper.body,paper.body.position,{x:3,y:-3})

  }
}


