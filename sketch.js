const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

const Constraint=Matter.Constraint;


var bob1,bob2,bob3,bob4,bob5;
var roof1,rope1,rope2,rope3,rope4,rope5;
function setup() {
	createCanvas(1600, 500);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
  
 
    bob1=new bob(400,300);
    bob2=new bob(450,300);
    bob3=new bob(500,300);
    bob4=new bob(550,300);
    bob5=new bob(600,300);

    roof1=new roof(480,100,250,30);

    rope1=new rope(bob1.body,roof1.body,-80);
    rope2=new rope(bob2.body,roof1.body,-40);
    rope3=new rope(bob3.body,roof1.body,0);
    rope4=new rope(bob4.body,roof1.body,40);
    rope5=new rope(bob5.body,roof1.body,80);

    Engine.run(engine);
	//Render.run(render);
  
}


function draw() {
  rectMode(CENTER);
  background("red");
  bob1.display();
   bob2.display();
   bob3.display();
   bob4.display();
   bob5.display();

roof1.display();

rope2.display();
rope3.display();
rope4.display();
rope5.display();
rope1.display();
}

 function keyPressed() {
    if (keyCode === UP_ARROW) {
       Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-50});
        } 
      } 
