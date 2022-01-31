var last_position_of_x, last_position_of_y;
canvas=document.getElementById("my_canvas");
ctx=canvas.getContext("2d");

color="red";
 radius= 20;
 width_of_line= 4;
 var width=screen.width;
 new_width=screen.width-70;
 new_height=screen.height-300;
 if(width<992){
   document.getElementById("my_canvas").width=new_width;
   document.getElementById("my_canvas").height=new_height;
   document.body.style.overflow="hidden";
 }
canvas.addEventListener("touchstart",my_touchstart);
function my_touchstart(e){
  color=document.getElementById("color").value;
radius=document.getElementById("radius").value;
  width_of_line=document.getElementById("width_of_the_line").value;
  last_position_of_x=e.touches[0].clientX-canvas.offsetLeft;
  last_position_of_y=e.touches[0].clientY-canvas.offsetTop;
}

canvas.addEventListener("touchmove",my_touchmove);

function my_touchmove(e){
  current_position_of_touch_x=e.touches[0].clientX-canvas.offsetLeft;
   current_position_of_touch_y=e.touches[0].clientY-canvas.offsetTop;
  
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=width_of_line;
    ctx.arc(current_position_of_touch_x,current_position_of_touch_y,radius,0,2*Math.PI);
    ctx.stroke();
    
  }
last_position_of_x=current_position_of_touch_x;
last_position_of_y=current_position_of_touch_y;


function clearArea(){
  ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}
