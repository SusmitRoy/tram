class Chain{
    constructor(bodyA, bodyB){
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 0.5            
        }
        this.sling1 = loadImage('sprites/sling1.png');
       
        this.sling = Constraint.create(options);
        World.add(myWorld, this.sling);
    }
   
   show(){
        
            var posA = this.sling.bodyA.position;
            var posB = this.sling.bodyB.position;
           
                stroke(0);
                strokeWeight(5);
                line(posA.x , posA.y, posB.x , posB.y);
               
    }
    
}