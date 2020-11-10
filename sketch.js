'use strict';



let state = 'title';

function setup() {
  createCanvas(600, 600);
}

function draw() {
if (state === 'title') {
	title();
 } else if (state === 'level 1'){
 	level1();
 }
}

function title() {
  background(100);
  textSize(80);
  stroke(255);
  text('My Game', 100, 100);
}

function level1(){
	background(50, 150, 200);
}