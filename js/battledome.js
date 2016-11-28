"use strict";
/* jshint esversion: 6 */

var Robot = require('./Bots.js');
var $ = require('jquery');

// let testPlayer = new Player("Jim");

// console.log("testPlayer", testPlayer);
	var drone = new Robot.Player.Drone("Frank");
	console.log("Drone", drone);

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
	let p1 = new Robot.Player();
	let p2 = new Robot.Player();
	p1.name = name1;

	console.log("player1", p1);
	console.log("player 1 model", p1model);


	let nextCard = $(this).attr("next");
	let moveAlong = false;
});

$(".selectpicker").each(function() {
	let model1Selected = $("#player1-model option:selected").value;
	let model2Selected = $("#player2-model option:selected").value;
	// let p1 = new Robot.Robots.`$(model1Selected)`;
	// let p2 = new Robot.Robots.`$(model1Selected)`;
});



