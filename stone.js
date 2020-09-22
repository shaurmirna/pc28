class stone {
    constructor(x,y,width) {
      var options = {
          isStatic: false,
          restitution:0,
          friction:1,
         density:1.2
      }
      this.body = Bodies.rectangle(x,y,width,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      this.image = loadImage("stone.png");
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      rect(pos.x, pos.y, this.width);
    }
  };
