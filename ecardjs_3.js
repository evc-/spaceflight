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
			 
"\"I am confident that the International Day of Human Space Flight will remind us of our common humanity and our need to work together to conquer shared challenges. I hope it will also inspire young people in particular to pursue their dreams and move the world towards new frontiers of knowledge and understanding.\" - Secretary-General Ban Ki-moon"
			 
];

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

var astroSVG = "<g id=\"astro\">\r\n    <g id=\"astro-2\" data-name=\"astro\">\r\n      <rect class=\"cls-16\" x=\"2853.79\" y=\"1634.89\" width=\"99.19\" height=\"93.65\" rx=\"20.47\" ry=\"20.47\"\/>\r\n      <path class=\"cls-13\" d=\"M1512-194.46l-2.72-5.28a9.74,9.74,0,0,0-13.12-4.2l-16.65,8.58a.52.52,0,0,1-.64-.13l-30.06-37.08v-.14h-.11l0,0-.06,0h-62.74a.52.52,0,0,1-.32-.12l-.08-.07a.52.52,0,0,0-.72.08h0a.29.29,0,0,1-.22.11h0a.29.29,0,0,0-.29.29v.13a.29.29,0,0,1-.06.18L1354.83-196a.52.52,0,0,1-.64.13l-16.33-8.41a9.74,9.74,0,0,0-13.12,4.2l-2.72,5.28a9.23,9.23,0,0,0,4,12.43l32.11,15.73a5,5,0,0,0,6.08-1.34l19.1-23.56a.52.52,0,0,1,.92.32V-153a.52.52,0,0,1,0,.22L1367-116.28a17.07,17.07,0,0,0-.52,13.32c4.63,12.22,14.56,37.44,21,46.61,5.07,7.25,23.54-2.3,22.61-7.25-3-16.11-15.79-39.93-17.37-42.84a.52.52,0,0,1,0-.56l13.82-18a.52.52,0,0,1,.41-.2h13.66a.52.52,0,0,1,.44.24l19.3,30.44a.51.51,0,0,1,0,.49c-1.35,3-14.36,32.21-17.42,51.88-.93,6,17.53,17.53,22.61,8.77,6.43-11.11,16.38-41.66,21-56.41a24.23,24.23,0,0,0-.54-16L1448.82-150a.52.52,0,0,1,0-.19v-41.33a.52.52,0,0,1,.92-.32l19.08,23.54a6.4,6.4,0,0,0,7.79,1.72L1508-182A9.23,9.23,0,0,0,1512-194.46Z\" transform=\"translate(1486.89 1878.68)\"\/>\r\n      <g>\r\n        <path class=\"cls-20\" d=\"M1466.19-262.71c0-6.13-2.67-11.1-6-11.17-5.23-18-22.79-31.28-43.66-31.28s-38.43,13.25-43.66,31.28c-3.31.06-6,5-6,11.17s2.67,11.1,6,11.17c5.23,18,22.79,31.28,43.66,31.28s38.43-13.25,43.66-31.28C1463.51-251.6,1466.19-256.58,1466.19-262.71Z\" transform=\"translate(1486.89 1878.68)\"\/>\r\n        <path class=\"cls-13\" d=\"M1416.73-305.15c-20.87,0-38.43,13.25-43.66,31.28-3.31.06-6,5-6,11.17s2.67,11.1,6,11.17c5.23,18,22.79,31.28,43.66,31.28Z\" transform=\"translate(1486.89 1878.68)\"\/>\r\n        <path class=\"cls-16\" d=\"M1379.72-262.71c0-22.11,18-40.27,41-42.26-1.39-.12-2.79-.18-4.21-.18-25,0-45.25,19-45.25,42.44s20.26,42.44,45.25,42.44c1.42,0,2.83-.06,4.21-.18C1397.74-222.44,1379.72-240.6,1379.72-262.71Z\" transform=\"translate(1486.89 1878.68)\"\/>\r\n      <\/g>\r\n      <ellipse class=\"cls-53\" cx=\"2903.43\" cy=\"1615.97\" rx=\"30.58\" ry=\"24.57\"\/>\r\n      <polygon class=\"cls-42\" points=\"2887.63 1608.27 2890.14 1613.37 2895.77 1614.18 2891.7 1618.15 2892.66 1623.76 2887.63 1621.11 2882.59 1623.76 2883.55 1618.15 2879.48 1614.18 2885.11 1613.37 2887.63 1608.27\"\/>\r\n      <polygon class=\"cls-42\" points=\"2903.77 1592.81 2906.29 1597.91 2911.92 1598.73 2907.85 1602.7 2908.81 1608.3 2903.77 1605.65 2898.74 1608.3 2899.7 1602.7 2895.63 1598.73 2901.26 1597.91 2903.77 1592.81\"\/>\r\n      <polygon class=\"cls-42\" points=\"2907.7 1619.34 2910.21 1624.44 2915.84 1625.26 2911.77 1629.22 2912.73 1634.83 2907.7 1632.18 2902.66 1634.83 2903.62 1629.22 2899.55 1625.26 2905.18 1624.44 2907.7 1619.34\"\/>\r\n      <polygon class=\"cls-42\" points=\"2920.15 1603.19 2922.67 1608.29 2928.3 1609.11 2924.22 1613.08 2925.18 1618.68 2920.15 1616.04 2915.12 1618.68 2916.08 1613.08 2912.01 1609.11 2917.64 1608.29 2920.15 1603.19\"\/>\r\n      <g>\r\n        <rect class=\"cls-42\" x=\"2882.74\" y=\"1671.56\" width=\"41.29\" height=\"32.06\" rx=\"7.55\" ry=\"7.55\"\/>\r\n        <circle class=\"cls-42\" cx=\"2886.89\" cy=\"1713.31\" r=\"4.15\"\/>\r\n        <circle class=\"cls-42\" cx=\"2903.38\" cy=\"1718.16\" r=\"4.15\"\/>\r\n        <circle class=\"cls-42\" cx=\"2919.88\" cy=\"1713.31\" r=\"4.15\"\/>\r\n      <\/g>\r\n      <path class=\"cls-16\" d=\"M1396-111.15l-25.11-13.4-4.05,8.61a16.05,16.05,0,0,0-.48,12.55l3.61,9.47,0,.07.06,0,0,.07.21-.14,25-7.74Z\" transform=\"translate(1486.89 1878.68)\"\/>\r\n      <path class=\"cls-16\" d=\"M1466.61-104.13l-1-2.5-.51.25-27,8.32.47,8.12,26.14,6v-.14l.1,0,2.25-7.23A19.5,19.5,0,0,0,1466.61-104.13Z\" transform=\"translate(1486.89 1878.68)\"\/>\r\n    <\/g>\r\n  <\/g>";


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
//   	var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
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

