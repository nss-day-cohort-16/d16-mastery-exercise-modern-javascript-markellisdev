"use strict";
/* jshint esversion: 6 */

let Battledome = Battledome =>

	Battledome.Robot = {};

	/* Base ROBOT ------------- */
	Battledome.Robot.Player = name =>
		this.type = null;

		this.playerName = null;
		this.health = Math.floor(Math.random() * (max - min +1)) + min;
		this.

	/* Robot TYPES ----------- */
	Battledome.Robot.Drone
		let this.minHealth = 50;
		let this.maxHealth = 100;
		this.property1
		this.property2
		this.health = Math.floor(Math.random() * (max - min +1)) + min;


	Battledome.Robot.Bipedal
		let this.minHealth = 50;
		let this.maxHealth = 140;
		this.property1
		this.property2
		this.health = Math.floor(Math.random() * (max - min +1)) + min;


	Battledome.Robot.ATV
		let this.minHealth = 60;
		let this.maxHealth = 120;
		this.armor //function
		this.property2
		this.health = Math.floor(Math.random() * (max - min +1)) + min;
