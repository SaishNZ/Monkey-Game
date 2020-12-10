
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage 
var FoodGroup, obstacleGroup
var ground, groundImage
var score
var survivalTime = 0

function preload(){
  
  monkey_running =        loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  FoodImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  bananaImage = loadImage("banana.png");
   
}

function setup() {
  
  //Creating groups
  FoodGroup = createGroup();
  obstacleGroup = createGroup();
  
  monkey = createSprite(80, 315, 20, 20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400, 350, 900, 10);
  ground.velocityX = -4;
  ground.x = ground.width /2;
  console.log(ground.x);
  
}

function draw() {
  
  //clear the screen
  background("lightgreen");
  
  //Jump when SPACE key is pressed
  if(keyDown("space") && monkey.y >= 314) {
    monkey.velocityY = -13;
  } 
  
  //adding gravity
  monkey.velocityY = monkey.velocityY + 0.5;
  
  if(ground.x = 0) {
    ground.x = ground.width/2;
  }
  
  //Preventing the monkey from falling off the ground
  monkey.collide(ground);
  
  //Displaying the survival time and score
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: " + score, 215, 50);
  
  stroke("black");
  textSize(20);
  fill("black")
  survivalTime = Math.ceil(frameCount/frameRate());
  text("Survival Time:" + survivalTime, 30, 50);
  
  food();
  obstacle();

  drawSprites();
  
}

function food() {
  
  if(frameCount % 80 === 0) {
    var banana = createSprite(400, random(120, 200), 20, 20);
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -5;
    banana.lifetime = 100;
    FoodGroup.add(banana);
  }
}

function obstacle() {
  
  if(frameCount % 300 === 0) {
    var obstacle = createSprite(400, 330, 20, 20)
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.1;
    obstacle.velocityX = -5;
    obstacle.lifetime = 100;
    obstacleGroup.add(obstacle);
  }
  
}
