"use strict";
/* jshint esversion: 6 */

var Robot = require('./Bots.js');
var $ = require('jquery');

var debug=false;

function comment(msg) {
	if (debug) {
		console.log("message", msg);
	}
}
/*-- Function to begin attack --*/
	//This captures values for player names and robot type
$("#beginAttack").click( function(e) {
	comment("Begin attack click");
	debugger
	let name1 = $("#player1-name").val();
	let name2 = $("#player2-name").val();
	let p1model = $("#player1-model").val();
	let p2model = $("#player2-model").val();
	let p1 = new Robot[p1model]();
	let p2 = new Robot[p2model]();
	p1.name = name1;
	p2.name = name2;
	console.log("player 1 model", p1);


	console.log("player2", p2);



	let nextCard = $(this).attr("next");
	let moveAlong = false;
});




