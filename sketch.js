var bg,bg2,form,system,code,security;
var score=0;

function preload() {
 
  
  bg= loadImage("dark.jpg")
  //load image for the treasure background
  bg2=loadImage("key.jpg")
}

function setup() {
  createCanvas(1000,500);
  security = new Security();
  system = new System();
  
  
}

function draw() {
  background(bg);
  clues();
  security.display();
  textSize(20);
  fill("white");
  text("Score: " + score, 450, 50);
// add code for changing the background to the treasure background
  

  if(score === 3) {
    clear()
    background(bg2)
    stroke("black")
    strokeWeight("30")
    fill("lightblue")
    textSize(60);
    text("congrats!! You found the key",100, 450);
  }
   
  

  drawSprites()
}