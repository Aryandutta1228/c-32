class Friend extends BaseClass {
    constructor(x, y){
      super(x,y,120,120);
      this.image = loadImage("sprites/amey.png");
      this.Visiblity = 255;
    }
  
   display(){
     
     if(this.body.speed < 3){
      super.display();
     }
     else{
       World.remove(world, this.body);
       push();
       this.Visiblity = this.Visiblity - 5;
       tint(255,this.Visiblity);
       image(this.image, this.body.position.x, this.body.position.y, 120, 120);
       pop();
     }
     
   }
  
  
  
  };