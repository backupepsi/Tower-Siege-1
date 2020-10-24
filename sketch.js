const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(400, 380, width, 20);
    stand = new Ground(500, 300, 200, 7);
    box1 = new Box(375, 275);
    box2 = new Box(425, 275);
    box3 = new Box(475, 275);
    box4 = new Box(525, 275);
    box5 = new Box(575, 275);
    box6 = new Box(625, 275);
    //mid
    box7 = new Box(400, 250);
    box8 = new Box(450, 250);
    box9 = new Box(500, 250);
    box10 =new Box(550, 250);
    box11 =new Box(600, 250);
    //3rd
    box12 =new Box(425, 225);
    box13 =new Box(475, 225);
    box14 =new Box(525, 225);
    box15 =new Box(575, 225);
    //4th
    box16 =new Box(500, 200);
    
hexagon = new Hex(200,600, 30,30)
    sling = new SlingShot(hexagon.body, {x: 200,y:600});

    

}

function draw() {
  background(255,255,255);
  Engine.update(engine);
  ground.display();
  stand.display();  
  fill(0,255,117);
  //box1.display();
  fill(100, 150, 39);
  box2.display();
  fill(200, 27, 98);
  box3.display();
  fill(1, 100, 230);
  box4.display();
  fill(190, 230, 190);
  box5.display();
  fill(170, 140, 90);
 // box6.display();
  fill(170, 140, 90);
  //box7.display();
  fill(178, 17, 133);
  box8.display();
  fill(129, 154, 195);
  box9.display();
  fill(16, 157, 126);
  box10.display();
  fill(131, 158, 87);
  //box11.display();
  fill(221, 21, 221);
 // box12.display();
  fill(50, 255, 90);
  box13.display();
  fill(240, 140, 90);
  box14.display();
  fill(170, 240, 190);
//  box15.display();
  fill(209, 40, 199);
  box16.display();
  sling.display();
  fill(0);
  hexagon.display();

  drawSprites();

}

function mouseDragged() {
  Matter.Body.setPosition(hexagon.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  sling.fly();
}
