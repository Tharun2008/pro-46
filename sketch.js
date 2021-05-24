var car;
var stone,fire,log;
var carImg;
var fireImg;
var stoneImg;
var logImg;
var canvas,background;
var track;
var bac;



function preload(){
  carImg = loadImage('car.jpg');
  fireImg = loadImage('fire3.jpg');
  stoneImg = loadImage('stone.jpg');
  logImg = loadImage('log1.jpg');
  track = loadImage("black.jpg");
  bac = loadImage("bac.jpg");

}

function setup() {
  canvas = createCanvas(displayWidth-20,displayHeight-30);
  car = createSprite(761,676,10,10);
  car.addImage(carImg);
  car.scale = 0.1;

  stone = createSprite(545,462,10,10);
  stone.addImage(stoneImg);
  fire = createSprite(659,177,10,10);
  fire.addImage(fireImg);
  log = createSprite();
  log.addImage(logImg);
car.velocityY = -2;
//bac=createSprite(0,0,2000,2000);
//bac.addImage(bac);
}

function draw() {
  background("white");
   //image(track, 0,-displayHeight*4,displayWidth, displayHeight*5);
    
     background.velocityY=-4;
     
       
     
      if (keyDown(LEFT_ARROW)) {
        car.velocityX= -2;
      }
      if (keyDown(RIGHT_ARROW)) {
        car.velocityX= 2;
      }
  text(mouseX+','+mouseY,mouseX,mouseY);
  car.display(); 
  stone.display(); 
  fire.display(); 
  log.display(); 
  drawSprites();
}