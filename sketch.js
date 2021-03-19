
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var rock, ground, slingshot;

var mango1, mango2, mango3, mango4, mango6;



var playerIMG, treeIMG;

function preload()
{
  playerIMG=loadImage("boy.png")
  treeIMG=loadImage("tree.png")
}

function setup() {
	createCanvas(800, 700);
	
	engine = Engine.create();
	world = engine.world;

	player = createSprite(150,567)
	player.addImage(playerIMG)
	player.scale=0.2
	
	tree = createSprite(550,400)
	tree.addImage(treeIMG)
	tree.scale=0.5

	rock = new Rock(25,440);
	ground = new Ground(400,695,800,10);

	slingshot = new Slingshot(rock.body,{x:200,y:100});

	mango1 = new Mango(450,200);
	mango2 = new Mango(400,300);
	mango3 = new Mango(555,250);
	mango4 = new Mango(700,210);
	mango5 = new Mango(650,300);
	mango6 = new Mango(570,150);

	Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background("white");
  
  drawSprites();

  rock.display();
  ground.display();

  detectollision(rock,mango1)
  detectollision(rock,mango2)
  detectollision(rock,mango3)
  detectollision(rock,mango4)
  detectollision(rock,mango5)
  detectollision(rock,mango6)

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
}

function mouseDragged(){

    Matter.Body.setPosition(rock.body,{x:mouseX,y:mouseY})
    
    }

function mouseReleased(){

    slingshot.fly()  

}

function detectollision(lrock,lmango){
mangoBodyPosition=lmango.body.position
rockBodyPosition=lrock.body.position

var distance=dist(rockBodyPosition.x, rockBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
 if(distance<=lmango.r+lrock.r){
	Matter.Body.setStatic(lmango.body,false);
 }
}
