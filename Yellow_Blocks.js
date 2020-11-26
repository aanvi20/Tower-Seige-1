class Block{
    constructor(x, y, width, height){
        var options={
           'restitution': 0.8,
           'friction': 1,
           'density': 1.2,
           'isStatic': false
        }

        this.body=Bodies.rectangle(x, y, width, height, options);
        this.image = loadImage("yellow_circle.png")
        this.width=width
        this.height=height
        World.add(world, this.body)
 
       
       
    }

    display(){
        var pos=this.body.position
        imageMode(CENTER)
        stroke ("green");
        fill ("yellow");
        image (this.image, pos.x, pos.y, this.width, this.height)
       // rect(this.body.position.x, this.body.position.y, this.width, this.height)
    }
}