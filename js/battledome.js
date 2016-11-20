"use strict";
/* jshint esversion: 6 */

let Battledome = Battledome =>

	Battledome.Robot = {};

	let min = 50;
	let max = 80;

	Battledome.Robot.Player = name =>
		this.type = null;

		this.playerName = null;
		this.health = Math.floor(Math.random() * (max - min +1)) + min;
