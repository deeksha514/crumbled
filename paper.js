class Paper{
 constructor(x,y,r){

var options={
isStatic:false,
restitution:0.3,
density:1.2,
friction:0.5
  }
  this.r=r;
  this.y=y;
  this.x=x;
  this.body=Bodies.circle(this.x,this.y,this.r,options);
  World.add(world,this.body);
 }

  display(){
      var pos=this.body.position;
      push();
      translate(pos.x,pos.y);
      rectMode(CENTER);
      fill("red");
      ellipse(0,0,this.r,this.r);
      pop();
  }
};

