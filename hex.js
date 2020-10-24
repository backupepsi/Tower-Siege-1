class Hex{
    constructor(x,y,length, width){
        var options={
            isStatic: false, 
            restitution: 0,
            friction:1,
            density:1.2
        }
        this.body = Bodies.rectangle(x,y,length,width, options);
        this.length = length;
        this.width = width;
        //this.image = loadImage("images/hex.jpg")
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect( 0,0,this.length,this.width);
        pop();
    }
}