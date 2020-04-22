const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, enemy, friend;
var backgroundImg;
var Me, slingshot;


function preload() {
    backgroundImg = loadImage("sprites/Background.jpg");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);


    box1 = new Box(700,320,90,90);
    box2 = new Box(920,320,90,90);
    enemy = new Enemy(810, 380);
    log1 = new Log(810,380,300, PI/2);

    box3 = new Box(700,230,90,100);
    box4 = new Box(920,230,90,100);
    friend = new Friend(810, 150);

    log3 =  new Log(810,180,300, PI/2);
    

    
    

    box6 = new Box(700,150,90,90);
    box7 = new Box(920,150,90,90);

    Me = new Aryan(200,220);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(Me.body,{x:200, y:220});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    enemy.display();
    log1.display();

    box3.display();
    box4.display();
    box6.display();
    box7.display()

    friend.display();
    log3.display();
    
    
    

    Me.display();

    //log6.display();
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(Me.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(Me.body);
    }
}