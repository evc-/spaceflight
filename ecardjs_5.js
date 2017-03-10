//Ecard Script

var ids = ["vostok", "speech_bubbles", "spiral", "race_flag", "tvset", "challenger", "female_ships", "spacewalk", "astro", "iss", "seven_planets", "sputnik"];

var idsFound = ["found_vostok", "found_speech", "found_spiral", "found_flag", "found_footprint","found_challenger", "found_femaleship", "found_spacewalk", "found_astro", "found_iss", "found_sevenplanets"];

var objects = []; 

var facts = ["On April 12 1961, an astronaut from the USSR named Yuri Gagarin became the first human to travel to outer space.", 
			 
"Gagarin orbited the Earth one full time on the Vostok 1 spaceship. From launch to landing, it took 108 minutes. At the time of launch, the Chief Designer, Sergei Korolev said, \"We wish you a good flight. Everything is all right.\" Instead of the formal command he was meant to reply with, he used the Russian expression for \"Let's go!\"",
			
"\"International Day of Human Space Exploration\" was declared in 2011 by the UN General Assembly to remember the first human space flight and to promote the exploration and use of outer space for peaceful purposes and to the benefit of humankind.",
			
"The \"Space Race\" of the 1960s was a competition between the USSR and the United States to beat the other into space and prove themselves as supreme powers in spaceflight capabilities. It was kicked off with the first satellites sent into space by the USSR, Sputnik and Sputnik 2. It was catalysed with Gagarin's journey.",
			
			
"Although both the USSR and the USA had numerous victories, most consider the Space Race won by the USA and concluded with Neil Armstrong's first steps on the moon in 1969. Over a billion people watched this historic event on TV.",
			
"The Space Race was not all about victories - the rush to beat the other country into space came with tragedies. The USA Challenger mission disaster was one of the worst, with 7 fatalities due to cold weather and material failure. However, the root issue was politual pressure resulting in rushed engineering and disregarded safety measures.", 
			
"The first woman in space was a USSR astronaut and former civilian parachutist named Valentina Tereshkova. She entered orbit on June 16, 1963 on board the Soviet mission Vostok 6. Sally Ride was the first American austronaut in space, twenty years and 2 days later.", 
			 
"In 1965, Alexey Leonov conducted the first spacewalk. He was outside the Voshhod 2 spacecraft for 12 minutes, connected by a tether. In the vaccuum of space, his suit became inflated, so much that he couldnt back fit inside the complicated airlock system. Knowing that his spacewalk was a political accomplishment and message, he didn't relay his problem to ground control. Instead, he opened a value to release some of the suits pressure, and squeezed back inside.",
			 
"In the 55 years since Gagarin's orbit around the Earth, 536 individuals have voyaged into space.",
			 
"Today, the International Space Station is the largest artificial body in orbit. As of Feb 20th, it's been occupied by humans for 16 years, 3 months, and 18 days - The longest human presence in space.",
			 
"On 22 February 2017, astronomers from NASA's Spitzer Science Center announced that they had found \"seven, rocky, Earth-sized planets that could potentially have liquid water, orbiting around a very nearby, cold, small star.\" The planetary system is called Trappist-1. Elon Musk of SpaceX envisions human settlements with over a million people on Mars by the 2060s.<br> What do you think the future of human space travel holds?",
			 
"\"I am confident that the International Day of Human Space Flight will remind us of our common humanity and our need to work together to conquer shared challenges. I hope it will also inspire young people in particular to pursue their dreams and move the world towards new frontiers of knowledge and understanding.\" - Secretary-General Ban Ki-moon",
			 
"\"Nothing will stop us. The road to the stars is steep and dangerous. But we're not afraid . . . Space flights can't be stopped. This isn't the work of one man or even a group of men. It is a historical process which mankind is carrying out in accordance with the natural laws of human development.\" - Yuri Gagarin",
			
"The Challenger Disaster may have shocked the nation, but it was not suprising to a team of engineers who worked on the launch. The morning of the launch, engineer Bob Ebeling said \"The Challenger's going to blow up. Everyone's going to die.\" <br><br> Sections of the rockets filled with expolsive propellant would pull apart slightly with the force of takeoff. Rubber O-rings lined these joints to provide a seal. In earlier tests, cold weather made the O-rings stiff, and prone to breakage and expolsive leakage. The launch morning was colder than any other tests. Ebeling and four other engineers tried desperately to stop the launch, but they were overruled by NASA and their managers.<br> <a href= \"http://www.wnyc.org/story/30-years-after-disaster-challenger-engineer-still-blames-himself/\" target=\"_blank\">Listen to an interview with Ebeling here.</a> "];

