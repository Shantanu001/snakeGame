var scl =20;
var s ;
var food;
function setup() {
  // put setup code here
     createCanvas(600,600);
    s= new Snake();
    frameRate(10);
     //food = createVector(random(width),random(height));
    picklocation();
}

function draw() {
  // put drawing code here
     background(0); 
     if(s.eat(food))
        {
            picklocation();
        }
    s.die();
    s.update();
    s.show();
    fill('#00ff00');
    rect(food.x,food.y,scl,scl);
   
}
function mousePressed(){
    s.total++;
}
function picklocation(){
    let row = floor(width/scl);
    let col = floor(height/scl);
    food = createVector(floor(random(col)),floor(random(row)));
    food.mult(scl);
}


function keyPressed() {
        if(keyCode === UP_ARROW){
             s.dn(0,-1);
             //console.log("yes");
         }
         else if(keyCode === DOWN_ARROW)
         {
             s.dn(0,1);
         }
         else if(keyCode === RIGHT_ARROW)
         {
             s.dn(1,0);
         }
         else if(keyCode === LEFT_ARROW)
         {
             s.dn(-1,0);
         }
    
}




