//Example de contructions
//const waves1 = new Wave("black",2,document.getElementById("GameCanvas"),128,400,64,300);
//ajouter waves1.update() dans les functions d'animations

class Wave{
    rectangleWidth=8
    width;
    height;
    constructor(color,speed,surface,nbSquare,verticalPostion,width,height){
        this.color=color//color of wave
        this.speed=speed//the speed of wave
        this.surface=surface//the canvas to paint on

        this.nbSquare=nbSquare//must be 32 /64/128 etc
        this.rectangles=[]//contains all the lines        
        this.verticalPosition=verticalPostion//y position of the wave        
        this.height=height//Whole wave height: must be a diver or multipler of 32
        this.width=width//Whole wave width :must be a divider or multiplier of 32
        console.log(this.width)
        this.generateRectangles()
    }
    generateRectangles(){

        for(let i=0;i<this.nbSquare;i++){
            let newLine={
                x: i * this.rectangleWidth,
                y: this.verticalPosition,
                height: -Math.abs(Math.sin(((i/this.width)*Math.PI)) * this.height),
                width: this.rectangleWidth+1
            }
            this.rectangles[i]=newLine
        }
    }
    draw(){
        const ctx = this.surface.getContext('2d')
        ctx.fillStyle=this.color

        for(let i=0;i<this.nbSquare;i++){
            console.log(this.rectangles[i])
            ctx.fillRect(this.rectangles[i].x,this.rectangles[i].y,this.rectangles[i].width,this.rectangles[i].height)
        }

    }
    move(){
        for(let i=0;i<this.nbSquare;i++){
            this.rectangles[i].x+=this.speed
            //reset rect if out of bounds
            if (this.rectangles[i].x - this.rectangles[i].width > this.surface.width) {
                this.rectangles[i].x = -this.rectangles[i].width;
            }
        }
    }
    update(){   
        this.move()
        this.draw()
    }

}