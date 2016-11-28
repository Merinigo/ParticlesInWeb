//Genera un color rgb aleatorio
  function generateRandomRGB(){
    color = "rgb("+parseInt(Math.random()*255, 10)+
      ","+parseInt(Math.random()*255, 10)+
      ","+parseInt(Math.random()*255, 10)+")";
    return color;
  }
  
  //Genera colores cambiando dos canales
  function generateRandomRGBTwoChannels(){
    color = "rgb("+parseInt(Math.random()*255, 10)+
      ","+parseInt(Math.random()*255, 10)+
      ",100)";
    return color;
  }
  
  //General colores solo cambiando un canal
  function generateRandomRGBOneChannel(){
    color = "rgb("+parseInt(Math.random()*255, 10)+
      ",0,0)";
    return color;
  }
  
  //Genera un color hsl aleatorio
  function generateRandomHSL(){
    color = "hsl("+parseInt(Math.random()*360, 10)+
      ","+parseInt(Math.random()*100, 10)+
      "%,"+parseInt(Math.random()*100, 10)+"%)";
    return color;
  }
  
  //Genera colores cambiando dos canales
  function generateRandomHSLTwoChannels(){
    color = "hsl("+parseInt(Math.random()*360, 10)+
      ","+parseInt(Math.random()*100, 10)+
      "%,50%)";
    return color;
  }
  
  //General colores solo cambiando un canal
  function generateRandomHSLOneChannel(){
    color = "hsl("+parseInt(Math.random()*360, 10)+
      ",50%,50%)";
    return color;
  }

  //Genera un color hsla aleatorio
  function generateRandomHSLA(){
    color = "hsla("+parseInt(Math.random()*360, 10)+
      ","+parseInt(Math.random()*100, 10)+
      "%,"+parseInt(Math.random()*100, 10)+
      "%,0.5)";
    return color;
  }
  
  //Genera colores cambiando dos canales
  function generateRandomHSLATwoChannels(){
    color = "hsla("+parseInt(Math.random()*360, 10)+
      ","+parseInt(Math.random()*100, 10)+
      "%,50%,0.5)";
    return color;
  }
  
  //General colores solo cambiando un canal
  function generateRandomHSLAOneChannel(){
    color = "hsla("+parseInt(Math.random()*360, 10)+
      ",100%,50%,0.2)";
    return color;
  }