var challengerVictims = ["Francis R. Scobee, Commander",
			 
"Michael J. Smith, Pilot",
			 
"Ronald McNair, Mission Specialist",
			 
"Ellison Onizuka, Mission Specialist",
			 
"Judith Resnik, Mission Specialist",
			 
"Gregory Jarvis, Payload Specialist",
			 
"Christa McAuliffe, Payload Specialist, Teacher"];

var polygons =[document.getElementById("star1"), document.getElementById("star2"),document.getElementById("star3"),document.getElementById("star4"),document.getElementById("star5"),document.getElementById("star6"),document.getElementById("star7")];

var factBox = document.getElementById("factbox");

factBox.innerHTML = "April 12 is \"International Day of Human Space Flight\"! <br>Start with the top star and click clockwise to learn about humans in space.";

	function hide(id){
		document.getElementById(id).style.display = "none";
	}

	function show(id){
		document.getElementById(id).style.display= "block";
	}
	
	function move(objects, x, y){
		objects.style.transform = "translate(" + x + "px," + y + "px)";
		objects.style.transition = "all 2s";
	}

	function moveID(id, x, y){
		document.getElementById(id).style.transform = "translate(" + x + "px," + y + "px)";
		document.getElementById(id).style.transition = "all 2s";
	}

	function scaleUp(objects, x, y, factor){
		objects.style.transform = "translate(" + (x *(1-factor)) + "px" + "," + (y *(1-factor)) + "px" + ") scale(" + factor + ")";
		objects.style.transition = "all 1s";	
	}

	function scaleUpID(id, x, y, factor){
		document.getElementById(id).style.transform = "translate(" + (x *(1-factor)) + "px" + "," + (y *(1-factor)) + "px" + ") scale(" + factor + ")";
		document.getElementById(id).style.transition = "all 1s";
	}


	function factDisplay(factChoose){
		factBox.innerHTML = factChoose;
	}

	function challengerDisplay(challengerVictims){
		factBox.innerHTML = challengerVictims;
	}

//AUDIO FUNCTIONS

var yurispeech = document.getElementById("yuri");

yurispeech.addEventListener("click", function(){
	var audio = new Audio('poyekhali.ogg');
	audio.play();
})

var audioPlayButton = document.getElementById("audiobutton");
var audioMuteContainer = document.getElementById("audiomute_container");

function playAudio(){
	audioPlayButton.src = "spacelab.mp3";
	audioPlayButton.play();
	hide("audioplay_container");
	show("audiomute_container");
}

function muteAudio(){
	audioPlayButton.pause();
	hide("audiomute_container");
	show("audioplay_container");
	
}



//function createAstro (x,y, h, w){
//	var astroDIV = document.createElement("DIV");
//	astroDIV.innerHTML = astroSVG;
//	astroDIV.style.left = x + "px";
//	astroDIV.style.top = y + "px";
//	astroDIV.style.height = h + "px";
//	astroDIV.style.width = w + "px";
//	astroDIV.style.position = "fixed";
//	astroDIV.style.backgroundColor = "red";
//	astroAppend.appendChild(astroDIV);
//}

//function createAstro(){
//
//	var astroAppend = document.getElementById("astro");
//	
//  var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
//	
//	svg.setAttribute('style', 'border: 1px solid black');
//	svg.setAttribute('width', '600px');
//	svg.setAttribute('height', '250px');
//	svg.setAttribute('position', 'absolute');
//	svg.setAttribute('left', '100px');
//	svg.setAttribute('top', '200px');
//	svg.setAttribute('id', 'astrosvgid');	svg.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");
//	document.body.appendChild(svg);
//}


//createAstro(100, 500, 69.32, 100.51);
//	console.log(createAstro);

//function createAstro(){
//	var astroAppend = document.getElementById("astro");
//	var astroNew = astroAppend.cloneNode(true);
//	astroNew.setAttribute = 
//	console.log(astroNew);
//}


