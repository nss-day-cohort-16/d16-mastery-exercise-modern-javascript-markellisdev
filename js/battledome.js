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
$(document).ready(function(){
	$("#player--setup").show();
	$("#card--battleground").hide();
});

/*-- Function to begin attack --*/
	//This captures values for player names and robot type
$("#beginAttack").click( function(e) {
	let nextCard = $(this).attr("next");
	let moveAlong = false;
	let name1 = $("#player1-name").val();
	let name2 = $("#player2-name").val();
	let p1model = $("#player1-model").val();
	let p2model = $("#player2-model").val();
	let p1 = new Robot[p1model]();
	let p2 = new Robot[p2model]();
	p1.name = name1;
	p2.name = name2;
 debugger
	$("#player1-img").attr("src", `${p1.img}`);
    $("#player2-img").attr("src", `${p2.img}`);



	if ((p1.name !== "") && (p2.name !== "")) {
			$("#card--battleground").show();
			$("#player--setup").hide();
		}
});






