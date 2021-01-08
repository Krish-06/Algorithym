var moving, frozen;
function setup() {
  createCanvas(800,400);
  moving = createSprite(400, 200, 50, 50);
  frozen = createSprite(200,100,50,50);
  moving.shapeColor = "blue";
  frozen.shapeColor = "green";
}

function draw() {
  background(255,255,255);  
  moving.x = mouseX;
  moving.y = mouseY;
  if(moving.x - frozen.x < frozen.width/2 + moving.width/2
    && frozen.x - moving.x < frozen.width/2 + moving.width/2
    && moving.y - frozen.y < frozen.height/2 + moving.height/2
    && frozen.y - moving.y < frozen.height/2 + moving.height/2){
    textSize (30);
    fill  ("red");
    text ("Collision is detected",400,200);
  }
  else{
    textSize (30);
    fill  ("red");
    text ("Collision is not detected",400,200);
  }
  drawSprites();
}