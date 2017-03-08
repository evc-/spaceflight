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
})

//iss
star10.addEventListener("click", function (){
	show(idsFound[9]);
	show(ids[9]);
	hide(ids[0, 1, 2, 3, 4, 5, 6, 7, 8]);
	move(objects[9], 1400, -850);
	factDisplay(facts[9]);
})

//seven planets
star11.addEventListener("click", function (){
	show(idsFound[10]);
	show(ids[10]);
	hide(ids[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
	move(objects[10], 625, -1000);
	factDisplay(facts[10]);
})





