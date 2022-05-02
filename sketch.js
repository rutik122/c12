var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided=loadImage("trex_collided.png");
  groundImage=loadImage("ground2.png");
}

function setup() {
  createCanvas(600, 200);
  
  //create a trex sprite
  trex = createSprite(50,180,20,50);
  trex.addAnimation("running", trex_running);
  
  //adding scale and position to trex
  trex.scale = 0.5;
  
  
  //create ground sprite
  ground = createSprite(200,180,400,20);
  ground.addImage("ground", groundImage);
  ground.x=ground.width/2;
  ground.velocityX=-4;

  invisibleGround=createSprite(200,190,400,10);
  invisibleGround.visible=false
}

function draw() {
  background(220);
 
  //jumping the trex on space key press
  if(keyDown("space")&& trex.y>=100) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if(ground.x <0){
    ground.x=ground.width/2
  }
 
 //stop trex from falling down 
  trex.collide(invisibleGround);
  drawSprites();
}
