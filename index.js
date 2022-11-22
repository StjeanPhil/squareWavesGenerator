
    const canvas = document.getElementById("ocean")
    const c =canvas.getContext('2d')

    canvas.width=window.innerWidth
    canvas.height=window.innerHeight



    let w1 = new SquareWave("rgb(66, 72, 116)",1,20,0.4,5,canvas)
    let w2 =new SquareWave("rgb(220, 214, 247)",2,30,0.2,2,canvas)
    let w3=new SquareWave("rgb(166, 177, 225)",0.5,10,0.2,9,canvas)


    const submit1 = document.getElementById("w1-submit")
    submit1.onclick=()=>{
        
        let speed=parseInt(document.getElementById("w1-speed").value)
        let nbSquare=parseInt(document.getElementById("w1-nbSquare").value)
        let amplitude=parseFloat(document.getElementById("w1-amplitude").value)
        let height=parseInt(document.getElementById("w1-height").value)
        
        w1 = new SquareWave("rgb(66, 72, 116)",speed,nbSquare,amplitude,height,canvas)
        console.log(w)
    }
    const submit2 = document.getElementById("w2-submit")
    submit2.onclick=()=>{
        
        let speed=parseInt(document.getElementById("w2-speed").value)
        let nbSquare=parseInt(document.getElementById("w2-nbSquare").value)
        let amplitude=parseFloat(document.getElementById("w2-amplitude").value)
        let height=parseInt(document.getElementById("w2-height").value)
        
        w2 = new SquareWave("rgb(220, 214, 247)",speed,nbSquare,amplitude,height,canvas)
        console.log(w2)
    }
    const submit3 = document.getElementById("w3-submit")
    submit3.onclick=()=>{
        
        let speed=parseInt(document.getElementById("w3-speed").value)
        let nbSquare=parseInt(document.getElementById("w3-nbSquare").value)
        let amplitude=parseFloat(document.getElementById("w3-amplitude").value)
        let height=parseFloat(document.getElementById("w3-height").value)
        
        w3   = new SquareWave("rgb(166, 177, 225)",speed,nbSquare,amplitude,height,canvas)
        console.log(w3)
    }


    
    const animate=()=>{
        
        clearCanvas(canvas,c)
        
        w1.move()
        w2.move()
        w3.move()
        w3.draw()
        w2.draw()
        w1.draw()
      


        requestAnimationFrame(animate)
    }
    const clearCanvas=(surface,ctx)=>{    
        ctx.fillStyle="red"
        ctx.fillRect(0,0,surface.width,surface.height)
    }
    animate()