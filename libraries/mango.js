class Mango{
   constructor(x,y,r){
      var options={
         isStatic:true,
         restitution:0.4,
         friction:0.5,
         density:3
      }
      this.x=x;
      this.y=y;
      this.r=r;
      this.image = loadImage("images/mango.png");
      this.body  = Bodies.circle(this.x,this.y,this.r/3,options);
      World.add(world,this.body);
   }
   display(){
      push();
      translate(this.body.position.x,this.body.position.y);
      rotate(this.body.angle);
      fill(0,0,0,0);
      imageMode(CENTER);
      image(this.image,0,0,this.r,this.r);
      pop();
   }
}