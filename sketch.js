let xpos = 0;
let ypos = 350;

function setup() {
  createCanvas(400, 400);
  noStroke();
  noLoop();

}


//loop 
function draw() {
  background(220);
  fill(0);
 
  rect(xpos, ypos, 50, 50);  // x좌표 
}


function keyPressed() {
   loop();
  
   if(keyCode===RIGHT_ARROW)
  {
    xpos = xpos + 10;
    
  } 
  
  else if(keyCode===LEFT_ARROW )  {
           
           xpos = xpos - 10;
            
   }
  
   else if(keyCode===UP_ARROW )  {
           
           ypos = ypos - 10;
            
   }
  
  
   else if(keyCode===DOWN_ARROW )  {
           
           ypos = ypos + 10;
            
   }
  
  
  
}