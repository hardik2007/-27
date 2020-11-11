class Bob {
    constructor(x,y,r)
    {
        var options = { restitution:0.8,friction:0.5,density:1.0}
    
        this.x=x;
        this.y=y
        this.r=r
        this.body=Bodies.circle(this.x,this.y,this.r,options)

        World.add(world,this.body)
    }
    
    display(){
    var pos = this.body.position    
    push();
    translate(pos.x,pos.y)
    var angle = this.body.angle
    rotate(angle)
    ellipseMode (CENTER)
    fill("red")
    ellipse(0,0,this.r, this.r);
    pop()
    }
    }
