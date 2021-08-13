const Bodies= Matter.Bodies;
const Engine = Matter.Engine;
const World= Matter.World;

var mainTower;
var tower1;
var engine,world;

function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 200);
  engine = Engine.create();
  world = engine.world;
  mainTower = new MainTower(400,390,50,200);
 // tower1 = new Tower1();
}

function draw() {
  Engine.update(engine);
  background(255,255,255);  
  mainTower.display();
  //drawSprites();
  text(mouseX+","+ mouseY,10,10);
}