var astroExist = document.getElementById("astro");

function cloneAstro(i, j){
	var newAstro = astroExist.cloneNode(true);
	newAstro.id = "newastro1";
	
	var move = "translate(" + i + "," + j +")";
	newAstro.setAttribute("transform",move);
	astroExist.appendChild(newAstro);
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
	console.log(facts);
	factDisplay(facts[0]);
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

//why is this null???? 
//console.log(tvScreenBound = tvScreen.getBoundingClientRect());
//console.log(tvScreenBound.top);
//console.log(document.getElementById("iframemoon").style.top);
//console.log(iframeMoon.style.top);
//console.log(document.getElementById("iframemoon"));
//console.log(document.getElementById("iframemoon").style);
//console.log(document.getElementById("iframemoon").style.top);


//	var tvScreen = document.getElementById("tv_screen");
//	var tvScreenBound = tvScreen.getBoundingClientRect();
//	var iframeMoon = document.getElementById("iframemoon");


//
//	iframeMoon.style.top = tvScreenBound.top;
//	iframeMoon.style.left = tvScreenBound.left;
//	iframeMoon.style.right = tvScreenBound.right;
//	iframeMoon.style.bottom = tvScreenBound.bottom;
//	iframeMoon.style.height = tvScreenBound.height;
//	iframeMoon.style.width = tvScreenBound.width;


//var tvScreenObject = document.getElementById("tvscreenobject");
//  var tvScreen = document.getElementById("tv_screen");
//
//tvScreen.addEventListener("click", function(){
//	var newFrame = document.createElement("iframe");
//	newFrame.src = "https://www.youtube.com/embed/sTBIr65cL_E";
//	tvScreenObject.appendChild(newFrame);
//})

//var iframe = document.createElement('iframe');
//iframe.style.display = "none";
//iframe.src = /* your URL here */;
//document.body.appendChild(iframe);


//challenger
star6.addEventListener("click", function (){
	show(idsFound[5]);
	show(ids[5]);
	hide(ids[0, 1, 2, 3, 4]);
	hide("iframemoon");
	factDisplay(facts[5]);
	
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

//astro
star9.addEventListener("click", function (){
	show(idsFound[8]);
	show(ids[8]);
	hide(ids[0, 1, 2, 3, 4, 5, 6, 7]);
	factDisplay(facts[8]);
	
//	setTimeout(function(){ 
//		cloneAstro();
//		}, 1000);
	
	setTimeout(function(){
		for (var j = 0; j < 50; j++){
			for (var i = 0; i < 50; i++){
				cloneAstro(i+20, j+20);
			}
		}
		
	}, 1000);
	
	
	
//	createAstro();
//	console.log(createAstro);
//	createAstro(100, 500, 69.32, 100.51);
//	console.log(createAstro);
})

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

star11.addEventListener("click", function (){
	show(idsFound[10]);
	show(ids[10]);	
	hide("newplanets");
	show("newplanetstars");	
	hide(ids[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);		
	factDisplay(facts[10]);

	setTimeout(function(){ 
		moveID("planet1", -1500, 100);
		moveID("planet1_star", -1500, 100);
		show("planet1_star");
		}, 100);
	
	setTimeout(function(){ 
		moveID("planet2", -1200, 100);
		moveID("planet2_star", -1200, 100);
		show("planet2_star");
		}, 200);
	
	setTimeout(function(){ 
		moveID("planet3", -1200, 100);
		moveID("planet3_star", -1200, 100);
		show("planet3_star");
		}, 300);
	
	setTimeout(function(){ 
		moveID("planet4", -1200, 300);
		moveID("planet4_star", -1200, 300);
		show("planet4_star");
		}, 300);
	
	setTimeout(function(){ 
		moveID("planet5", -1200, 100);
		moveID("planet5_star", -1200, 100);
		show("planet5_star");
		}, 500);
	
	setTimeout(function(){ 
		moveID("planet6", -1200, 100);
		moveID("planet6_star", -1400, 100);
		show("planet6_star");
		}, 600);
	
	setTimeout(function(){ 
		moveID("planet7", -1200, 100);
		moveID("planet7_star", -1200, 100);
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




