var mtb;
var mrows;
var mcells;
var mtab;
var inbn="<img src='../../mOthers/02/005.gif' onclick='mclk()'/>";
var audio;
var audios='<audio id="audio" controls="controls" style="margin-left:auto;margin-right:auto;opacity:1;display:none" preload="auto" autoplay="autoplay" loop="true" volume="100%" /><source src="" type="audio/mpeg">your browser does not support html5 audio.</audio>';
var video;
var videos='<video id="audio" controls="controls" style="margin-left:auto;margin-right:auto;opacity:1;" preload="auto" autoplay="autoplay" loop="true" volume="100%" width="640" height="410"/><source src="">your browser does not support html5 video.</video>';
var mroot="../../mOthers/02/";
var mnxt=0;
var mcur=0;
var murl="";
var mtotal=0;
var mcurrenttime=0;
var imgrotate;
window.onload=function(){
imgrotate=document.getElementById("imgrotate");
mtb=document.getElementById("mtaby");
mtab=document.getElementById("mtab");
audio=document.getElementById("saudio");
audio.innerHTML=audios;
audio=document.getElementById("audio")
audio.loop=false;
audio.addEventListener("ended", function(){clsg();rndsg();},false);
audio.addEventListener("play", function(){mtotal=audio.duration;mcurrenttime=0;rfrh();},false);
audio.addEventListener("timeupdate", function(){mtotal=audio.duration;mcurrenttime=audio.currentTime;rfrh();},false);
inits();
rndsg();
callme();
}

function rfrh(){
try{
mtab.rows[mcur].cells[2].innerText=getTimes(mtotal);
mtab.rows[mcur].cells[3].innerText=getTimes(mcurrenttime);
mtab.rows[mcur].cells[4].innerText=getTimes(mtotal-mcurrenttime);
}
catch(ex){}
}


function clsg(){
try{
mtab.rows[mcur].cells[0].innerHTML="";
mtab.rows[mcur].cells[2].innerText="";
mtab.rows[mcur].cells[3].innerText="";
mtab.rows[mcur].cells[4].innerText="";
}
catch(ex){}
}

function rndsg(){
try{
mcur=getRandom(0,songs.length-1);
murl=mroot + index[mcur] + postfixs[mcur];
audio.src=murl;
var rc=document.getElementById(index[mcur]);
var rr=parseInt(rc.getAttribute("mrow"))+1;
mtab.rows[rr].cells[0].innerHTML=inbn;
mcur=rr;
}catch(ex){}
}

function mclk(){if (audio.paused==true){audio.play();}else{audio.pause();};}
function dclk(){try{if (audio.paused==true){audio.play();}else{audio.pause();};}catch(e){}}

function callme(){
//alert(songs.length);
//alert(index.length);
//alert(postfixs.length);
//alert(types.length);
//alert(artists.length);
var rl=mtab.rows.length;
for (var i=1;i<rl;i++){
//var rc=mtab.rows[i].cells[1].getAttribute("artists");
//var rc=mtab.rows[i].cells[1].getAttribute("id");
//rc=mtab.rows[i].cells[0].innerHTML=inbn;
//alert(rc);
}
}

function inits(){
try{
for(var i=0;i<songs.length;i++){
mrows=document.createElement("tr");
mtb.appendChild(mrows);
mcells=document.createElement("td");
mcells.innerText="";
mcells.innerHTML="";
mrows.appendChild(mcells);

mcells=document.createElement("td");
mcells.innerText=songs[i];
mcells.setAttribute("id",index[i]);
mcells.setAttribute("postfixs",postfixs[i]);
mcells.setAttribute("types",types[i]);
mcells.setAttribute("artists",artists[i]);
mcells.setAttribute("mrow",i);
mcells.onclick=function(){getColumnDetail(this)}; 
mcells.style.textAlign="left";
mrows.appendChild(mcells);

mcells=document.createElement("td");
mcells.innerText="";
mrows.appendChild(mcells);

mcells=document.createElement("td");
mcells.innerText="";
mrows.appendChild(mcells);

mcells=document.createElement("td");
mcells.innerText="";
mrows.appendChild(mcells);

} 
}catch(ex){}

}
function getColumnDetail(column){
//alert(column.getAttribute("id"));
clsg();
try{
mcur=parseInt(column.getAttribute("mrow"));
murl=mroot + index[mcur] + postfixs[mcur];
try{
audio.pause();
}catch(ey){}
audio.src=murl;
audio.play
var rc=document.getElementById(index[mcur]);
var rr=parseInt(rc.getAttribute("mrow"))+1;
mtab.rows[rr].cells[0].innerHTML=inbn;
mcur=rr;
}catch(ex){}
}

function getTimes(time){
	var hour=time/3600;
	var hours=parseInt(hour);
	if (hours<10){hours="0" + hours;};
	var other = time % 3600;
	var minute = other / 60;
	var minutes = parseInt(minute);
	if (minutes < 10) {minutes = "0" + minutes;};
	var second = time % 60;
	seconds = parseInt(second);
	if (seconds < 10) {seconds = "0" + seconds;};
	var allTime ="" +hours+ ":" + "" + minutes + "" + ":" + "" + seconds + "";
	return allTime;
}

function getRandom(num1,num2){
	switch(arguments.length){
		case 1:
			return Math.floor(Math.random()*arguments[0]+1); break;
		case 2:
			var min = arguments[0],max = arguments[1];
			if(arguments[0]-arguments[1]>0){
				min = arguments[1];
				max = arguments[0];}

			return Math.floor(Math.random()*(max-min+1) + min);break;
		default: return 0;break;}
}

