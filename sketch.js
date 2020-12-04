'use strict';



let state = 'title';
let cnv;
let points = 0;
let w = 600;
let h = 600;
let player;
let coins = [];
let playerImg;
let coinImg;
let bgImg;
let titleImg;
let button;

var eatSound;
var bgSound;

function preload() {
	playerImg = loadImage('assets/char.png')
	coinImg = loadImage('assets/fruit.png')
	bgImg = loadImage('assets/bg.png')
	titleImg = loadImage('assets/title.png')
	eatSound = loadSound('sounds/eat.mp3')
	bgSound = loadSound('sounds/bgmusic.mp3')
}

function setup() {
  cnv = createCanvas(w, h);

  textFont('monospace');

  player = new Player();

  // coins[0] = new Coin();
  coins.push(new Coin());

  //bgm
  bgSound.play();

  button = createButton('Quit');
}

function draw() {


switch (state){
	case 'title': 
	 	title();
	 	cnv.mouseClicked(titleMouseClicked);
	 	break;
	case 'level 1':
	 	level1();
	 	cnv.mouseClicked(level1MouseClicked);
	 	break;
	case 'you win':
	 	youWin();
	 	cnv.mouseClicked(youWinMouseClicked);
	 	break;
	 case 'you lose':
	 	youLose();
	 	cnv.mouseClicked(youLoseMouseClicked);
	 	break;
	default:
	 break;
}

//if (state === 'title') {
//	title();
//  cnv.mouseClicked(titleMouseClicked);
// } else if (state === 'level 1' && points > 50){
// 	level1();
// cnv.mouseClicked(level1MouseClicked);
// } else {

// }
}

function keyPressed() {
	if (keyCode == LEFT_ARROW){
		player.direction = 'left'
	} else if (keyCode == RIGHT_ARROW) {
		player.direction = 'right'
	} else if (keyCode == UP_ARROW) {
		player.direction = 'up'
	} else if (keyCode == DOWN_ARROW) {
		player.direction = 'down'
	} else if (key = ' '){
		player.direction = 'still';
	}
}

function keyReleased() {

	let numberKeysPressed = 0;

	if (keyIsDown(LEFT_ARROW)){
		numberKeysPressed++;
	}

	if (keyIsDown(RIGHT_ARROW)){
		numberKeysPressed++;
	}
	
	if (keyIsDown(DOWN_ARROW)){
		numberKeysPressed++;
	}

	if (keyIsDown(UP_ARROW)){
		numberKeysPressed++;			
	}

	console.log(numberKeysPressed);

	if (numberKeysPressed == 0){
	player.direction = 'still';
	}
}

function title() {
  background(titleImg);
  textSize(80);
  fill(255);
  textAlign(CENTER);
  text('', w/2, h/5);

  textSize(30);
  text('Click to start', w/2, h/2);
}

function titleMouseClicked() {
  	console.log('canvas is clicked on title page');
  	state = 'level 1'
}

function level1(){
	background(bgImg);
	//text('click for points', w/2, h - 30);

	if (random(1) <= 0.01){
		coins.push(new Coin());
	}

	player.display();
	player.move();

	for (let i = 0; i < coins.length; i++){
	coins[i].display();
	coins[i].move();

  button.position(w * 1.4, h + 50);
  button.mousePressed(changeBG);
  button.size(100, 23);


	}

	// check for collision, if collision point will increase by 1 and splice
	// need to iterate backwards through array

	for (let i = coins.length - 1; i >= 0; i--){
	if (dist(player.x, player.y, coins[i].x, coins[i].y) <= (player.r + coins[i].r) /2){
		points++;
		eatSound.play();
		console.log(points);
		coins.splice(i, 1);
		eatSound = loadSound('sounds/eat.mp3');
	} else if (coins[i].y > h){
		coins.splice(i, 1);
		console.log('coin is out of town');
	}
}
	text(`Kills: ${points}`, w/4, h - 30);

	if (points >= 20){
		state = 'you lose';
	//} else if (points <= 0){
	//	state = 'you lose';
	}

//if player has more than 15+ points then set game to gameover
//or
//"draw" button to canvas and when people click button and the 
//number of points decide if they win or lose

}

function level1MouseClicked() {

//	notes from Lark: if mouse x is bigger than one side and small than the other side and mouse y is bigger than one side and smaller on other side
//		if points are greater than the minimum and points are less than maximum they would win
//			game state "victory"

 //points++;
 //console.log('points = ' + points);

 //if (points >= 10){
 //	state = 'you win';
 //}  

}

function youWin() {
 background(255, 50, 80);
  textSize(80);
  stroke(255);
  text('YOU WIN', w/2, h/2);

  textSize(30);
  text('Click to play again', w/2, h * 3/4);
}

function youWinMouseClicked() {
state = 'title';
points= 0;
}

function youLose() {
 background(255, 50, 80);
  textSize(80);
  stroke(255);
  text('Game over', w/2, h/2);

  textSize(16);
  text('[Did you enjoy killing them?]', w/2, h * 1/4);

  textSize(30);
  text('Click to redeem yourself', w/2, h * 3/4);
}

function youLoseMouseClicked() {
state = 'title';
points= 0;
}

function changeBG() {
  let val = random(0);
  background(val);
  }
