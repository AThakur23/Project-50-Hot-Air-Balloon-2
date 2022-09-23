var bg, bgImg, bg1, bg1Img
var bottomGround
var topGround
var balloon, balloonImg
var bird, birdAnimation, birdImg;
var grandparents, grandparentsAnimation;
var house, houseImg;

function preload(){
bgImg = loadImage("assets/bg.png");

bg1Img = loadImage("assets/bg1.png");

houseImg = loadImage("assets/house.png");

balloonImg = loadAnimation("assets/balloon1.png","assets/balloon1.png","assets/balloon1.png")

birdAnimation = loadAnimation("assets/bird1.png", "assets/bird2.png", "assets/bird3.png");

grandparentsAnimation = loadAnimation("assets/grandparents1.png", "assets/grandparents2.png");
}

function setup(){
  createCanvas(windowWidth, windowHeight);

//background image

//creating top and bottom grounds
bottomGround = createSprite(200,390,800,20);
bottomGround.visible = false;

topGround = createSprite(200,10,800,20);
topGround.visible = false;
      
//creating balloon     
balloon = createSprite(110,200,20,50);
balloon.addAnimation("balloon",balloonImg);
balloon.scale = 0.5;

grandparents = createSprite(width-450, height-130, 30, 30)
grandparents.addAnimation("grandparents", grandparentsAnimation);
grandparents.scale = 0.7;

house = createSprite(width-200, height-195, 30, 30)
house.addImage("house", houseImg);
house.scale = 0.7;

ground = createSprite(width+1000, height-300, 30, height);
ground.addImage(bg1Img);
ground.scale = 0.4;
}

function draw() {
  
  background("skyblue");
  image(bgImg, 0, 0, width, height);
  image(bgImg, width+10, height+10, width, height);
  
        
          //making the hot air balloon jump
          if(keyDown("space") && balloon.x > 110) {
            balloon.velocityX= -3 ;
            console.log(balloon.x);
          }

          if (keyDown(RIGHT_ARROW)){
            balloon.velocityX = +10;
          }

          if (keyDown(DOWN_ARROW)){
            balloon.velocityY = +3;
          }

          if (keyDown(UP_ARROW)){
            balloon.velocityY = -3;
          }

          //adding gravity
          //balloon.velocityY = balloon.velocityX+2;

        camera.x = balloon.x;

        console.log(frameCount);
        

        balloon.depth = ground.depth;
        balloon.depth = balloon.depth+1; 
        
        
      
        grandparents.depth = ground.depth;
        grandparents.depth = grandparents.depth+1;

        house.depth = ground.depth;
        house.depth = house.depth+1;
        
        bird();
        drawSprites();
        
        
}

function bird() {
  if (frameCount > 150 && frameCount%70 == 0){
    birdImg = createSprite(width+1000, height-500, 30, 30);
    birdImg.addAnimation("bird", birdAnimation);
    birdImg.scale = 0.8;

    birdImg.velocityX = -2;
    birdImg.depth = ground.depth;
    birdImg.depth = bird.depth+1;
  }
}