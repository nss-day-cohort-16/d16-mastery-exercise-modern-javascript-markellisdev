"use strict";
/* jshint esversion: 6 */

// var Robot = require('./Battledome.js');

// Defining the Base object for any player in the game\

let Battledome = {}

	Battledome.Player = function(name) {
		// this.toString = function() {
			this.name = "Whizzle snips";
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
		this.weapon = "shockwave";
		this.health = 0;
		this.damage = 0;
	};
	Battledome.Model.prototype = new Battledome.Player();


	/* Robot TYPES ----------- */

		/* Drones --------- */

	Battledome.Drone = function Drone() {
		this.minHealth = 50;
		this.maxHealth = 100;
		this.health = Math.floor(Math.random() * (this.maxHealth - this.minHealth +1)) + this.minHealth;
		this.skill = "flying";
	};
	Battledome.Drone.prototype = new Battledome.Model();

	Battledome.Luna_X_2000 = function Luna_X_2000() {
		this.speed = 70;
		this.img = `http://www.panzerbaer.de/helper/pix/bw_drohne_luna_katapult-001.jpg`;
	};
	Battledome.Luna_X_2000.protype = new Battledome.Drone();

	Battledome.MQ9_Reaper = function MQ9_Reaper() {
		this.cost = "$16.9 million";
		this.img = `<img id="lcms_fancybox-image" class="lcms_fancybox-image lcms_fancybox-img" src="/Websites/gaasi/PhotoGallery/4264089/mq9-reaper-weaponized.jpg?02045" alt="USAF MQ-9 Reaper">`;
	};
	Battledome.MQ9_Reaper.protoype = new Battledome.Drone();

		/* Bipedals --------- */

	Battledome.Bipedal = function Bipedal() {
		this.minHealth = 50;
		this.maxHealth = 140;
		this.health = Math.floor(Math.random() * (this.maxHealth - this.minHealth +1)) + this.minHealth;
	};
	Battledome.Bipedal.prototype = new Battledome.Model();

	Battledome.Megabot = function Megabot() {
		this.skill = "assembly from microbots";
		this.speed = 45;
		this.img = `http://images6.fanpop.com/image/photos/38400000/Megabot-big-hero-6-38439105-500-281.jpg`;
	};
	Battledome.Megabot.prototype = new Battledome.Bipedal();

	Battledome.R2D2 = function R2D2() {
		this.skill = "multiple languages";
		this.color = "white and blue";
		this.img = `https://elrincondelmae.files.wordpress.com/2015/12/star_3.jpg`;
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

	Battledome.Roomba980 = function Roomba980() {
		this.skill = "super clean floors";
		this.shape = "round"
		this.img = `http://i.imgur.com/hsUooRJ.jpg`;
	};
	Battledome.Roomba980.prototype = new Battledome.ATV();


	Battledome.GrizzlyRUV = function GrizzlyRUV() {
		this.towCapacity = "1400lbf";
		this.bullbar = (function () {
			this.health + 15;
		});
		this.img = `https://www.clearpathrobotics.com/wp-content/uploads/2015/09/Grizzly-RUV_mining-in-sand.jpg`;
	};
	Battledome.GrizzlyRUV.prototype = new Battledome.ATV();

module.exports =  Battledome;