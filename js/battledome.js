"use strict";
/* jshint esversion: 6 */

var Robot = require('./Bots.js');
var Weapon = require(('./weapons.js'));
var $ = require('jquery');

var debug=false;

function comment(msg) {
	if (debug) {
		console.log("message", msg);
	}
}
/*-- Setup DOM --*/
$(document).ready(function(){
	$("#player--setup").show();
	$("#card--battleground").hide();
});

/*-- Function to move to attack screen --*/
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
	/*-- Player setup for attack screen --*/
	$("#player1-img").attr("src", `${p1.img}`);
    $("#player2-img").attr("src", `${p2.img}`);

	$(".p1-name").html(`${p1.name}`);
    $(".p2-name").html(`${p2.name}`);

	$(".p1-health").html(`${p1.health}`);
    $(".p2-health").html(`${p2.health}`);

	if ((p1.name !== "") && (p2.name !== "")) {
			$("#card--battleground").show();
			$("#player--setup").hide();
			$("#battle-Complete").hide();
		}
});
/*-- Function to BATTLE --*/
$("#fight").click( function(e) {
	$("#card--battleground").show();
	$("#player--setup").hide();
	$("#battle-Complete").show();






});

$("#fight").click( function(e) {
	console.log("something");
	if (event) {

	  p2.health = (p2.health + p2.armor) - (p1.weapon.damage);
	  $(".orcHealth").html("Health: " + orc.health);
	  // console.log("Player:" + newPlay.health, "Orc:" + orc.health)

	  if (p1.health > 0) {

	    p1.health = (p1.health) - (p2.weapon.damage);
	    $(".playerHealth").html("Health: " + newPlay.health);

	  } else if (p1.health <= 0) {
	    $('#play_button').unbind().disabled = true;
	    $("#playerWins").html('K.O.! Randal WINS!');
	    $(".playerHealth").html("Health: 0");
	    // orc.health = (orc.health) + (p1.weapon.damage);
	    // $(".orcHealth").html("Health: " + orc.health);
	    play2();

	  } else {
	     $('#play_button').unbind().disabled = true;
	    $("#winnerMessage").html(p1.playerName + " WINS!");
	    $(".orcHealth").html("Health: 0");
	    play3();

	  }
	}

});

$('.seizure').on('click', function(e) {
  $('#messageArea').addClass('nick');
  var millisecondsToWait = 100;
  setTimeout(function() {
    $('#messageArea').removeClass('nick');
  }, millisecondsToWait);
});