//	function getRandomInt(min, max) {
//    	return Math.floor(Math.random() * (100 - 50 + 1)) + 50;
//		}


var astroExist = document.getElementById("astro");
var appendSVG = document.getElementById("mainsvg");

function cloneAstro(x, y){
	var newAstro = astroExist.cloneNode(true);
	newAstro.id = "newastro1";
	newAstro.setAttribute("position", "relative");
	
//	newAstro.setAttribute("top", i);
//	newAstro.setAttribute("left", j);
	
	var move = "translate(" + x +"," + y + ")";
	newAstro.setAttribute("transform" , move);
	console.log(move);
	
	appendSVG.appendChild(newAstro);
}




//START

function start(){
	
	for (var i = 0; i < ids.length; i++){
		hide(ids[i]);
	}
	
	for (var i = 0; i < idsFound.length; i++){
		hide(idsFound[i]);
	}
	
	for (var i = 0; i < ids.length; i++){
		objects[i] = document.getElementById(ids[i]);
		
	}
	
	muteAudio();
	
}

start();

var star1 = document.getElementById("vostokfact"), 
	star2 = document.getElementById("speechfact"),
	star3 = document.getElementById("spiralfact"),
	star4 = document.getElementById("flagfact"),
	star5 = document.getElementById("footprintfact"),
	star6 = document.getElementById("challengerfact"),
	star7 = document.getElementById("femaleshipfact"),
	star8 = document.getElementById("spacewalkfact"),
	star9 = document.getElementById("astrofact"),
	star10 = document.getElementById("issfact"),
	star11 = document.getElementById("sevenfact");

//var factBar = document.getElementById("factbar");

//vostok
star1.addEventListener("click", function (){
	show(idsFound[0]);
	show(ids[0]);
	console.log(ids[0]);
	move(objects[0], 625, -1000);
	factDisplay(facts[0]);
})

document.getElementById("vostok").addEventListener("click", function(){
	factDisplay(facts[12]);
})


//speech
star2.addEventListener("click", function (){
	show(idsFound[1]);
	show(ids[1]);
	hide("yuri");
	factDisplay(facts[1]);
	
	setTimeout(function(){ 
		show("yuri"); }, 500);

})

//spiral
star3.addEventListener("click", function (){
	show(idsFound[2]);
	show(ids[2]);
	hide(ids[0]);
	hide(ids[1]);
	scaleUp(objects[2], 2750, 2350, 4.5);
	factDisplay(facts[2]);
})

document.getElementById("spiral").addEventListener("click", function(){
	factDisplay(facts[11]);
})

//raceflag and sputnik
star4.addEventListener("click", function (){
	show(idsFound[3]);
	show(ids[3]);

	hide(ids[0, 1, 2]);
	console.log(objects[11]);
	factDisplay(facts[3]);

	
    setTimeout(function(){ 
		show(ids[11]);
		moveID("sputnik", 1200, -900);
		var audio = new Audio('comet.wav');
		audio.play();
		audio.volume = 0.2;}, 500);
})

//moon landing
star5.addEventListener("click", function (){
	show(idsFound[4]);
	show(ids[4]);
	hide(ids[0, 1, 2, 3]);
	factDisplay(facts[4]);
	
})

//moon landing video

var tvScreen = document.getElementById("tv_screen");
var tvButton = document.getElementById("tvbutton");
var iframeMoon = document.getElementById("iframemoon");

	tvButton.addEventListener("click", function(){
		
		var tvScreenBound = tvScreen.getBoundingClientRect();

		iframeMoon.style.top = tvScreenBound.top + "px";
		iframeMoon.style.left = tvScreenBound.left + "px";
		iframeMoon.style.right = tvScreenBound.right + "px";
		iframeMoon.style.bottom = tvScreenBound.bottom + "px";
		iframeMoon.style.height = tvScreenBound.height + "px";
		iframeMoon.style.width = tvScreenBound.width + "px";

		show("iframemoon");
	})
	
	
	window.addEventListener("resize", resizeFunction);

	function resizeFunction(){
		
		var tvScreenBound = tvScreen.getBoundingClientRect();

		iframeMoon.style.top = tvScreenBound.top + "px";
		iframeMoon.style.left = tvScreenBound.left + "px";
		iframeMoon.style.right = tvScreenBound.right + "px";
		iframeMoon.style.bottom = tvScreenBound.bottom + "px";
		iframeMoon.style.height = tvScreenBound.height + "px";
		iframeMoon.style.width = tvScreenBound.width + "px";
	}


