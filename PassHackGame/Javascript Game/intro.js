/*used to generate random num to apply to how far the progress bar will expand*/
function randnum(lower,upper){
		return Math.floor(Math.random() * upper);//note that the upper is exclusive and lower inclusive
	}
	
/*allows the bar to grow gradually based on interval timing and when it reaches 100% a sound will play*/
function move() {
	/*sound file*/
	var audio=new Audio('loadfin.mp3');
  var s = document.getElementById("status");   
  var t=document.getElementById('load');
  var width = 10;
  var time=200;
  /*gives interval so the function repeats every 885 milliseconds*/
  var id = setInterval(frame, 885);
  /*sets the width the progress bar or the green stuff will grow or expand*/
  function frame() {
	  /*chekcs whether the bar reached 100%*/
    if (width >= 100) {
      clearInterval(id);
	   document.getElementById('button').style.display="block";
	   audio.play()
    } else {
	  width+=randnum(20,30);
	  if (width>100){
	  width=100;
	  }
      s.style.width = width + '%'; 
	  t.style.marginTop=-.003+'px';
	  time=time-50;
	  
    }
  
  }
   
}
move();
document.getElementById('button').style.opacity=1;