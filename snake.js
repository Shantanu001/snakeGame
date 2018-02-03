function Snake(){
    this.x = 0;
    this.y = 0;
    this.speedx = 1;
    this.speedy = 0;
    this.total =0;
    this.tail = [];
    
    //check if the snake dies
    this.die = function() {
        for(var i=0;i<this.tail.length;i++)
            {
                var pos = this.tail[i];
                if(dist(this.x,this.y,pos.x,pos.y)<1)
                    {
                         alert ("GAME OVER " + "SCORE:- " +this.total); 
                          this.total =0;
                          this.tail = [];
                    }
            }
        
    }
    
    
    
    //check if snake eats the food
    this.eat = function(food) {
        //console.log("total");
        let dis = dist(this.x,this.y,food.x,food.y);
        if(dis<1){this.total+=1;return true;}
        else {return false;}
    }
   
    
    //Update the direction next to be moved
    this.dn = function(x,y) {
        this.speedx = x;
        this.speedy = y;
    }
    
    //update the snake direction of moving from current position
    this.update = function() {
        if(this.total >= 1)
        {this.tail[this.total-1] = createVector(this.x,this.y);}    
             
             for(var i =0 ;i<this.tail.length-1;i++)
            {
                this.tail[i] = this.tail[i+1];
                //console.log("yes" + this.total );
    
            }
        
    this.x = this.x + this.speedx*scl;
    this.y = this.y + this.speedy*scl;
    
    //Putting the constraint on the snake    
    this.x = constrain (this.x,0,width-scl);
    this.y = constrain (this.y,0,height-scl);
        
    }
    
    //display the snake
    this.show = function() {
         fill(255);
        for(var i = 0 ; i < this.tail.length;i++)
            {
        
                 rect(this.tail[i].x, this.tail[i].y ,scl,scl);
            }
         rect(this.x,this.y,scl,scl);
    }
    

   
    
}