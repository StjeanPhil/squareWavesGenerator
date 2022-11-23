class SquareWave{
    //how many square the surface is dividev by,
    // from 0 to 1, a surface height ratio of the max height
    //the surface we draw the square on, has a width and height
    constructor(color,speed,nbSquare,amplitude,height,surface){
       this.color=color
       this.nbSquares=nbSquare
       this.speed=speed/5
       this.surface=surface
       this.squareLength=surface.width/(nbSquare-1)
       this.amplitude=(surface.height/10)*amplitude
       this.midPoint=(surface.height/10)*height
       this.lines=[]
       this.generateLines()
    }
    generateLines(){
        for(var i =0; i<this.nbSquares;i++){
            if(i%2==0){
    
                const origin={
                    x:i*this.squareLength,
                    y:this.midPoint+Math.random()*this.amplitude
                }
                
                const destination={
                    x:origin.x+this.squareLength,
                    y:origin.y
                }
                this.lines[i]={
                    origin:origin,
                    destination:destination
                }
                //console.log(listLines)
            }else{
                const origin={
                    x:this.lines[i-1].destination.x,
                    y:this.midPoint+Math.random()*this.amplitude
                }
                //console.log(listLines[i-1])
                const destination={
                    x:origin.x+this.squareLength,
                    y:origin.y
                }
                this.lines[i]={
                    origin:origin,
                    destination:destination
                }
            }
        }

    }
    move(){
        for(var i=0;i<this.lines.length;i++){
            this.lines[i].destination.x-=this.speed
            this.lines[i].origin.x-=this.speed
        }
        this.regen()
    }
    regen(){
        if(this.lines[0].origin.x<(this.lines[0].origin.x-this.lines[0].destination.x)){
            for(var i=0;i<this.lines.length;i++){
                if(i!=this.lines.length-1){
                    this.lines[i]=this.lines[i+1]
                }else{
                    const origin={
                        x:i*this.squareLength,
                        y:this.midPoint+Math.random()*this.amplitude
                    }
                    
                    const destination={
                        x:origin.x+this.squareLength,
                        y:origin.y
                    }
                    this.lines[i]={
                        origin:origin,
                        destination:destination
                    }
                    
                }
    
            }
    
        }
    }
    draw(){
        const c =this.surface.getContext('2d')
        c.fillStyle=this.color
        c.beginPath()
        c.moveTo(this.lines[0].origin.x,this.lines[0].origin.y)
        c.lineTo(this.lines[0].destination.x,this.lines[0].destination.y)
        for(var i=1;i<this.lines.length;i++){
            c.lineTo(this.lines[i].origin.x,this.lines[i].origin.y)
            c.lineTo(this.lines[i].destination.x,this.lines[i].destination.y)
        }
        //rest of the path for the filling
        c.lineTo(this.surface.width,this.surface.height)
        c.lineTo(0,this.surface.height)
        c.fill()
        


    }
    update(){
        this.move()
        this.draw()
    }

}

