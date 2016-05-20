// Code goes here

var canvas = document.getElementById('mycanvas');
// store the 2D rendering context- the actual tool we can use to paint on the canvas

var ctx = canvas.getContext('2d');
var x= canvas.width/2;
var y= canvas.height-30;
var dx=2;
var dy =-2;
var ballRadius =10;
var e = false;
 // make a rectangle
 
 // paddel variables
 var paddelHeight =15;
 var paddelWidth =50;
 var paddelX = (canvas.width - paddelWidth)/2
 var paddelY = canvas.height - paddelHeight;
 
// left right keyboard control
var leftPress = false;
var rightPress = false

function drawPaddel (){
  ctx.beginPath();
  ctx.rect(paddelX,paddelY,paddelWidth,paddelHeight);
  ctx.fillStyle="green"
  ctx.fill();
  ctx.closePath();
}


function draw(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.beginPath();
  ctx.arc(x,y,ballRadius,0,Math.PI*2);
  ctx.fillStyle="#0095DD";
  ctx.fill();
  ctx.closePath();
  drawPaddel();
  x=x+dx;
  y=y+dy;
  
  if((x>canvas.width-ballRadius) || (x + dx < ballRadius)){
    dx=-dx;
  }
console.log(x,y,canvas.height);
  if( y<ballRadius){
    dy=-dy;
  }else if (y  > canvas.height){
    console.log('got it1');
     window.alert('t');
     document.location.reload();
  }
  

}



function dwnHandler(e){
  upHandler(e);
  console.log(e.keyCode);
  if(e.keyCode === 39){
    rightPress=true;
  }else if(e.keyCode === 37){
    leftPress =true;
  }
}
function upHandler(e){
  console.log(paddelX,canvas.width-paddelWidth);
   if(e.keyCode === 39){
     rightPress=false;
     
     
    // move the paddel to left side by one opsition
    if(paddelX < (canvas.width-paddelWidth)){
      paddelX +=5;
    }
  }else if(e.keyCode === 37){
      leftPress =false;
      if(paddelX){
        paddelX -=5;
      }
      
  }
  
}


setInterval(draw, 15);
// event Listener for keyboard keys
document.addEventListener('keyup',upHandler,false);
document.addEventListener('keydown',dwnHandler,false);


/*
document.onkeydown = function (e){
  e = e || window.event;
  if([36,37,38,39].indexOf(e.keyCode) != -1){
  alert('shorthand expression called',[36,37,38,39].indexOf(e.keyCode));
}
  switch(e.keyCode){
    
    case 37 :
        alert('left');
        break;
    case  38:
       alert('up');
       break;
    case 39: 
       alert('right');
       break;
    case 40 :
       alert('down');
       break;
    default :
       alert(e.keyCode);
       break;
  }
}

*/

