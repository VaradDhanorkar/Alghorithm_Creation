var movingRect,fixedRect;

function setup() {
  createCanvas(800,400);

  movingRect = createSprite (200,200,50,80)
  fixedRect = createSprite (400,200,80,30)

  movingRect.shapeColor = "Green";
  fixedRect.shapeColor = "Green";
}

function draw() {
  background(255,255,255);  

  movingRect.x = World.mouseX
  movingRect.y = World.mouseY

  if (movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2 && 
    fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2 && 
    movingRect.y-fixedRect.y<fixedRect.width/2+movingRect.width/2 && 
    fixedRect.y-movingRect.y<fixedRect.width/2+movingRect.width/2)
 {
  movingRect.shapeColor = "Red";
  fixedRect.shapeColor = "Red";
 }  

  else {
    movingRect.shapeColor = "Green";
    fixedRect.shapeColor = "Green";

  }

  drawSprites();
}