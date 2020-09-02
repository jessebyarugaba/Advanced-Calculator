function Number(num){
	var answerbox = document.getElementById("top-screen");
	answerbox.innerHTML += num;
}

function getAnswer(){
	var answerplace = document.getElementById("bottom-screen");
	var answerbox = document.getElementById("top-screen").innerHTML;
	var eqn = eval(answerbox);
	answerplace.innerHTML = eqn;
}

function del(){
	var box = document.getElementById("bottom-screen").innerHTML = "0";
}

function erase(){
	document.getElementById("top-screen").innerHTML = "";
	document.getElementById("bottom-screen").innerHTML = "0";
}
erase();

function Sign(signid){
	var answerbox = document.getElementById("top-screen");
	if(signid == "+"){
		answerbox.innerHTML += "+";
	}else if(signid == "-"){
		answerbox.innerHTML += "-";
	}else if(signid == "*"){
		answerbox.innerHTML += "*";
	}else if(signid == "/"){
		answerbox.innerHTML += "/";
	}
}

function Power(num){
	var answerplace = document.getElementById("bottom-screen");
	var answerbox = document.getElementById("top-screen").innerHTML;
	var ans = eval(answerbox);
	var finalanswer = Math.pow(ans,num);
	if(num == 2){
		document.getElementById("top-screen").innerHTML = "sqr(" +ans+ ")";
		answerplace.innerHTML = finalanswer;
	}else if(num == 3){
		document.getElementById("top-screen").innerHTML = "cube(" +ans+ ")";
		answerplace.innerHTML = finalanswer;
	}
	
}

function Misc(input){
	var answerplace = document.getElementById("bottom-screen");
	var answerbox = document.getElementById("top-screen").innerHTML;
	var ans = eval(answerbox);
	if(input == "sin"){
		var finalanswer = Math.sin(ans);
		document.getElementById("top-screen").innerHTML = "sin(" +ans+ ")";
		answerplace.innerHTML = finalanswer;
	}else if(input == "cos"){
		var finalanswer = Math.cos(ans);
		document.getElementById("top-screen").innerHTML = "cos(" +ans+ ")";
		answerplace.innerHTML = finalanswer;
	}else if(input == "tan"){
		var finalanswer = Math.tan(ans);
		document.getElementById("top-screen").innerHTML = "tan(" +ans+ ")";
		answerplace.innerHTML = finalanswer;
	}else if(input == "log"){
		var finalanswer = Math.log(ans);
		document.getElementById("top-screen").innerHTML = "log(" +ans+ ")";
		answerplace.innerHTML = finalanswer;
	}
	else if(input == "exponent"){
		var finalanswer = Math.pow(10,ans);
		document.getElementById("top-screen").innerHTML = "10^(" +ans+ ")";
		answerplace.innerHTML = finalanswer;
	}
}

function decimal(){
	var answerbox = document.getElementById("top-screen");
	answerbox.innerHTML += ".";
}

//the information box functions

function showInfo(){
	document.getElementById("info-tab").style.bottom = "0px";
}

function hideInfo(){
	document.getElementById("info-tab").style.bottom = "-639px";
}


/*
 ---------------------------------------------------
 *Copyright of Byarugaba Jesse 2020©
 *Designed with love
 *Distribute and use anywhere you want
 *Follow me on instagram and github, it motivates me to share more of my simple projects.
 ---------------------------------------------------
 */