//challenger
star6.addEventListener("click", function (){
	show(idsFound[5]);
	show(ids[5]);
	hide(ids[0, 1, 2, 3, 4]);
	hide("iframemoon");
	factDisplay(facts[5]);
	
})

document.getElementById("ship").addEventListener("click", function(){
	factDisplay(facts[13]);
})

//show challenger victims

//DO FOR LOOP INSTEAD

console.log(polygons[0]);
console.log(challengerVictims[0]);

polygons[0].addEventListener("click", function(){
	challengerDisplay(challengerVictims[0])
})

polygons[1].addEventListener("click", function(){
	challengerDisplay(challengerVictims[1])
})

polygons[2].addEventListener("click", function(){
	challengerDisplay(challengerVictims[2])
})

polygons[3].addEventListener("click", function(){
	challengerDisplay(challengerVictims[3])
})

polygons[4].addEventListener("click", function(){
	challengerDisplay(challengerVictims[4])
})

polygons[5].addEventListener("click", function(){
	challengerDisplay(challengerVictims[5])
})

polygons[6].addEventListener("click", function(){
	challengerDisplay(challengerVictims[6])
})


//star7.addEventListener("click", function (){
//	show(idsFound[6]);
//	
//	moveID("ussr_ship", 1669, -930);
//	show(ids[6]);
//	hide(ids[0, 1, 2, 3, 4, 5]);
//	hide("american_ship");
//	factDisplay(facts[6]);
//	
//	setTimeout(function(){ 
//		moveID("american_ship", 1669, -930);
//		show("american_ship"); }, 500);
//	
//})

//female ships

star7.addEventListener("click", function (){
	show(idsFound[6]);
	show(ids[6]);
	hide("ussr_ship");
	hide("american_ship");
	hide(ids[0, 1, 2, 3, 4, 5]);
	factDisplay(facts[6]);
	setTimeout(function(){
		show("ussr_ship");
		moveID("ussr_ship",1669, -930);
	
	var audio = new Audio('rocket.wav');
		audio.play();
		audio.volume = 0.2;
	
	}, 500);
	
	setTimeout(function(){
		show("american_ship");
		moveID("american_ship",1669, -930);
	
	var audio = new Audio('rocket.wav');
		audio.play();
		audio.volume = 0.2;
	
	}, 2000);
})

//spacewalk
star8.addEventListener("click", function (){
	show(idsFound[7]);
	show(ids[7]);
	hide(ids[0, 1, 2, 3, 4, 5, 6]);
	move(objects[7], -900, -950);
	factDisplay(facts[7]);
})

document.getElementById("spacewalk").addEventListener("click", function(){
	console.log("clicking");
	var leonov = document.createElement("IMG");
    leonov.setAttribute("src", "firstspacewalk.jpg");
	leonov.setAttribute("id", "leonov");
   	leonov.setAttribute("alt", "First Spacewalk");
	document.body.appendChild(leonov);
})

//astro
star9.addEventListener("click", function (){
	show(idsFound[8]);
	show(ids[8]);
	hide(ids[0, 1, 2, 3, 4, 5, 6, 7]);
	factDisplay(facts[8]);
//	moveID("astro", 0, 900);
	})

document.getElementById("astro").addEventListener("click", function(){
	for (var j = 0; j < 5; j++){
			for (var i = 0; i < 9; i++){
				cloneAstro(i*150, j*175);
				console.log(i);
				console.log(j);
					
			}
		}
	
})

//	
//	setTimeout(function(){
//		for (var j = 0; j < 3; j++){
//			for (var i = 0; i < 3; i++){
//				cloneAstro(i*200, j*300);
//				console.log(i);
//				console.log(j);
//				
//			}
//		}
//		
//	}, 1000);
//	
//	setTimeout(function(){
//		for (var j = 0; j < 3; j++){
//			for (var i = 0; i < 3; i++){
//				cloneAstro(i*-200, j*-300);
//				console.log(i);
//				console.log(j);
//				
//			}
//		}
//		
//	}, 2000);
	
	
	
