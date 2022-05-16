
var bluebox
var target,target1,target2,target3
var gameover1,gameover;
var greenbox,greenbox1;


var PLAY =1;
var END =0;

var gameState = PLAY;

function preload(){
   
    bluebox = loadImage("bluebox.png")
    target = loadImage("redbox.png")
    greenbox = loadImage("greenbox.png")
    gameover1 = loadImage("gameover.png")



}

function setup() {
    createCanvas(1000, 500);
   

    

    bluebox = createSprite(800,220,20,50)
	  bluebox.addImage(bluebox)
	  bluebox.scale = 0.05

    greenbox1 = createSprite(900,250,20,50)
	  greenbox1.addImage(greenbox)
	  greenbox1.scale = 0.05

    gameover = createSprite(500,250,20,10)
    gameover.addImage(gameover1)

    target1 = createSprite(50,250,20,10)
    target1.addImage(target)
    target1.scale = 0.2 
    

    target2 = createSprite(250,50,20,10)
    target2.addImage(target)
    target2.scale = 0.2 

    target3 = createSprite(450,450,20,10)
    target3.addImage(target)
    target3.scale = 0.2 

    
    


    

 
}

function draw() {
    background("black")

    

    if(gameState === PLAY){
   

      
    target1.velocityY = -5
    target2.velocityY = -3
    target3.velocityY = -7
    

      
      if(keyIsDown(RIGHT_ARROW)){
        bluebox.position.x=bluebox.position.x+5
      }
      if(keyIsDown(LEFT_ARROW)){
        bluebox.position.x=bluebox.position.x-5
      }
      if(keyIsDown(UP_ARROW)){
        bluebox.position.y=bluebox.position.y-5
      }
      if(keyIsDown(DOWN_ARROW)){
        bluebox.position.y=bluebox.position.y+5
      }
      


    if(bluebox.isCollide(target1)){
      gameState === END
    }
    if(bluebox.isCollide(target2)){
      gameState === END
    }
    if(bluebox.isCollide(target3)){
      gameState === END
    }

      gameover.visible = false
      target1.visible = true
      target2.visible = true
      target3.visible = true
      bluebox.visible = true
      gameover.visible = false




    }
    else if(gameState === END){
      target1.visible = false
      target2.visible = false
      target3.visible = false
      bluebox.visible = false
      gameover.visible = true
    }





  



  

  Edge1=createEdgeSprites();
  target1.bounceOff(Edge1);
  target2.bounceOff(Edge1)
  target3.bounceOff(Edge1)

    

    drawSprites();


}






