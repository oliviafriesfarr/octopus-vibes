//this program creates bubbles similar to a lava lamp that you can play with over a photo of an octopus for a fun and colorful underwater experience!

//an array to store all particles
var particles = [];

//the strength of gravity on particles (they will float up)
var gravity = -0.025;

function setup() {
  createCanvas(800, 800);
  noStroke();
  bg = loadImage('3658339290_9b70b26aca_k.jpg')
}

function draw() {
  background(bg);
  
  //constantly create new particles at the mouse position
  createParticle(mouseX, mouseY);
  
  //iterate over all particles
  for (let i = particles.length - 1; i >= 0; i--) {
    
    //get the current particle and store into array
    let p = particles[i];
    
    //calculate the particle size according to its age
    let size = map(p.age, 0, p.lifespan, p.size, 0);
    
    //get the percentage that the bubble is through its life span (0 - 1)
    let bubblePercent = p.age/p.lifespan;
    
    //we will now use the above value to blend between two colors
    //(based on the age of the particle)
    let bubbleColor = lerpColor(color(50, 50, 255), color(255, 100, 0), bubblePercent);
    
    //set the particle color
    fill(bubbleColor);
    
    //draw the particle
    ellipse(p.x, p.y, size);
    
    //update the particle's position
    p.x += p.directionX * p.speed;
    p.y += p.directionY * p.speed;
    
    //add gravity to the particle's y-axis direction
    p.directionY += gravity;
    
    //increase the particle's age by 1 each frame
    p.age++;
    
    //if the particle is older than its lifespan, remove it from the array
    if (p.age > p.lifespan) {
      particles.splice(i, 1);
    }
  }
}

//this function will create a new particle and add it to the array
function createParticle(pX, pY) {
  
  let p = {
    x: pX,
    y: pY,
    directionX: random(-0.05, 0.05),
    directionY: random(-0.1, 0.1),
    speed: random(8, 16),
    size: random(64, 96),
    lifespan: random(60, 90),
    age: 0
  }
  
  particles.push(p);

//print my signature to the console
print("Intro to Programming I, Final Assignment, 05/05/23, Olivia Fries-Farr"); 
}