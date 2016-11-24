"use strict";
/* jshint esversion: 6 */

var Robot = require('./Battledome.js');

let Robots = {};

	/* Base ROBOT ------------- */
	let Model = function Model() {
		this.weapon = "shockwave";
		this.health = 0;
		this.damage = 0;
	};
	Model.prototype = new Player();


	/* Robot TYPES ----------- */

		/* Drones --------- */

	let Drone = function Drone() {
		this.minHealth = 50;
		this.maxHealth = 100;
		this.health = Math.floor(Math.random() * (this.maxHealth - this.minHealth +1)) + this.minHealth;
		this.armor
		this.property2
	};
	Drone.prototype = new Model();

	var drone = new Drone();
	console.log("Drone", drone);


	Robots.Luna_X_2000 = function Luna_X_2000() {
		this.speed = 70;
		this.img = `http://www.panzerbaer.de/helper/pix/bw_drohne_luna_katapult-001.jpg`
	};
	Robots.Luna_X_2000.protype = new Drone();

	Robots.MQ9_Reaper = function MQ9_Reaper() {
		this.cost = "$16.9 million";
		this.img = `<img id="lcms_fancybox-image" class="lcms_fancybox-image lcms_fancybox-img" src="/Websites/gaasi/PhotoGallery/4264089/mq9-reaper-weaponized.jpg?02045" alt="USAF MQ-9 Reaper">`
	};
	Robots.MQ9_Reaper.protoype = new Drone();

		/* Bipedals --------- */

	let Bipedal = function Bipedal() {
		this.minHealth = 50;
		this.maxHealth = 140;
		this.health = Math.floor(Math.random() * (this.maxHealth - this.minHealth +1)) + this.minHealth;
		this.armor
		this.property2
	};
	Bipedal.prototype = new Model();

	Robots.Megabot = function Megabot() {
		this.skill =
		this.
		this.img = `http://images6.fanpop.com/image/photos/38400000/Megabot-big-hero-6-38439105-500-281.jpg`
	};
	Robots.Megabot.prototype = new Bipedal();

	Robots.R2D2 = function R2D2() {
		this.skill = "multiple languages"
		this.
		this.img = `https://elrincondelmae.files.wordpress.com/2015/12/star_3.jpg`
	};
	Robots.R2D2.prototype = new Bipedal();

		/* ATVs --------- */

	let ATV = function ATV() {
		this.minHealth = 60;
		this.maxHealth = 120;
		this.health = Math.floor(Math.random() * (this.maxHealth - this.minHealth +1)) + this.minHealth;
		this.armor //function
		this.property2
	};
	ATV.prototype = new Model();

	Robots.Roomba980 = function Roomba980() {
		this.skill = "super clean floors"
		this.
		this.img = `http://i.imgur.com/hsUooRJ.jpg`;
	};
	Robots.Roomba980.prototype = new ATV();


	Robots.GrizzlyRUV = function GrizzlyRUV() {
		this.towCapacity = "1400lbf";
		this.bullbar = (function () {
			this.health + 15;
		});
		this.img = `https://www.clearpathrobotics.com/wp-content/uploads/2015/09/Grizzly-RUV_mining-in-sand.jpg`;
	};
	Robots.GrizzlyRUV.prototype = new ATV();

