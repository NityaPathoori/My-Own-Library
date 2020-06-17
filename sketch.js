var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 800, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  //movingRect.velocityY = -5;
  fixedRect.velocityY = -2;

  Gameobject1 = createSprite(100,100,50,80);
  Gameobject1.shapeColor = "green";

  Gameobject2 = createSprite(200,100,50,80);
  Gameobject2.shapeColor = "green";

  Gameobject3 = createSprite(300,100,50,80);
  Gameobject3.shapeColor = "green";

  Gameobject4 = createSprite(400,100,50,80);
  Gameobject4.shapeColor = "green";
  Gameobject4.velocityY = 2;
}

function draw() {
  background(0,0,0);  

  if (isTouching(Gameobject1,movingRect)) {
    Gameobject1.shapeColor = "blue";
    movingRect.shapeColor = "blue";
  }

  else {
    Gameobject1.shapeColor = "green";
    movingRect.shapeColor = "green"; 
  }

 bounceOff(Gameobject4,fixedRect);

 movingRect.x = mouseX;
 movingRect.y = mouseY;
 
  drawSprites();
}

