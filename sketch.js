
var ground,ground2,ground3;
var square1,square2,square3,square4;
var wall1,wall2,wall3,wall4;

function setup(){
    var canvas = createCanvas(400,400);
    ground = createSprite(200,300,400,20);
    ground2 = createSprite(200,200,400,20);
    ground3 = createSprite(200,100,400,20);
    square1 = createSprite(10,50,20,20);
    square2 = createSprite(10,150,20,20);
    square3 = createSprite(10,250,20,20);
    square4 = createSprite(10,350,20,20);
    wall1 = createSprite(380,50,20,40);
    wall2 = createSprite(380,150,20,40);
    wall3 = createSprite(380,250,20,40);
    wall4 = createSprite(380,350,20,40);

    square1.velocityX = 3;
    square2.velocityX = 3;
    square3.velocityX = 3;
    square4.velocityX = 3;




  
}

function draw(){    
    background(0);
 
ground.display();
ground2.display();
ground3.display();
square1.display();
square2.display();
square3.display();
square4.display();
wall1.display();
wall2.display();
wall3.display();
wall4.display();

if (isTouching(square1,wall1)){
    square1.velocityX = 0
}

if(isTouching(square2,wall2)){
    square2.velocityX = 0
}

if(isTouching(square3,wall3)){
    square3.velocityX =0
}

if(isTouching(square4,wall4)){
    square4.velocityX = 0
}


    
    

    
    
}