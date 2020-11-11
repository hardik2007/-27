
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint
const Body = Matter.Body;
var bob1,string,ground;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1 = new Bob(250,200,20);
	bob2 = new Bob(270,200,20);
	bob3 = new Bob(230,200,20);
	bob4 = new Bob(210,200,20);
  bob5 = new Bob(290,200,20);
  ground = new Ground(600,height/5,500,20);
	string1 = new String(bob1.body,ground.body);
	string2 = new String(bob2.body,ground.body);
	string3 = new String(bob3.body,ground.body);
	string4 = new String(bob4.body,ground.body);
	string5 = new String(bob5.body,ground.body);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  bob1.display()
  bob2.display()
  bob3.display()
  bob4.display()
  bob5.display()
  string1.display();
  string2.display();
  string3.display();
  string4.display();
  string5.display();
  ground.display()   
  drawSprites();
  function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}
function mouseReleased(){
    slingShot.fly();
}
}



