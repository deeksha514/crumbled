var world;
var paper,ground,box1,box2,box3;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);
    rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var options={
        isStatic:true
	}
	
	//Create a Ground
	ground= new Ground(600,670,1200,50,options);
	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	paper= new Paper(80,630,35);
	//create Dustbin
	box1=new Dustbin(1100,550,20,220);
	box2=new Dustbin(900,550,20,220);
	box3=new Dustbin(1000,650,200,20);
	Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display();
  box3.display();
  box1.display();
  box2.display();
  ground.display();

 }

function keyPressed(){
	if (keyCode===UP_ARROW){
     
		Matter.Body.applyForce(paper.body,paper.body.position,{x:275,y:-275});
		
	}
}



