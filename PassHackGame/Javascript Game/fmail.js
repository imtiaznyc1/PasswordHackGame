/*function will be used to expand the full message*/
function showMess(){
	var p=document.getElementById('message');
	var s=document.getElementById('fullmess');
	var t=document.getElementById('inbox');
	/*hides the mini title of the message*/
	p.style.display="none";
	s.style.display="block";
	t.innerHTML="Inbox";
}

/*allows me to change the state of things when message comes. For instance, the inbox will show 1 and the storage will increase in number
to make it look responsive*/
function getNotif(){
	var audio = new Audio('bell.mp3');
	var s=document.getElementById('inbox');
	var t=document.getElementById('stor');
	var p=document.getElementById('message');
	s.innerHTML="Inbox (1)";
	t.innerHTML="Amount of storage used: 0.5 MB";
	p.style.opacity=1;
	p.style.fontWeight="bold";
	p.style.fontSize="20px";
	p.style.fontStyle="normal";
	p.innerHTML="Gleb Fomin - donotreply@PupilpathGradeIssues";
	audio.play();
	p.addEventListener("click",showMess);
}
/*executes the method after 4000 milliseconds or 4 seconds*/
setTimeout(getNotif,4000);