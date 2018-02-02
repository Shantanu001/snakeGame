function Snake(){
    this.x = 0;
    this.y = 0;
    this.speedx = 1;
    this.speedy = 0;
    
    //Update the direction next to be moved
    this.dn = function(x,y) {
        this.speedx = x;
        this.speedy = y;
    }
    
    //update the snake direction of moving from current position
    this.update = function() {
      this.x = this.x + this.speedx*scl;
    this.y = this.y + this.speedy*scl;     
    }
    
    //display the snake
    this.show = function() {
         fill('#00ff00');
         rect(this.x,this.y,20,20);
    }
   
   
    
}