var paddle
var ball
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12
var edges


function setup() {
  createCanvas(1050,800);
edges =  createEdgeSprites()

paddle=createSprite(525,680,135,30)
paddle.shapeColor="yellow"

fill("black") 
ball = createSprite(525,580, 20,20)
//ball = ellipse(525,580,15)
ball.velocityX=3
ball.velocityY=4

block1=createSprite(100,100,175,175)
block1.shapeColor="red"

block2=createSprite(275,100,175,175)
block2.shapeColor="orange"

block3=createSprite(450,100,175,175)
block3.shapeColor="yellow"

block4=createSprite(625,100,175,175)
block4.shapeColor="green"

block5=createSprite(800,100,175,175)
block5.shapeColor="blue"

block6=createSprite(975,100,175,175)
block6.shapeColor="purple"

block7=createSprite(100,275,175,175)
block7.shapeColor="purple"

block8=createSprite(275,275,175,175)
block8.shapeColor="blue"

block9=createSprite(450,275,175,175)
block9.shapeColor="green"

block10=createSprite(625,275,175,175)
block10.shapeColor="yellow"

block11=createSprite(800,275,175,175)
block11.shapeColor="orange"

block12=createSprite(975,275,175,175)
block12.shapeColor="red"





}

function draw() {
  background('lightBlue');  
 
  



  paddle.collide(edges)
  ball.bounceOff(paddle)
  ball.bounceOff(block1)
  ball.bounceOff(block2)
  ball.bounceOff(block3)
  ball.bounceOff(block4)
  ball.bounceOff(block5)
  ball.bounceOff(block6)
  ball.bounceOff(block7)
  ball.bounceOff(block8)
  ball.bounceOff(block9)
  ball.bounceOff(block10)
  ball.bounceOff(block11)
  ball.bounceOff(block12)
  ball.bounceOff(edges)


  if(ball.isTouching(block1)){
    destory(block1)
  }

  if(ball.isTouching(block2)){
    destory(block2)
  }


  if(ball.isTouching(block3)){
    destory(block3)
  }


  if(ball.isTouching(block4)){
    destory(block4)
  }




  if(ball.isTouching(block5)){
    destory(block5)
  }

  if(ball.isTouching(block6)){
    destory(block6)
  }


  if(ball.isTouching(block7)){
    destory(block7)
  }

  if(ball.isTouching(block8)){
    destory(block8)
  }


  if(ball.isTouching(block9)){
    destory(block9)
  }

  if(ball.isTouching(block10)){
    destory(block10)
  }


  if(ball.isTouching(block11)){
    destory(block11)
  }

  if(ball.isTouching(block12)){
    destory(block12)
  }






if(keyDown(LEFT_ARROW)){
paddle.velocityX=-8
}


if(keyDown(RIGHT_ARROW)){
paddle.velocityX=8
}






drawSprites();
}