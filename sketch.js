//final project
//interactive illustration narrative

//give variable to the first page
var currentPage = "actOne";

//give variables to each image
//variables for the backgrounds
var actOne;
var checkPhone;
var actOnePartTwo;
var actTwo;
var actTwoPartTwo;
var actTwoPartThree;
var actTwoPartFour;
var actThree;
var actThreePartTwo;
//variables for the people & cockroach
var womanOne;
var womanTwo;
var womanThree;
var fuckboii;
var cockroach

//load the images
function preload() {
	//load the backgrounds
	actOne = loadImage("images/actOne.png");
	checkPhone = loadImage("images/phone.png");
	actOnePartTwo = loadImage("images/actOnePartTwo.png");
	actTwo = loadImage("images/actTwo.png");
	actTwoPartTwo = loadImage("images/actTwoPartTwo.png");
	actTwoPartThree = loadImage("images/actTwoPartThree.png");
	actTwoPartFour = loadImage("images/actTwoPartFour.png");
	actThree = loadImage("images/actThree.png");
	actThreePartTwo = loadImage("images/actThreePartTwo.png");
	//load the people
	womanOne = loadImage("images/womanOne.png");
	womanTwo = loadImage("images/womanTwo.png");
	womanThree = loadImage("images/womanThree.png");
	//load the cockroaches
	cockroach = loadImage("images/cockroach.png");
}

//create a place to draw
function setup() {
	createCanvas(800, 600);
}

function draw() {
	//make user able to change scenes
	if (currentPage === "checkPhone") {
		drawPageCheckPhone();
	} else if (currentPage === "actOne") {
		drawPageActOne();
	} else if (currentPage === "actOnePartTwo") {
		drawPageActOnePartTwo();
	} else if (currentPage === "actTwo") {
		drawPageActTwo();
	} else if (currentPage === "actTwoPartTwo") {
		drawPageActTwoPartTwo();
	} else if (currentPage === "actTwoPartThree") {
		drawPageActTwoPartThree();
	} else if (currentPage === "actTwoPartFour") {
		drawPageActTwoPartFour();
	} else if (currentPage === "actThree") {
		drawPageActThree();
	} else if (currentPage === "actThreePartTwo") {
		drawPageActThreePartTwo();
	}
}

function drawPageActOne() {
	//actOne - at the party
	//add background image
	image(actOne, 0, 0);
	//add text
	fill(0);
	textSize(20);
	textFont("Avenir");
	text("I wonder what time it is...", 445, 50);
	text("I should check my phone.", 445, 73);
	//mouse pressing on phone goes to next scene
	if (mouseIsPressed) {
		if (mouseY > 270 && mouseY < 309 && mouseX > 533 && mouseX < 551) {
			currentPage = "checkPhone";
		}
	}
}

function drawPageCheckPhone() {
	//check phone
	//add image of phone
	image(checkPhone, 0, 0);
	//add text
	fill(255);
	textSize(20);
	textFont("Avenir");
	text("Oh shit, I should head home!", 280, 40);
	text("Press the home button on the iPhone.", 280, 65);
	//mouse pressing on home button goes to next scene
	if (mouseIsPressed) {
		if (mouseY > 486 && mouseY < 533 && mouseX > 377 && mouseX < 422) {
			currentPage = "actOnePartTwo";
		}
	}
}

function drawPageActOnePartTwo() {
	//act one part two - leaving the party
	//add background image and moving image of main character
	image(actOnePartTwo, 0, 0);
	image(womanOne, mouseX, 90);
	//mouse pressing on door goes to next scene
	if (mouseIsPressed) {
		if (mouseX > 521 && mouseX < 709 && mouseY > 60 && mouseY < 411) {
			currentPage = "actTwo";
		}
	}
}

function drawPageActTwo() {
	//act two - in the street
	//add background image and image of main character
	image(actTwo, 0, 0);
	image(womanTwo, 600, 430);
	//add text
	fill(0);
	textSize(13);
	textFont("Avenir");
	text("Hey baby,", 50, 310);
	text("how are you doing tonight?", 50, 325);
	fill(255);
	textSize(20);
	textFont("Avenir");
	text("Oh no, a fuckboy. Click on him to make him go away!", 180, 40);
	//mouse pressing on fuckboy goes to next scene
	if (mouseIsPressed) {
		if (mouseX > 8 && mouseX < 30 && mouseY > 380 && mouseY < 508) {
			currentPage = "actTwoPartTwo";
		}
	}
}

function drawPageActTwoPartTwo() {
	//act two part two - fuckboy is gone! yay!
	//add background image and image of main character
	image(actTwoPartTwo, 0, 0);
	image(womanTwo, 600, 430);
	//add text
	fill(255);
	textSize(20);
	textFont("Avenir");
	text("Yay he's gone and I'm safe! Click on me to continue.", 180, 40);
	//click on main character to go to next scene
	if (mouseIsPressed) {
		if (mouseX > 608 && mouseX < 622 && mouseY > 434 && mouseY < 582) {
			currentPage = "actTwoPartThree";
		}
	}
}

function drawPageActTwoPartThree() {
	//act two part three - cockroach at feet
	//add background image and cockroach images
	image(actTwoPartThree, 0, 0);
	image(cockroach, 100, 120);
	//add text
	fill(0);
	textSize(20);
	textFont("Avenir");
	text("Ew!! A cockroach! Step on it!", 290, 40);
	//click on cockroach to get to next scene
	if (mouseIsPressed) {
		if (mouseX > 118 && mouseX < 150 && mouseY > 146 && mouseY < 177) {
			currentPage = "actTwoPartFour";
		}
	}
}

function drawPageActTwoPartFour() {
	//act two part four - almost home
	//add background image
	image(actTwoPartFour, 0, 0);
	//add text
	fill(255);
	textSize(20);
	textFont("Avenir");
	text("Almost home! Click on the fire hydrant to continue.", 173, 40);
	//click on fire hydrant to get home
	if (mouseIsPressed) {
		if (mouseX > 40 && mouseX < 93 && mouseY > 490 && mouseY < 585) {
			currentPage = "actThree";
		}
	}
}

function drawPageActThree() {
	//act three - finally home!
	//add background image and image of main character
	image(actThree, 0, 0);
	image(womanThree, 20, 90);
	//add text
	fill(255);
	textSize(20);
	textFont("Avenir");
	text("Finally home! Time to get in bed...", 250, 40);
	//click on bed to get in
	if (mouseIsPressed) {
		if (mouseX > 143 && mouseX < 647 && mouseY > 282 && mouseY < 478) {
			currentPage = "actThreePartTwo";
		}
	}
}

function drawPageActThreePartTwo() {
	//act three part two - at home and in bed
	// add background image
	image(actThreePartTwo, 0, 0);
	// add text
	fill(255);
	textSize(15);
	textFont("Avenir");
	text("Z", 546, 311)
	textSize(20);
	textFont("Avenir");
	text("Z", 566, 307)
	textSize(25);
	textFont("Avenir");
	text("Z", 586, 303);
	text("Restart", 65, 554);
	//mouse pressing "restart" button restarts interaction
	if (mouseIsPressed) {
		if (mouseX > 38 && mouseX < 179 && mouseY > 523 && mouseY < 575) {
			currentPage = "actOne";
		}
	}
}
