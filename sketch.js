var trex, trex_running, trex_collided;
var ground, invisible_ground, ground_image;

function preload () { 
  trex_running = loadAnimation("trex1.png");
  trex_collided = loadImage("trex_collided.png");
  ground_image = loadImage("ground2.png");
}
function setup() {

  createCanvas(400, 400);
   trex = createSprite (200,380,20,50);
  trex.addAnimation ( "running", trex_running );
  
  ground = createSprite (200,380,400,20)
  ground.addImage("ground", ground_image);
  ground.x = ground.width /2;
  ground.velocityX = -2;
  
  //invisible Ground to support Trex
  invisible_ground = createSprite(200,385,400,5);
  invisible_ground.visible = false;

}

function draw() {
  background(220);
  if(keyDown("space") ) {
      trex.velocityY = -12 ;
    }
  //add gravity
    trex.velocityY = trex.velocityY + 0.8;
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
trex.collide(invisible_ground);
  drawSprite();
}