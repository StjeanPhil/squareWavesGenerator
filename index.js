
    const canvas = document.getElementById("ocean")
    const c =canvas.getContext('2d')

    canvas.width=(window.innerWidth/1.5)
    canvas.height=window.innerHeight/1.5


    let w1
    let w2
    let w3

    const w1Submit=()=>{        
        let speed=parseFloat(document.getElementById("w1-speed").value)
        let nbSquare=parseFloat(document.getElementById("w1-nbSquare").value)
        let amplitude=parseFloat(document.getElementById("w1-amplitude").value)
        let height=parseFloat(document.getElementById("w1-height").value)
        
        w1 = new SquareWave("rgba(0, 90, 200, 1)",speed,nbSquare,amplitude,height,canvas)
        document.getElementById("w1-code").innerHTML="new SquareWave('rgb(66, 72, 116)',"+speed.toString()+","+nbSquare.toString()+","+amplitude.toString()+","+height.toString()+",canvas)"
    }
    const w2submit=()=>{
        
        let speed=parseInt(document.getElementById("w2-speed").value)
        let nbSquare=parseInt(document.getElementById("w2-nbSquare").value)
        let amplitude=parseFloat(document.getElementById("w2-amplitude").value)
        let height=parseInt(document.getElementById("w2-height").value)
        
        w2 = new SquareWave("rgba(0, 120, 180, 1)",speed,nbSquare,amplitude,height,canvas)
        document.getElementById("w2-code").innerHTML="new SquareWave('rgb(220, 214, 247)',"+speed.toString()+","+nbSquare.toString()+","+amplitude.toString()+","+height.toString()+",canvas)"
        
        
    }
    const w3submit=()=>{
        
        let speed=parseInt(document.getElementById("w3-speed").value)
        let nbSquare=parseInt(document.getElementById("w3-nbSquare").value)
        let amplitude=parseFloat(document.getElementById("w3-amplitude").value)
        let height=parseFloat(document.getElementById("w3-height").value)
        
        w3   = new SquareWave("rgba(0, 137, 255, 1)",speed,nbSquare,amplitude,height,canvas)

        document.getElementById("w3-code").innerHTML="new SquareWave('rgb(166, 177, 225)',"+speed.toString()+","+nbSquare.toString()+","+amplitude.toString()+","+height.toString()+",canvas)"
        
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



// there is 64 waves rectangles
//                  wave(color,speed,surface,nbSquare,verticalPostion,width,height)
const waves1 = new Wave("rgb(200,200,220)",1,canvas,128,400,64,300);
const waves2 = new Wave("rgb(180,180,220)",2,canvas,128,450,32,100);

const waves3 = new Wave("rgb(180,180,220)",3,canvas,128,550,64,50);





    
    const animate=()=>{
        
        clearCanvas(canvas,c)


        c.fillStyle = "#5ea1ff";
        c.fillRect(0, 0, canvas.width, canvas.height);

        waves1.update()
        w3.update()
        waves2.update()
        w2.update()


        w1.update()
        waves3.update()


        requestAnimationFrame(animate)
    }
    const clearCanvas=(surface,ctx)=>{


        const sky = ctx.createLinearGradient(window.innerWidth/2,0,window.innerWidth/2,window.innerHeight)
        sky.addColorStop(0, "white");
        sky.addColorStop(0.9,"lightblue")
        sky.addColorStop(1, "blue");


        ctx.fillStyle = sky;
        ctx.fillRect(0, 0, surface.width, surface.height);     
    }
    animate()