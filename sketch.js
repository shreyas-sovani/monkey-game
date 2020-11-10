var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score=0;
var ground,groundImg;

var PLAY=1;
var END=0;
var gameState=PLAY;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,500);
  
  
  monkey=createSprite(50,450,19,19);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.15;
  
  
  ground=createSprite(300,490,600,10);
  
  
  FoodGroup=new Group();
   obstacleGroup=new Group();
  
  monkey.debug=true;    
  
}


function draw() { 
background("lightBlue");
  
  if(gameState===PLAY){
    
    if(keyDown("space")&& monkey.collide(ground)){   
    monkey.velocityY=-20;
  }
  
  
  if(FoodGroup.isTouching(monkey)){
    score=score+1;
    FoodGroup.destroyEach();
  }
  
    monkey.velocityY=monkey.velocityY+1.3;
    
    
  food();
  obstacles(); 
    
    if(monkey.isTouching(obstacleGroup)){
      
      gameState=END;
      
    }
    
    
    
    
  }
  
  
  
  
 else if(gameState===END){
   
   textSize=35;
   text("GameOver",300,250);
   text("Press 'R' To Restart",300,300);
   
   reset();
   
   monkey.collide(ground);
   
 }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
 

  
  
   monkey.collide(ground);
   
  
  drawSprites();
  
  text("score : "+score,550,50);
}
  
function obstacles(){
  
  if(frameCount%300===0){
    
    obstacle=createSprite(600,448,1,1);
    obstacle.addImage(obstaceImage);
    obstacle.velocityX=-7;
    obstacle.scale=0.2;
    obstacleGroup.add(obstacle);
  }
}

function food(){
  
  if(frameCount%200===0){
    
    banana=createSprite(600,random(300,400),1,1);
    banana.addImage(bananaImage );
    banana.velocityX=-7;
    banana.scale=0.15;
    
    FoodGroup.add(banana);
  }
  
  
  
}

function reset(){
  
  monkey.collide(ground);

obstacleGroup.setVelocityXEach(0);
  FoodGroup.destroyEach();
  obstacleGroup.destroyEach();
  score=0;
  if(keyDown("R")){
    
    gameState=PLAY;     
    
  }
  
}








