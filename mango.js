class MANGO {
    constructor(x, y, radius) {
      
	 var options ={
		restitution: 0,
		isStatic : true,
		friction : 1
    }

      this.body = Bodies.circle(x, y, radius, options);
      this.image = loadImage("sprites/mango.png");
      World.add(world, this.body);
    
    }
    display(){
      var pos =this.body.position;
      ellipseMode(RADIUS);
      ellipse(pos.x,pos.y,20,20);
    //  image(this.image, 0, 0, this.width, this.height);
      pop();
    }
};