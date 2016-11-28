window.onload = function(){
  
  var canvas = document.createElement("canvas"),
      ctx = canvas.getContext("2d"),
      particles = {}, //Donde se guarda cada particula
      particleIndex = 0, //Indice de las particulas
      particleNum = 10; //Cantidad de particulas
  
  canvas.width = 400;
  canvas.height = 400;
  
  document.body.appendChild(canvas);
      
  eraseCanvas();
  
  var p = new Particle();

  for (var i=0; i < particleNum; i++){
    new Particle();
  }
  
  
  setInterval(function(){
    eraseCanvas();
    
    for(var i in particles){
      particles[i].draw();
    }
    
    p.draw();
  }, 30);
  
  //CLASES------------------------
  
  //Se crea clase particle
  function Particle(){
    this.x = canvas.width /2;
    this.y = canvas.height /2;
    this.vx = Math.random() * 10 - 5;
    this.vy = Math.random() * 10 - 5;
    this.life = 0;
    this.maxLife = 100;
    particleIndex++;
    particles[particleIndex] = this; //Se añade la nueva particula
    this.id = particleIndex;         //id nos indica la posicion en la que esta esa particula
  } 
  //Se añade el metodo draw a clase particle
  Particle.prototype.draw = function(){
    this.x += this.vx;
    this.y += this.vy;
    this.life++;
    if(this.life == this.maxLife){
      delete particles[this.id];
    }    
    ctx.fillStyle = "white";
    ctx.fillRect(this.x, this.y, 10,10);
  }
      
  
  //FUNCIONES---------------------------
  
  //Borra el lienzo a negro
  function eraseCanvas(){
      ctx.fillStyle = "black";
      ctx.fillRect(0,0,canvas.width,canvas.height);
  }
}


