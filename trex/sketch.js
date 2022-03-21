
var grupodenuvens;
var grupodeobstaculos;
var JOGANDO = 1;
var GAMEOVER = 0;
var PERGUNTA = 2
var estadodejogo = JOGANDO;

var trex, trexcorrendo
var borda;
var solo, ground, soloinvisivel;
var nuvem, clouns;
var obstaculo1, cacto
var pontuacao = 0;
var fimdejogo,carregarfim;
var botaofimdejogo, botao;



function preload(){
    trexcorrendo = loadAnimation("trex1.png","trex2.png","trex3.png");
        ground = loadImage("ground2.jpg");
          
            cacto = loadImage("obstacle1.png");
   
        carregarfim = loadImage("gameOver.png");
        botao = loadImage("restart.png");
      
 
}

function setup(){
    createCanvas(windowWidth,windowHeight/2)
  
  
     trex = createSprite(70,height-80,30,50);
       trex.addAnimation("corre",trexcorrendo);
         trex.scale = 0.5;
        borda=createEdgeSprites()
      solo = createSprite(width/2,height/2);
        solo.addImage(ground);
        solo.scale = 2.0
        trex.depth = solo.depth
        trex.depth = trex.depth + 1



          
        grupodeobstaculos = createGroup();
      fimdejogo = createSprite(width/2,height/2-50,20,10);
       fimdejogo.addImage(carregarfim);
       botaofimdejogo = createSprite(width/2,height/2,10,10);
        botaofimdejogo.addImage(botao);

       
          trex.setCollider("circle",0,0,40)
       
       botaofimdejogo.scale = 0.4
     fimdejogo.scale = 0.5
       soloinvisivel = createSprite(width / 2, height - 75,width,10)
          soloinvisivel.visible=false
          
   
  
 
 
}

function draw(){
      background("180"); 
  
 
  if (estadodejogo === JOGANDO)  {
  
     pontuacao = pontuacao + Math.round(frameRate() / 60);
    if (pontuacao > 0 && pontuacao % 100 === 0){
      
      
      
      
    }
    
    if(solo.x < 0){
        solo.x = solo.width/2
    
    }
    fimdejogo.visible = false
    botaofimdejogo.visible = false
     solo.velocityX = -8
    
      if((touches.length>0 || keyDown("up")) && trex.y >= height - 120){
                trex.velocityY = -9
        
      }
        trex.velocityY = trex.velocityY + 0.5
    cact();
   
   // trex.debug = true
    grupodeobstaculos.debug = true
            if (trex.isTouching (grupodeobstaculos)){
    estadodejogo = GAMEOVER
           
              
      }
    
  }
   
    
  
  else if (estadodejogo === GAMEOVER)   {
       
     grupodeobstaculos.setVelocityXEach(0)
              trex.velocityX = 0
           solo.velocityX = 0 
      trex.velocityY = 0
    
    grupodeobstaculos.setLifetimeEach(-1)
    
  
           
    fimdejogo.visible = true
    botaofimdejogo.visible = true
     
    
    if (touches.length > 0 || mousePressedOver (botaofimdejogo)){
    reiniciar();
    touches = []
    }
  }
  
        
          text("pontos " + pontuacao ,500,30);
           
         
    
                 
                    
                  trex.collide(soloinvisivel)
                    
      


                      drawSprites();
                  

}

function cact(){
  
  
  
  if (frameCount % 40 === 0){
    obstaculo1 = createSprite(width,height - 100,20,20);
    obstaculo1.velocityX = (-6)
    //obstacilo1.velocityX = -(6 + pontuacao / 100)
    var aleatorio = Math.round(random(1,1));
    obstaculo1.addImage(cacto)
    obstaculo1.scale = 0.3;
    obstaculo1.lifetime = 300
   grupodeobstaculos.add(obstaculo1);

    
    
    
        
        
 }
    
    grupodeobstaculos.debug = true
    
    
    
  
  }
  
  
  
  
  
  
  

function reiniciar(){
  
  estadodejogo = JOGANDO
    grupodeobstaculos.destroyEach();
 trex.changeAnimation("running",trexcorrendo);
  pontuacao = 0
}



