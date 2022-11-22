
    const canvas = document.getElementById("ocean")
    const c =canvas.getContext('2d')

    canvas.width=window.innerWidth/1.5
    canvas.height=window.innerHeight/1.5


    let w1
    let w2
    let w3

    const w1Submit=()=>{        
        let speed=parseFloat(document.getElementById("w1-speed").value)
        let nbSquare=parseFloat(document.getElementById("w1-nbSquare").value)
        let amplitude=parseFloat(document.getElementById("w1-amplitude").value)
        let height=parseFloat(document.getElementById("w1-height").value)
        
        w1 = new SquareWave("rgb(66, 72, 116)",speed,nbSquare,amplitude,height,canvas)
        
    }
    const w2submit=()=>{
        
        let speed=parseInt(document.getElementById("w2-speed").value)
        let nbSquare=parseInt(document.getElementById("w2-nbSquare").value)
        let amplitude=parseFloat(document.getElementById("w2-amplitude").value)
        let height=parseInt(document.getElementById("w2-height").value)
        
        w2 = new SquareWave("rgb(220, 214, 247)",speed,nbSquare,amplitude,height,canvas)
        
    }
    const w3submit=()=>{
        
        let speed=parseInt(document.getElementById("w3-speed").value)
        let nbSquare=parseInt(document.getElementById("w3-nbSquare").value)
        let amplitude=parseFloat(document.getElementById("w3-amplitude").value)
        let height=parseFloat(document.getElementById("w3-height").value)
        
        w3   = new SquareWave("rgb(166, 177, 225)",speed,nbSquare,amplitude,height,canvas)
        
    }
    const submit1 = document.getElementById("w1-submit")
    submit1.onclick=w1Submit

    const submit2 = document.getElementById("w2-submit")
    submit2.onclick=w2submit

    const submit3 = document.getElementById("w3-submit")
    submit3.onclick=w3submit
    
    w1Submit()
    w2submit()
    w3submit()



    
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
        const gradient = ctx.createLinearGradient( surface.width, surface.height, surface.width,0);  
        gradient.addColorStop(0, "blue");
        gradient.addColorStop(1, "lightblue");  
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, surface.width, surface.height);     
    }
    animate()