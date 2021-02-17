class Paper {
    constructor(x, y,r) {
      var options = {
          'restitution':0.3,
          'friction':0.5,
          'density':1.2,
          isStatic:false
      }
      
      this.body = Bodies.circle(200, 450, 30, options);
     
      World.add(world, this.body);
    }
    display(){
      var paperpos =this.body.position;
      
      push();
      translate(paperpos.x, paperpos.y);
      ellipseMode(CENTER);
      fill("white");
    
      pop();
    }
  };
  