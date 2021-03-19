class Mango {
    constructor(x,y) {
      var options = {
        isStatic:true,
        restitution:0,
        friction:1,
      }
      this.body = Bodies.rectangle(x,y,70,70,options);
      this.width = 70;
      this.height = 70;
      this.image = loadImage("mango.png");
  
      World.add(world,this.body)
    }
    display(){
      var pos = this.body.position;
      push()
      translate(pos.x,pos.y);
      imageMode(CENTER);
      image(this.image,15,11,70,70);
      pop();
    }
  }