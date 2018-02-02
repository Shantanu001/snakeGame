var scl =20;
var s ;
function setup() {
  // put setup code here
     createCanvas(600,600);
    s= new Snake();
    frameRate(10);
}

function draw() {
  // put drawing code here
     background(0); 
    s.update();
    s.show();
    
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




