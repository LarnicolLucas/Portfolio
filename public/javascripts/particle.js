

    let container = document.getElementById("containSnow");
    
    let snow = {
        nb: 250,
        speed : 50,
        deepEffect: 1.2,
        range: 1.2,
        speedFocus : 50,
        sizeMin : 1,
        sizeMax : 10,
        blur : 8,
        xMax : window.innerWidth,
        yMax : window.innerHeight,
        xOffset : [],
        yOffset : [],
        sizeR : [],
        rdm (max, min) { return Math.floor(Math.random()*(max - min + 1 )) + min
            },
        rdmSize(){
            return this.rdm(this.sizeMax,  this.sizeMin)
            },
        rdmPos(){
            let res = [this.rdm(0, this.range*this.xMax), this.rdm(0, this.range*this.yMax)];
            return res
            }
        }
        
    let i = 0;
    let len = snow.nb;
    let spanX = [];
   for(i; i< len; i++){
      spanX.push(document.createElement("span"));
      
        let size = snow.rdmSize();
        let pos = snow.rdmPos();
        
      spanX[i].style.width = size+"px";
      spanX[i].style.height = size+"px";
      
      spanX[i].style.left = pos[0]+"px";
      spanX[i].style.top = pos[1]+"px";

      spanX[i].style.filter = "blur("+snow.blur/size+"px)";
       
       container.appendChild(spanX[i]);

        spanX[i].style.animationDuration= snow.speed / size +"s";
        spanX[i].style.animationDelay= snow.rdm(2, 0) +"s";
       
       snow.xOffset.push(spanX[i].offsetLeft);
       snow.yOffset.push(spanX[i].offsetTop);
       snow.sizeR.push(size);
   } 
 document.addEventListener("mousemove", function(evt){
    
        spanX.forEach(function(el){
        
                let i = spanX.indexOf(el);

                el.style.left = 500+"px";
                
                let xPlus = snow.xOffset[i] - evt.clientX/(snow.speedFocus  / Math.pow(snow.sizeR[i], snow.deepEffect));
                let yPlus = snow.yOffset[i] - evt.clientY/(snow.speedFocus  / Math.pow(snow.sizeR[i], snow.deepEffect));
                el.style.left =  xPlus + "px";
                el.style.top =  yPlus + "px";
            
        })
    })
