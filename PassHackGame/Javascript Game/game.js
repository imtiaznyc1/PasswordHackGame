var audio = document.getElementById("myAudio");
 audio.volume = 0.6;
  var pull=false;
  
  document.getElementById("begin").addEventListener("click",foo);
/*these are the lists of all the hints of different type such as the tens and hundreds place*/
  var hundredHints = ['the year of the death of Christ', 'the last digits of the year of the 9/11',
        'the month of valentines day','the month that has Patrick&apos;s day',"the month of fools",
        "the amendment that allows you to refuse to answer questions", "the number of flags in a certain amusement park",
        "the number of dragon balls in a certain show", "the black ball in pool", "the number of lives a cat has", "the month of Halloweeen"
        ,"the last 2 digits of the year Rutherford discovers the structure of an atom","the last digits of the year the world was supposed to end according to the Calendar"
        ,"the lucky number that adds up to 4","the first two digits of the year Columbus reached the Amercas", "the century the Gutenburg's press produced the bible",
        "the last two digits of the year that Barack Obama last served our country","the last two digits of the year the last president got elected"
        ,"the century the U.S. constitution was signed","the last two digits of the year World War I ended", "the century Armstrong walked on the moon",
        "the current century that we live in", "the last two digits of the year Magellan&apos;s expedition", "the number of Lebron James","the number of eggs in 2 dozen",
        "the favorite day of Santa Claus", "the second favorite day of Santa Claus", "the percentage of the world that is land","the first two digits the year the Colossus of Rhodes was built",
        "the last two digits of the year the Great Depression started","the number of sides in a triacontagon"
        ,"the amount of letters in the Russian Alphabet","the freezing temperature of water in Fahrenheit","the last two digits of the year Franklin D. Roosevelet went into office",
        "Paul Pierce's jersey number in celtics","the jersey number of Kevin Durant","the number of total possibilities of two different dice rolls",
        "the number of plays William Shakespeare is thought to have written","the Great Pyramid was the tallest man-made structure for ____ hundreds of years","the last two digits of the year the Great Depression ended",
        "the only temperature that is the same in both Fahrenheit and Celsius","the last two digits of the year Pearl Harbor got attacked","the number of US gallons in a barrel",
        "the George W. Bush is the __rd President of the United States","the international dialling code for Britain","the height of the Mausoleum at Halicarnassus in meters",
        "the last two digits of the year the Baby Boom started","the last two digits the Cold War started","the last two digits of the year the first Arab-Israel War was fought",
        "the last two digits of the year Communist leader Mao Zedong establishes the People's Republic of China","the number of states in the US","the digits of the most seculded and protected area in US",
        "the atomic number of Tellurium","the amount of human mass that is water","the last two digits of year of the Brown v. Board of Education case","the last two digits of the year the Vietnam War Started"
        ,"the Leaning Tower of Piza is about __ metres tall","the last two digits of the year the Space Race started","the age of Barbie","the number of stellations of an icosahedron","the number of years the Chinese believe to be a full life cycle",
        "the last two digits of the year the Civil War started","the age Louis Pasteur developed the first rabies vaccination","the number of years of Queen Elizabeth","the last two digits of the year the Baby Boom ended",
        "the last two digits of the year the Civil War ended","the most famous highways called U.S. Route __",
        "the last two digits of the Six-Day War in Israel","the number of moons Jupiter has","the last two digits of the year Armstrong and Aldring landed on the moon",
        "the last two digits of the year African Americans coudl vote in the U.S.",
        "the percentage of Earth that is water",
        "the year the constructuction of the Colosseum was started","the width of the Hagia Sophia","the last two digites of the year of the Watergate Scandal","the last two digits of the year the Vietnam War ended",
        "the last two digits of the year Apple was founded","the age of John Glenn, who was the oldest to go to space","the boiling point of ethyl alcohol","the atomic number for gold",
        "the Lighthouse of Alexandria was first constructed in 2__BC","the last two digits of the year Ronald Reagan went into office","the length of the Hagia Sophia",
        "the last two digits of the year the Revolutionary War ended","the name of a famous book that is called 19__",
        "the last two digits of the year Gorbachev comes into power in the USSR","the last two digits of the year of the Chernobyl Disaster","the last two digits of the year the US Constitution was signed",
        "the Great Wall of China is __50 kilometers long","the last two digits of the year the Berlin Wall was destroyed","the last two digits of the year Nelson Mandela is released from prison",
        "the last two digits of the year the Cold War ended","in binary it is 1011100","number greater than 90 and less than 99 where the second digit is divisible by the first","the last two digits of the year of the Rwanda Genocide","the number of theses Martin Luther wrote","the number in which if the first digit was flipped you would get the second digit" ,"prime number greater than 95","the number of the first windows software released","Find the sum of numbers 1-11 and flip the sum over y-axis."]
        var tenHints = ['the amount of dirt in a 2 by 2 by 2 hole', 'the month of new years',
        ' the number of nukes sent to Japan', 'the number of musketeers in the historical novel',
        'the month of april%apos;s day', 'the amount of guys in a burger and fries resteraunt'
        ,'the number of vertices in the star of david','the number of sins', 'the lucky number in most asian countries'
        ,'the way to say no in German',"the last digits of the year that Giovanni Verrazano discovers the New York Bay"]
  var tenHints = ['the amount of dirt in a 2 by 2 by 2 hole', 'the month of new years',
        ' the number of nukes sent to Japan', 'the number of musketeers in the historical novel',
        'the month of april%apos;s day', 'the amount of guys in a burger and fries resteraunt'
        ,'the number of vertices in the star of david','the number of sins', 'the lucky number in most asian countries'
        ,'the way to say no in German',"the last digits of the year that Giovanni Verrazano discovers the New York Bay",""]
  /*count will keep track of how many times the player is inputting a value to make sure they don't exceed a number of tries*/
  var count = 0;
  var n = prependZeros(randomThousands(),4);
  var num = arrayToNum(n);
  var user = 0;
  var l=0;
  var userArray = [];
  var wins=0;
  var losses=0;
  var guesses=0;
  var timesPlayed=0;
  var wordBox = ["first", "second", "third", "fourth"];
        //changes
  document.getElementById('txt').innerHTML= num;
  
   function prependZeros(numb,len){
            if (typeof numb === "number"||Number(numb)) {
                numb = numb.toString();
                if (numb.length == len) {
                    return numb.split('');
                }
                else {
                    var res = [];
                    var zeros = len-num.length;
                    for (i=0;i<zeros;i++){
                        res.push('0');
                    }
                    for (i=0;i<num.length;i++){
                        res.push(num[i]);
                    }
                    return arrayToNum(res)
                }
            }
        }
        //divisible by a number
        function divisibleNorm() {
            var vals = oneNumtoFour();
            var div = Math.floor((Math.random()*9)+1);
            for (;num[vals]%div!=0;){
                var div = Math.floor((Math.random()*9)+1);
            }
            word = wordBox[vals];
            
            return "the " + word + " digit is divisible by " + div;  


        }
        //divides a number by a random number and gets its remainder
        function remainderNorm() {
            var vals = oneNumtoFour();
            var div = Math.floor((Math.random()*9)+1);
            var remainder = num[vals]%div;
            word = wordBox[vals];
            
            return "the remainder of " + word + " digit divided by " + div + " is " + remainder;
        }
        //divides a number by another number in the 4 digit sequence and gives its remainder
        function remainderFun() {
            var val1 = oneNumtoFour();
            var val2 = Math.floor(Math.random()*4);
            for (;val1==val2;){
                var val2 = Math.floor(Math.random()*4);
            }
            var remainder = num[val1]%num[val2];
            var word1 = wordBox[val1];
            var word2 = wordBox[val2];
            return "the "+word1+" digit divided by "+word2+" results in a remainder of "+remainder;
        }
        //gives the mean of 2 numbers
        function hintmean() {
            var val1 = oneNumtoFour();
            var val2 = Math.floor(Math.random()*4);
            for (;val1==val2;){
                var val2 = Math.floor(Math.random()*4);
            }
            var mean = (num[val1]+num[val2])/2;
            var word1 = wordBox[val1];
            var word2 = wordBox[val2];
             return "the mean of the "+word1+" and "+word2+" is equal to "+ mean;
        }
        //gets an index of the input that is incorrect
        function oneNumtoFour() {
            var vals = Math.floor((Math.random()*4));
            for (;userArray[vals]==num[vals];) {
                vals = Math.floor((Math.random()*4));
            }
            return vals;
        }
        //gets the word of the corresponding index
        function words() {
            var vals = oneNumtoFour();
            return wordBox[vals];

        }
        //gives hint how far a digit is from the actual
        function hintfar() {
            var vals = oneNumtoFour();
            var word = wordBox[vals];
            
            var distance = userArray[vals]-num[vals];
            if (distance<0) {
                var distance = Math.abs(Math.floor(distance));
            }
            else {
                var distance = Math.abs(Math.ceil(distance));
            }
            return "The " + word + " digit is " + distance + " away from the real number";
        }
        //gives a hint from the tens array
        function hintTens() {
            var vals = oneNumtoFour();
            var word1 = wordBox[vals]; 
            return "The " + word1 +" digit is " + tenHints[num[vals]];

        }
        //gives a hint from the hundreds array
        function hintHundreds() {
            var val1 = oneNumtoFour();
            var val2 = Math.floor(Math.random()*4);
            for (;val2==val1;) {
                var val2 = Math.floor(Math.random()*4);
            }
            var word1 = wordBox[val1];
            var word2 = wordBox[val2];
            return "The " + word1 + " and " +  word2 + " digit is " + hundredHints[num[val1]+num[val2]];
        }

        /*used to allow user to press enter*/
        function enter(e) {
        var input = document.getElementById('userInput').value;
        document.getElementById('test').innerHTML = input;
        if (document.getElementById('userInput').value.length!=4){
            return false;
        }

		if (!e) e = window.event;
   	 		var keyCode = e.keyCode || e.which;
    	if (keyCode == '13'){
			sub();  
			return false;
    
        }
        }
	
        function hint(){
			if(mode=="norm"){
			document.getElementById("hints").addEventListener("click",combine1);
            }
			if (count == 1){
				
				var p=hintfar();
				if(p==null){
				p="n";
				}
                document.getElementById('hint').innerHTML= p;
				if(mode=="norm"){
				document.getElementById("hint"+count).innerHTML= count+") "+p;
	
				}
				
            }
            else if (count < 4){
				var p=hintHundreds();
				if(p==null){
				p="n";
				}
                 document.getElementById('hint').innerHTML= p;
				 if(mode=="norm"){
					 
				document.getElementById("hint"+count).innerHTML= count+") "+p;
		
				}
			
            }
            else if (count < 5){
				var p=hintTens();
				if(p==null){
				p="n";
				}
                 document.getElementById('hint').innerHTML= p;
				 if(mode=="norm"){
				document.getElementById("hint"+count).innerHTML= count+") "+p;
				}
			
            }
            else if (count < 6){
				var p=divisibleNorm();
				if(p==null){
				p="n";
				}
                 document.getElementById('hint').innerHTML= p;
				 if(mode=="norm"){
				document.getElementById("hint"+count).innerHTML= count+") "+p;
				}

            }
            else if (count < 7) {
				var p=remainderFun();
                 if(p==null){
				p="n";
				}
				 document.getElementById('hint').innerHTML= p;
				 if(mode=="norm"){
				document.getElementById("hint"+count).innerHTML= count+") "+p;
				}
	
            }
            else if (count < 8) {
				var p=remainderNorm();
                 if(p==null){
				p="n";
				}
				 document.getElementById('hint').innerHTML= p;
				if(mode=="norm"){
				document.getElementById("hint"+count).innerHTML= count+") "+p;
				}

            }
            else if(count < 9){
			
				var p=hintmean();
				if(p==null){
				p="n";
				}
				document.getElementById('hint').innerHTML= p;
				if(mode=="norm"){
				document.getElementById("hint"+count).innerHTML= count+") "+p;
				}
	
            }else{
			document.getElementById("hints").removeEventListener("click",combine1);
			}
			
            
        }
		function green(){
			for (z=1; z<5; z++){
				document.getElementById("c"+z).style.backgroundColor="green";
				}
		document.getElementById("title").style.color="green";
		document.getElementById("scoreboard").style.color="green";
		}
		
		function red(){
		for (z=1; z<5; z++){
			document.getElementById("c"+z).style.backgroundColor="red";
			}
		document.getElementById("title").style.color="red";
		document.getElementById("scoreboard").style.color="red";
		}
		

        function sub(){ 
            var input = document.getElementById('userInput');
            user = input.value;
            userArray = prependZeros(user,4);
            if (user === num && l>1){
                document.getElementById('amazing').innerHTML = "GOOD JOB!!! You actually guessed the passcode correctly.";
				clearInterval(n);
				green();
				wins++;
				timesPlayed++;
				guesses=0;
				end();
		}else{
                count++; 
				guesses++;
                hint();
				l--;
				document.getElementById("b").innerHTML=l;
				if (mode=="norm"){
					if(count==8){
				document.getElementById("hint").innerHTML="No more tries left.";
				losses++;
				timesPlayed++;
				clearInterval(n);
				red();
				end();
				}
				}else{
					if(count==5){
				document.getElementById("hint").innerHTML="No more tries left.";
				losses++;
				timesPlayed++;
				red();
				end();
				}
				}
				if(l<1){
				l=1;
				}
			}

        }
      
		
		function average(numbers){
		var total = 0;
		for(var i = 0; i < numbers.length; i++) {
			total += numbers[i];
		}
		var avg = total / numbers.length;
		return Math.round(10*avg)/10;
		}
		
		function median(numbers){
		var median = 0,
        numsLen = numbers.length;
		numbers.sort();
		if (numsLen % 2 === 0) { // is even
			// average of two middle numbers
			median = (numbers[(numsLen / 2) - 1] + numbers[numsLen / 2]) / 2;
		} else { // is odd
			// middle number only
			median = numbers[(numsLen - 1) / 2];
		}
		return median;
	}
		/*the g array will hold the list of the amount of guesses per game when the user continues on. However the data will erase if refreshed*/
		var g = [];
		function end(){
			g.push(guesses);
			document.getElementById("userInteraction").style.display="none";
			document.getElementById("scoreboard").style.display="inline";
			document.getElementById("retry").style.display="inline";
			
			document.getElementById("retry").addEventListener("click",cont);
			document.getElementById("r").innerHTML=timesPlayed;
			document.getElementById("wins").innerHTML=wins;
			document.getElementById("loss").innerHTML=losses;
			document.getElementById("med").innerHTML=median(g);
			document.getElementById("avg").innerHTML=average(g);
			/*this is necessary so that when the scoreboard is shown the user can't submit anymore responses*/
			document.getElementById("userInput").disabled = true;
			document.getElementById('amazing').innerHTML = "";
			guesses=0;
		}

        function randomThousands(){
            var s = Math.floor((Math.random()*9000)+1000);
            return s;
        }
        function arrayToNum(array){
            var res = ""
            for (i=0;i<array.length;i++){
                res+= array[i];
            }
            return res;
        }

  
  var mode="";
  /*this function will will make sure that the user can't start the game without picking difficulty*/
  function foo(){
  if (mode!="norm" && mode!="hard"){
    document.getElementById('comment').style.color="white";
  }else{
	document.getElementById('comment').style.color="black";
	/*when the user enters the game, certain things will be pre-initialized such as the number of tries remaining*/
	if(mode=="norm"){
	l=8;
	document.getElementById("b").innerHTML=l;
	first();
	}else{
	document.getElementById("hints").removeEventListener("click",combine1);
	l=5;
	document.getElementById("b").innerHTML=l;
	/*when everything is set up, the user interface will show up and other things will initialize*/
	first();
	}
  }
  }
  
  /*this function refers to the initailization of the main game interface*/
  function first(){
  document.getElementById("stat").style.display="none";
  document.getElementById("begin").style.display="none";
  document.getElementById("hello").style.display="none";
    document.getElementById("mode").style.display="none";
	document.getElementById("diff").style.display="none";
	document.getElementById("comment").style.display="none";
	document.getElementById("userInteraction").style.display="inline";
	document.getElementById("userInput").disabled = false;
  }
  
	/*the change funciton is used so that when user clicks on one of the diffuculty, that will be shaded while the other won't, kind of like a toggle*/
  function change(name){
  if(name=="norm"){
  document.getElementById(name).style.padding="2px 2px 2px 4px";
   document.getElementById(name).style.color="white";
  document.getElementById(name).style.backgroundColor="red";
   document.getElementById('hard').style.color="";
  document.getElementById('hard').style.backgroundColor="";
  document.getElementById('diff').innerHTML="DIFFICULTY: NORMAL";
  mode="norm"
  
  }else{
    document.getElementById(name).style.padding="2px 2px 2px 4px";
   document.getElementById(name).style.color="white";
  document.getElementById(name).style.backgroundColor="red";
   document.getElementById('norm').style.color="";
  document.getElementById('norm').style.backgroundColor="";
    document.getElementById('diff').innerHTML="DIFFICULTY: HARD";
	mode="hard";
  }
}
  
  /*this function will be used by the back button which is a span element*/
  function back(){
  document.getElementById("stat").style.display="inline";
  document.getElementById("begin").style.display="inline";
    document.getElementById("hello").style.display="inline";
  document.getElementById("scoreboard").style.display="none";
  document.getElementById("mode").style.display="inline";
	document.getElementById("diff").style.display="inline";
	document.getElementById("comment").style.display="inline";
	for(i=1; i<9; i++){
  document.getElementById("hint"+i).innerHTML="";
  document.getElementById('hint').innerHTML="";
  if(mode=="norm"){
	l=8;
	}
	else {
	l =5;
	}
  }
  count=0;
  n = prependZeros(randomThousands(),4);
  num = arrayToNum(n);
  user = 0;
  document.getElementById('userInput').value = "";
  }
  
  /*this will be used for the other button that will allow the user to continue or retry the game without losing data*/
  function cont(){
  for(i=1; i<9; i++){
  document.getElementById("hint"+i).innerHTML="";
  }
document.getElementById("userInput").disabled = false;
var n = setInterval(changeColor,600);
  allhints="";
  first();
  count=0;
  n = prependZeros(randomThousands(),4);
  num = arrayToNum(n);
  user = 0;
  document.getElementById('userInput').value = "";
  document.getElementById('test').innerHTML = "";
  if(mode=="norm"){
  l=8;
  document.getElementById("b").innerHTML=l;
  }else{
  l=5;
  document.getElementById("b").innerHTML=l;
  }
  document.getElementById("scoreboard").style.display="none";
  document.getElementById("hint").innerHTML="Try to take less guesses for the passcode.";
  }
  
  /*when the user clicks on the stat option in the menu, it will change everything so that user can see how the scoreboard looks like*/
  function fade(){
  document.getElementById("stat").style.display="none";
  document.getElementById("begin").style.display="none";
  document.getElementById("hello").style.display="none";
    document.getElementById("mode").style.display="none";
	document.getElementById("diff").style.display="none";
	document.getElementById("comment").style.display="none";
  document.getElementById("scoreboard").style.display="inline";
  }
  
  /*used so when hint is clicked on, the text inside the box will change and the box will pop out*/
  function combine1(){
  initiateClick(63);
  changeHints();
  }
  
  /*this will trigger the ? button and change the text accordingly*/
  function combine2(){
  initiateClick(69.5);
  changeQuest();
  }
  
  /*this will trigger the about us and change text*/
  function combine3(){
  initiateClick(69.5);
  changeAbout();
  }
 
 /*this will change text to ongoing hints*/
 function changeHints(){


 for(i=1;i<9;i++){
	 document.getElementById("hint"+i).style.display="";
 }
	document.getElementById("par").innerHTML="";
	document.getElementById("small").style.fontFamily="pixel";
	document.getElementById("hint1").style.fontSize="";
 }
 
 /*this will change text to answer any general questions*/
 function changeQuest(){
	 for(i=1;i<9;i++){
	 document.getElementById("hint"+i).style.display="none";
	 
 }
 var w="<b>QUESTION</b><br><br>Here you will find any general information you may be <br>wondering about. To start off, this sub header you see <br>here contains three things, the hints, answers to general <br>questions, and a little bit about ourselves. Under hints <br>you'll find all the hints you've been given so far. In this <br>game there are two modes, normal or hard, which you have <br>to pick from. You will be given 8 tries in the normal and 6 <br>tries in the hard. For every try you get wrong, a hint will <br>be given. At the end of the game you will see your stats <br>and will be allowed to try again. Note that if you don't try <br>again, all your data or stats WILL BE LOST! ";
  document.getElementById("par").innerHTML=w;
  	document.getElementById("par").style.fontSize="70%";
 }
 
 /*when this section is clicked on, the text will change to about us*/
 function changeAbout(){
	 for(i=1;i<9;i++){
	 document.getElementById("hint"+i).style.display="none";
	 
 }
 var st="<b>KEVIN MAI-</b><br><br>Hi! Working with the whole team of just one <br>other (Imtiaz Rahman) was a great experience. <br>By working on this project I was able to put forth the <br>best algorithms to make this possible. With a lot of <br>trial/error, battery charge, as well as preserving a <br>minimilistic design, we have produced this game. Of course, <br>without the help of Imtiaz this journey would never be possible. <br>Both of us strived for the best and this is the result."
  var it="<br><br><b>IMTIAZ RAHMAN-</b><br><br>As Steve Jobs said, design isn't just how it looks, but how <br>it works. We have tried to not only make this a very <br>intuitive design, but at the same time tried to make even <br>the smallest thing functional. By doing so, we are able to <br>give the user many degrees of freedom. My partner Kevin <br>Mai has been an innovator in this endeavor. Both of us <br>have attempted to bring functionality and intuition <br>together to create this game, The Passcode Game."
  document.getElementById("par").innerHTML=st+it;
  	document.getElementById("hint1").style.fontSize="70%";
 }
 
 /*puts the small box back into place*/
 function retract(){
	if (pull=true){
	 document.getElementById("small").style.marginLeft="200%";
	 pull=false;
 }

 }

 /*this is used so that when any of the button are clicked, it will trigger the box to come out*/
 function initiateClick(a){
	if (pull==false){
	document.getElementById("area").addEventListener("click",show(a));
	
	pull=true;
	}else{
	document.getElementById("area").removeEventListener("click",show(a));

	}
	}
	
	/*it will bring out the small text box from the side*/
  function show(a){
   document.getElementById("small").style.marginLeft=a+"%";
  }
  
  function showH(){
   document.getElementById("small").style.marginLeft="65%";
  }
  /*generates random number*/
  function randnum(lower,upper){
		return Math.floor(Math.random() * upper);//note that the upper is exclusive and lower inclusive
	}
	
	/*forces the boxes to go down right after they go up*/
  function hide(){
	for (t=1; t<5; t++){
		document.getElementById("v"+t).style.height="88%";
		}
  }
  
  var color=["darkblue","ghostwhite","red","teal","pink","wheat","turquoise"]
  var q=color[randnum(0,7)]
  /*this will change the color of the bars randomly*/
  function changeColor(){
		var q=color[randnum(0,7)]
		for (z=1; z<5; z++){
			document.getElementById("c"+z).style.backgroundColor=q;
		}
		document.getElementById("title").style.color=q;
		document.getElementById("hello").style.color=q;
		document.getElementById("scoreboard").style.color=q;
		document.getElementById("diff").style.color=q;
  }
  
  /*used for creating the jumping or moving sound bars*/
  function visual(){
		for (i=1; i<5; i++){
		document.getElementById("v"+i).style.height=randnum(33,99)+'%';
		}
		}
	
  

	var m=setInterval(visual,600);
	var n=setInterval(changeColor,600);
	var b=setInterval(hide,700);