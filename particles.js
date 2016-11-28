window.onload = function(){
  
  var canvas = document.createElement("canvas"),
      ctx = canvas.getContext("2d"),
      refresRate = 30, //Tasa de refresco del canvas (ms)
      particles = {}, //Donde se guarda cada particula
      particleIndex = 0, //Indice de las particulas
      particleNum = 3, //Cantidad de particulas por refresco
      changeDirectionProbability = 0.1; //Probabilidad de cambios de direccion
  
  canvas.width = 400;
  canvas.height = 400;
  
  document.body.appendChild(canvas);
      
  eraseCanvas();      
  
  setInterval(function(){
    eraseCanvasWithTrails();
    createParticles(particleNum);
    
    for(var i in particles){
      particles[i].draw();
    }        
  }, refresRate);
  
  //CLASES------------------------
  
  //Se crea clase particle
  function Particle(){
    this.x = canvas.width /2;
    this.y = canvas.height /2;
    this.vx = Math.random() * 10 - 5; //Random velocidad eje x
    this.vy = Math.random() * 10 - 5; //Random velocidad eje y
    this.gravity = 0.3;
    this.color = generateRandomHSLATwoChannels();
    this.life = 0;
    this.maxLife = Math.random()*30+50; //Random vida de particula
    particleIndex++;
    particles[particleIndex] = this; //Se añade la nueva particula
    this.id = particleIndex;         //id nos indica la posicion en la que esta esa particula
  } 
  //Se añade el metodo draw a clase particle
  Particle.prototype.draw = function(){
    this.x += this.vx;
    this.y += this.vy;
    
    if(Math.random() < changeDirectionProbability){   //Cambio de velocidad y direccion aleatorio
      this.vx = Math.random() * 10 - 5;               //Depende de la probabilidad introducida          
      this.vy = Math.random() * 10 - 5;      
    }    
    //this.vy += this.gravity;
    this.life++;
    if(this.life >= this.maxLife){
      delete particles[this.id];
    }    
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, 10,10);
  }
      
  
  //FUNCIONES---------------------------
  
  //Crea particulas 
  function createParticles(cantidad){
    for (var i=0; i < cantidad; i++){
      new Particle();
    }
  }    
  
  //Borra el lienzo dejando estela
  function eraseCanvasWithTrails(){
      ctx.fillStyle = "rgba(0,0,0,0.2)"; //Cambiando transparencia se cambia la estela
      ctx.fillRect(0,0,canvas.width,canvas.height);
  }
  
  //Borra el lienzo a negro
  function eraseCanvas(){
      ctx.fillStyle = "black";
      ctx.fillRect(0,0,canvas.width,canvas.height);
  }
}


