"use strict";
/* jshint esversion: 6 */

let Battledome = function() {


	this.Player = function(name) {
		this.name = name;
		this.skill = null;
		this.health = null;
		this.damage = null;
	};
};

// let testPlayer = new Player("Jim");

// console.log("testPlayer", testPlayer);

function Player (name){
	this.name = name;
}

var debug=false;

function comment(msg) {
	if (debug) {
		console.log("message", msg);
	}
}

$("#beginAttack").click( function(e) {
	comment("Begin attack click");
	debugger
	let name1 = $("#player1-name").val();
	let name2 = $("#player2-name").val();
	let p1 = new Player(name1);
	let p2 = new Player(name2);
	let nextCard = $(this).attr("next");
	let moveAlong = false;
});


	// Battledome.Player.name = $("#player1-name");
module.exports =  {Player};