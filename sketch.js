
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof,bob1,bob2,bob3,bob4,bob5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	roof = new Roof(width/2,170,400,40);

  bob1 = new Bob(260,400);
  bob2 = new Bob(330,400);
	bob3 = new Bob(400,400);
	bob4 = new Bob(470,400);
	bob5 = new Bob(540,400);


	chain1 = new Rope(bob1.body,roof.body,-140);
	chain2 = new Rope(bob2.body,roof.body,-70);
	chain3 = new Rope(bob3.body,roof.body,0);
	chain4 = new Rope(bob4.body,roof.body,70);
	chain5 = new Rope(bob5.body,roof.body,140);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);

  background(230);
  
  roof.display();

  fill("red");
  textSize(40);
  text("Press left arrow key to move the first bob",20,50);

  fill("blue");
  text("Press right arrow key to move the last bob",20,100)

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();

  drawSprites();
 
}

function keyPressed(){

  if(keyCode === LEFT_ARROW){

  Body.applyForce(bob1.body,bob1.body.position,{x:-600,y:0});
  

  }

  if(keyCode === RIGHT_ARROW){

    Body.applyForce(bob5.body,bob5.body.position,{x:600,y:0});
    
  
    }
  

 }


