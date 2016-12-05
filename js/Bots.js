"use strict";
/* jshint esversion: 6 */

var Weapon = require('./weapons.js');

// Defining the Base object for any player in the game\

let Battledome = {};

	Battledome.Player = function(name) {
		// this.toString = function() {
			this.name = "General Cryptor";
			this.skill = null;
			this.health = null;
			this.damage = null;
		// };
	};

	Battledome.Player.prototype.setName = (name) => {
		this.name = name;
	};


	/* Base ROBOT ------------- */
	Battledome.Model = function Model() {
		//trying to add weapon from js file
		this.weapon = Weapon.shockwave;
		this.damage = 0;
	};
	Battledome.Model.prototype = new Battledome.Player();

	Battledome.Model.prototype.setWeapon = (weapon) => {
		this.weapon = weapon;
	};


	/* Robot TYPES ----------- */

		/* DRONES --------- */

	Battledome.Drone = function Drone() {
		this.minHealth = 50;
		this.maxHealth = 100;
		this.health = Math.floor(Math.random() * (this.maxHealth - this.minHealth +1)) + this.minHealth;
		this.skill = "flying";
		this.weapon = "missile";
	};
	Battledome.Drone.prototype = new Battledome.Model();

	/* DRONE Models ----------- */

	Battledome.Luna_X_2000 = function Luna_X_2000() {
		this.speed = 70;
		this.img = "images/Luna_X_2000.jpeg";
	};
	Battledome.Luna_X_2000.prototype = new Battledome.Drone();

	Battledome.MQ9_Reaper = function MQ9_Reaper() {
		this.cost = "$16.9 million";
		this.img = "images/MQ9_Reaper.jpeg";
	};
	Battledome.MQ9_Reaper.prototype = new Battledome.Drone();

		/* BIPEDALS --------- */

	Battledome.Bipedal = function Bipedal() {
		this.minHealth = 50;
		this.maxHealth = 140;
		this.health = Math.floor(Math.random() * (this.maxHealth - this.minHealth +1)) + this.minHealth;
	};
	Battledome.Bipedal.prototype = new Battledome.Model();

	/* BIPEDAL Models --------- */

	Battledome.Megabot = function Megabot() {
		this.weapon = "superior intelligence"
		this.skill = "assembly from microbots";
		this.speed = 45;
		this.img = "images/Megabot-big-hero-6.jpeg";
	};
	Battledome.Megabot.prototype = new Battledome.Bipedal();

	Battledome.R2D2 = function R2D2() {
		this.weapon = "electrical scrambler";
		this.skill = "multiple languages";
		this.color = "white and blue";
		this.img = "images/R2D2.jpeg";
	};
	Battledome.R2D2.prototype = new Battledome.Bipedal();

		/* ATVs --------- */

	Battledome.ATV = function ATV() {
		this.minHealth = 60;
		this.maxHealth = 120;
		this.health = Math.floor(Math.random() * (this.maxHealth - this.minHealth +1)) + this.minHealth;
		this.armor = (function () {
			this.health + 20;
		});
	};
	Battledome.ATV.prototype = new Battledome.Model();

	/* ATV Models --------- */

	Battledome.Roomba980 = function Roomba980() {
		this.skill = "super clean floors";
		this.shape = "round";
		this.weapon = "defenseless";
		this.img = "images/Roomba980.jpeg";
	};
	Battledome.Roomba980.prototype = new Battledome.ATV();


	Battledome.GrizzlyRUV = function GrizzlyRUV() {
		this.towCapacity = "1400lbf";
		this.bullbar = (function () {
			this.health + 15;
		});
		this.img = "images/GrizzlyRUV.jpeg";
	};
	Battledome.GrizzlyRUV.prototype = new Battledome.ATV();

module.exports =  Battledome;