var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  //create division objects
  for (var k = 0; k <=880; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  //create 1st row of plinko objects
  for (var j = 75; j <=width; j=j+45) { 
    plinkos.push(new Plinko(j,75));
  }

  //create 2nd row of plinko objects
  for (var j = 50; j <=width-10; j=j+40) 
  {
    plinkos.push(new Plinko(j,175));
  }

  //create 3rd row of plinko objects
  for (var j = 25; j <=width-20; j=j+45) 
  {
    plinkos.push(new Plinko(j,275));
  }

  
  //create 4th row of plinko objects
  for (var j = 3; j <=width-30; j=j+40) 
  {
    plinkos.push(new Plinko(j,375));
  }

  //create particle objects
 // p1=new Particle(10,0)
    for (var d=250; d<=width-10;d=d+20){
      particles.push(new Particle(d,2));
    }
}
 


function draw() {
  background("black");
  textSize(20)
 
  Engine.update(engine);
  ground.display();
  
  //display the plinkos 
  for (var i = 0; i < plinkos.length; i++) {
   
    plinkos[i].display();   
  }
   
  //display the divisions
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  //display the paricles 
//  p1.display()
for (var d=0; d< particles.length;d++){
  //this.color="pink","blue","green"
  particles[d].display()
}

}