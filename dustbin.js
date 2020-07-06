class Dustbin {
    constructor(x,y,w,h){

        var options={
            isStatic:true
        }

        this.w=w;
        this.h=h;
        this.x=x;
        this.y=y;
        this.body=Bodies.rectangle(x,y,w,h,options)
        World.add(world,this.body);
    }
    display(){
        var dPos=this.body.position; 
        push();
        translate(dPos.x,dPos.y);
        rectMode(CENTER);
        fill(128,128,128);
        rect(0,0,this.w,this.h);
        pop();
    }
}