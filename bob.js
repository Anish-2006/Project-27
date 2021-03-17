class Bob {
    constructor(x, y) {
      var options = {
          'restitution':1.0,
          'friction':1.0,
          density : 3.0
          
      }
      this.body = Bodies.circle(x, y,35, options);

      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      fill("magenta");
      translate(pos.x, pos.y);
      rotate(angle);
      ellipse(0,0,70);
      pop();
    }
  }
  