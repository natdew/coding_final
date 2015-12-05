//final project
//interactive illustration narrative

//give variables to each image
var actOne;
var phone;
var actTwo;
var actThree;

//load the images
function preload() {
	actOne = loadImage("images/actOne.jpg");
	phone = loadImage("images/phone.jpg");
	actTwo = loadImage("images/actTwo.jpg");
	actThree = loadImage("images/actThree.jpg");
}

//create a place to draw
function setup() {
	createCanvas(800, 600);
}

function draw() {
	//actOne
	image(actOne, 0, 0);
}
