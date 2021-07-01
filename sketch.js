const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var world, engine;
var canvas;
var platform;
var back;

var mango1;
var mango2;
var mango3;
var mango4;
var mango5;
var mango6;
var mango7;
var mango8;
var mango9;
var mango10;

var stone1;
var launcher1;

function preload() {
  skyimg = loadImage("images/sky.jpg");
  bs = loadSound("sound/loop.mp3")
}
function setup() {
  bs.loop();
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;

  back = new Backimg();
  platform = new Ground(width / 2, height, width, 10);

  mango1 = new Mango(930, 400, 50);
  mango2 = new Mango(920, 210, 50);
  mango3 = new Mango(1050, 250, 50);
  mango4 = new Mango(1480, 450, 50);
  mango5 = new Mango(1300, 150, 50);
  mango6 = new Mango(1150, 450, 50);
  mango7 = new Mango(1350, 350, 50);
  mango8 = new Mango(1130, 170, 50);
  mango9 = new Mango(1200, 300, 50);
  mango10 = new Mango(850, 500, 50);

  stone1 = new Stone(300, 630, 30);
  launcher1 = new Launcher(stone1.body, { x: 310, y: 630 });
}

function draw() {

  background("#72C3E2");
  Engine.update(engine);

  imageMode(CENTER);
  image(skyimg, width / 2, height / 2, width, height);
  back.display();
  platform.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();

  stone1.display();
  launcher1.display();

  detectollision(stone1, mango1);
  detectollision(stone1, mango2);
  detectollision(stone1, mango3);
  detectollision(stone1, mango4);
  detectollision(stone1, mango5);
  detectollision(stone1, mango6);
  detectollision(stone1, mango7);
  detectollision(stone1, mango8);
  detectollision(stone1, mango9);
  detectollision(stone1, mango10);

  textSize(17);
  fill("black");
  strokeWeight(0)
  stroke("black");
  text("press space to again throw the rock", 5, height - 10)
}

function mouseDragged() {
  Matter.Body.setPosition(stone1.body, { x: mouseX, y: mouseY })
}

function mouseReleased() {
  launcher1.fly();
}
function keyPressed() {
  if (keyCode === 32) {
    Matter.Body.setPosition(stone1.body, { x: 310, y: 630 })
    launcher1.attach(stone1.body);
  }
}
function detectollision(lstone, lmango) {
  mangoBodyPosition = lmango.body.position
  stoneBodyPosition = lstone.body.position

  var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)

  if (distance <= lmango.r + lstone.r) {

    Matter.Body.setStatic(lmango.body, false);
  }

}