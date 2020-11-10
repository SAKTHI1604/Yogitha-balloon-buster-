var blue_balloon,green_balloon,red_balloon,pink_balloon,bow,arrow,background;
var blue_balloonImage,red_balloonImage,green_balloonImage,pink_balloonImage,bowImage,arrowImage,backgroundImage;
function preload() {
  
backgroundImage = loadImage("background0.png");
arrowImage = loadImage("arrow0.png");
bowImage = loadImage("bow0.png");
pink_balloonImage = loadImage("pink_balloon0.png");
red_balloonImage = loadImage("red_balloon0.png");
blue_balloonImage = loadImage("blue_balloon0.png");
green_balloonImage = loadImage("green_balloon0.png");


}
function setup() {
  createCanvas(600, 600);
  
  //creating background
  background = createSprite(0,0,600,600);
  background.addImage(backgroundImage);
  background.scale = 2.5
  
  for(var i=60;i<390;i=i+60) {
  red_balloon = createSprite(50, i, 1, 1);
  red_balloon.addImage(red_balloonImage);
  red_balloon.scale = 0.1
}
  for(var i=70;i<390;i=i+70) {
    green_balloon = createSprite(100,i,1,1);
   green_balloon.addImage(green_balloonImage);
    green_balloon.scale=0.1;
  }
  for(var i=80;i<390;i=i+80) {
    blue_balloon = createSprite(150,i,1,1)
  blue_balloon.addImage(blue_balloonImage);
    blue_balloon.scale = 0.1;
  }
  for(var i=60;i<390;i=i+60) {
    pink_balloon = createSprite(200,i,1,1);
   pink_balloon.addImage(pink_balloonImage);
    pink_balloon.scale = 1;
  }
  
}
function draw() {
  
drawSprites();

}