//	cloneAstro(-200,0);
//	cloneAstro(-400,0);
//	cloneAstro(-600,0);
//		
	
//	setTimeout(function(){
//		for (var j = 0; j < 3; j++){
//			for (var i = 0; i < 3; i++){
//				cloneAstro(i-100, j-100);
//			}
//		}
//		
//	}, 2000);
		
	
//	createAstro();
//	console.log(createAstro);
//	createAstro(100, 500, 69.32, 100.51);
//	console.log(createAstro);


//iss
star10.addEventListener("click", function (){
	show(idsFound[9]);
	show(ids[9]);
	hide(ids[0, 1, 2, 3, 4, 5, 6, 7, 8]);
	move(objects[9], 1400, -850);
	factDisplay(facts[9]);
})


//sevenplanets

//var planet1 = document.getElementById("planet1"),
//	planet2 = document.getElementById("planet2"),
//	planet3 = document.getElementById("planet3"),
//	planet4 = document.getElementById("planet4"),
//	planet5 = document.getElementById("planet5"),
//	planet6 = document.getElementById("planet6"),
//	planet7 = document.getElementById("planet7");

var xPlanet = -1500;
var yPlanet = 100;

star11.addEventListener("click", function (){
	show(idsFound[10]);
	show(ids[10]);	
	hide("newplanets");
	show("newplanetstars");	
	hide(ids[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);		
	factDisplay(facts[10]);

	setTimeout(function(){ 
		moveID("planet1", xPlanet, yPlanet);
		moveID("planet1_star", -100, 2000);
		show("planet1_star");
		}, 100);
	
	setTimeout(function(){ 
		moveID("planet2", xPlanet, yPlanet+70);
		moveID("planet2_star", -100, 1900);
		show("planet2_star");
		}, 200);
	
	setTimeout(function(){ 
		moveID("planet3", xPlanet, yPlanet);
		moveID("planet3_star", -100, 1900);
		show("planet3_star");
		}, 300);
	
	setTimeout(function(){ 
		moveID("planet4", xPlanet, yPlanet);
		moveID("planet4_star", -100, 1900);
		show("planet4_star");
		}, 300);
	
	setTimeout(function(){ 
		moveID("planet5", xPlanet, yPlanet-70);
		moveID("planet5_star", -100, 1600);
		show("planet5_star");
		}, 500);
	
	setTimeout(function(){ 
		moveID("planet6", xPlanet, yPlanet);
		moveID("planet6_star", -100, 1700);
		show("planet6_star");
		}, 600);
	
	setTimeout(function(){ 
		moveID("planet7", xPlanet, yPlanet);
		moveID("planet7_star", -100, 1900);
		show("planet7_star");
		}, 700);
	
})

document.getElementById("planet1_star").addEventListener("click", function(){
	console.log("clicked");
	show("newplanets");	
	hide("newplanetstars")
})

console.log(document.getElementById("seven_planets").getBoundingClientRect());






//purple rain demo
//
//var astros = [];
//
//function setup() {
//  createCanvas(640, 360);
//  for (var i = 0; i < 500; i++) {
//    astros[i] = new Drop();
//  }
//}
//
//function draw() {
//  for (var i = 0; i < 536; i++) {
//    astros[i].fall();
//    astros[i].show();
//  }
//}
//
//function Drop() {
//  this.x = random(width);
//  this.y = random(-500, -50);
//  this.z = random(0, 20);
//  this.len = map(this.z, 0, 20, 10, 20);
//  this.yspeed = map(this.z, 0, 20, 1, 20);
//
//  this.fall = function() {
//    this.y = this.y + this.yspeed;
//    var grav = map(this.z, 0, 20, 0, 0.2);
//    this.yspeed = this.yspeed + grav;
//
//    if (this.y > height) {
//      this.y = random(-200, -100);
//      this.yspeed = map(this.z, 0, 20, 4, 10);
//    }
//  }
//
//  this.show = function() {
//    var thick = map(this.z, 0, 20, 1, 3);
//    strokeWeight(thick);
//    stroke(138, 43, 226);
//    line(this.x, this.y, this.x, this.y+this.len);
//  }
//}




