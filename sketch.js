const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, pig1;
var bg;

function preload(){
    bg=loadImage("sprites/bg.png");
}
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    
    

    box1 = new Log(700,320,70,70);
    box2 = new Log(920,320,70,70);
    
    log1 = new Log(810,260,300, PI/2);

    box3 = new Log(700,240,70,70);
    box4 = new Log(920,240,70,70);
  

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Log(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);
    log6 = new Log(760,120,150, PI/7);
    log7 = new Log(870,120,150, -PI/7); 
    bird = new Bird(100,100);
  

}

function draw(){
    background("black");
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
  

    log1.display();

    box3.display();
    box4.display();

    log3.display();

    box5.display();
    log4.display();
    log5.display();
    log6.display();
    log7.display(); 

    bird.display();
}