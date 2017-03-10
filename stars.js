//stars

var sWidth; //screen width
var sHeight; //screen height
var canvas;
var context;
var numOfStars;
var starDensity = 4500; //lower = more stars
var starColors = ["#d8c1e5", "#381d4e", "#cccccc", "#b1c1e5"];


//Get the window size
sWidth = $(window).width();
sHeight = $(window).height();

//Get the canvas
canvas = $('#starfield');

//Fill out the canvas
canvas.attr('height', sHeight);
canvas.attr('width', sWidth);
context = canvas[0].getContext('2d');
context.globalAlpha = 0.6;

//Calculate the number of stars
numOfStars = Math.floor((sWidth * sHeight) / starDensity);
console.log(numOfStars);

//Draw the stars
function stars() {
	
  for (i=0;i<numOfStars;i++) {
    //Get a random star color
    var starColor = starColors[Math.floor(Math.random()*starColors.length)];
    //Get a random x-position
    var starX = Math.floor(Math.random()*sWidth);
    //Get a random y-position
    var starY = Math.floor(Math.random()*sHeight);
    //Draw
    context.beginPath();
    context.arc(starX, starY, 1, 0, 2 * Math.PI);
    context.fillStyle = starColor;
    context.fill();
  }
	
}



//function myFade() {
//    context.globalAlpha = 1;
//	var myInterval = setInterval(myFade, 1000);
//	}


//Draw the stars
stars()

//$(document).ready(function(){
//	console.log("running");
//	
//	myFade();
//	console.log(myFade());
//});

	





