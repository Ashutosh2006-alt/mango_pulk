class Backimg {
   constructor() {
      this.treeimg = loadImage("images/tree.png");
      this.grassimg = loadImage("images/grass.png");
      this.cloudimg = loadImage("images/cloud.png");
      this.boyimg = loadImage("images/boy1.png");
      this.x = width / 2;
      this.y = height / 2;
   }
   display() {
      imageMode(CENTER);
      image(this.cloudimg, this.x, 500, width, 1000);
      image(this.grassimg, this.x, this.y + 370, 1700, 100);
      image(this.treeimg, this.x + 400, this.y, 800, 800);
      image(this.boyimg, this.x / 2, this.y + 282, 180, 200);
   }
}