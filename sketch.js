'use strict';



let state = 'title';
let cnv;

function setup() {
  cnv = createCanvas(600, 600);

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

function title() {
  background(100);
  textSize(80);
  stroke(255);
  text('My Game', 100, 100);

  textSize(30);
  text('Click anywhere to start', 100, 300);
}

function titleMouseClicked() {
  	console.log('canvas is clicked on title page');
  	state = 'level 1'
}

function level1(){
	background(50, 150, 200);
}

function level1MouseClicked() {
 console.log('canvas is clicked on level 1');
}