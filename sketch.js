var tom, tom1Im,jerry,jerry1Im, garden, gardenIm, endJ, endT
function preload() {
    //load the images here
    tom1Im = loadImage("Images/tomOne.png")
    gardenIm = loadImage("Images/garden.png")
    jerry1Im = loadImage("Images/jerryOne.png")
    tomWalk = loadAnimation("Images/tomTwo.png","Images/tomThree.png")
    jerryTease = loadAnimation("Images/jerryTwo.png","Images/jerryThree.png")
    endT = loadImage("Images/tomFour.png")
    endJ = loadImage("Images/jerryFour.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    garden = createSprite(500,400,20,20)
    garden.addImage(gardenIm)
    garden.scale = 1.2
    
    tom = createSprite(800,700,20,20)
    tom.addImage(tom1Im)
    tom.addAnimation("walking",tomWalk)
    tom.scale = 0.2

    jerry = createSprite(200,700,20,20)
    jerry.addImage(jerry1Im)
    jerry.addAnimation("teasing",jerryTease)
    jerry.scale = 0.13
}

function draw() {

    background("black");
   
    

   jerry.changeImage(jerry1Im)
   if(tom.x>370){
   keyPressed()
}
if(tom.x<370){
        tom.velocityX=0
        tom.addImage("endTom",endT)
        tom.changeImage("endTom")
        jerry.addImage("endJerry",endJ)
        jerry.changeImage("endJerry")
    }

   

    drawSprites();
}


function keyPressed(){

if(keyCode===LEFT_ARROW){
    tom.velocityX=-5;
    tom.changeAnimation("walking")
    
    jerry.changeAnimation("teasing")
}

    
}
