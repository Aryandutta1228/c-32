class Aryan extends BaseClass {
  constructor(x,y){
    super(x,y,150,150);
    this.image = loadImage("sprites/modified image.png");
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();
  }
}
