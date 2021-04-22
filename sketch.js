const Engine = Matter.Engine;
const World= Matter.World;
var engine,world; 
const Bodies = Matter.Bodies;
var drop; 
var maxDrops = 100; 
var drops = []; 
var umbrella,umbrella_img; 

function preload(){
     
}

function setup(){
    createCanvas(displayWidth-20,displayHeight);
    engine = Engine.create(); 
    world = engine.world; 
    if(frameCount%100===0){
    for(var i=0; i<maxDrops; i++){
        drops.push(new Drop(random(0,400), random(0,400), 10)); 

    }
    umbrella = new Umbrella(150,500,150,500); 
    
} 


    

}

function draw(){
    background(0); 
    Engine.update(engine); 
    umbrella.display(); 
    for(var i=0; i<maxDrops; i++){
        drops[i].display();  
        drops[i].update(); 
    }
    drawSprites(); 
    
}   

