window.onload = function(){
  
  var canvas = document.createElement("canvas"),
      ctx = canvas.getContext("2d");
  
  canvas.width = 400;
  canvas.height = 400;
  
  document.body.appendChild(canvas);
      
  eraseCanvas();
  
  var posX = 20,
      posY = canvas.height / 2,
      vx = 5,
      vy = -10,
      gravity = 1;
      
  
  setInterval(function(){
    eraseCanvas();
    posX += vx;
    posY += vy;
    
    if(posY > 300){
      vy *= -0.5;
      vx *= -0.5;
      posY = 300;
    }
    
    vy += gravity;
    
    ctx.fillStyle = "white";
    ctx.fillRect(posX,posY, 10, 10);
  }, 30)
  
  function eraseCanvas(){
    ctx.fillStyle = "black";
    ctx.fillRect(0,0,canvas.width,canvas.height);
  }
  
  
}

