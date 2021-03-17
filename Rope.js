


class Rope {

    constructor(body1,body2,abc){

    
    var options ={
 
     bodyA : body1,
     bodyB : body2,
     pointB : {x:abc,y:0},
     
 
    }
 
    this.abc = abc;
    this.rope = Constraint.create(options);
    World.add(world,this.rope);
 
    }
 
    display(){
 
    var posA = this.rope.bodyA.position;
    var posB = this.rope.bodyB.position;
 
    strokeWeight(4);
    line(posA.x,posA.y,posB.x + this.abc,posB.y);
 
 
    }
 
 
 }
 
 