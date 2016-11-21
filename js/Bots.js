"use strict";
/* jshint esversion: 6 */

let Robots = {};

	Battledome.Robot = {};

	/* Base ROBOT ------------- */
	let Model = function Model() {
		this.name = "plain robot";
		this.weapon = "shockwave";
		this.health = "200";
		this.damage;
	};


	/* Robot TYPES ----------- */
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


	let Luna_X_2000 = function Luna_X_2000() {
		this.speed = 70;
		this.img = `http://www.panzerbaer.de/helper/pix/bw_drohne_luna_katapult-001.jpg`
	};
	Luna_X_2000.protype = new Drone();

	let MQ9_Reaper = function MQ9_Reaper() {
		this.cost = "$16.9 million";
		this.img = `<img id="lcms_fancybox-image" class="lcms_fancybox-image lcms_fancybox-img" src="/Websites/gaasi/PhotoGallery/4264089/mq9-reaper-weaponized.jpg?02045" alt="USAF MQ-9 Reaper">`
	};
	MQ9_Reaper.protoype = new Drone();


	let Bipedal = function Bipedal() {
		this.minHealth = 50;
		this.maxHealth = 140;
		this.health = Math.floor(Math.random() * (this.maxHealth - this.minHealth +1)) + this.minHealth;
		this.armor
		this.property2
	};
	Bipedal.prototype = new Model();

	let Megabot = function Megabot() {
		this.skill =
		this.
		this.img = `http://images6.fanpop.com/image/photos/38400000/Megabot-big-hero-6-38439105-500-281.jpg`
	};
	Megabot.prototype = new Bipedal();

	let R2D2 = function R2D2() {
		this.skill = "multiple languages"
		this.
		this.img = `https://elrincondelmae.files.wordpress.com/2015/12/star_3.jpg`
	};
	R2D2.prototype = new Bipedal();




	let ATV = function ATV() {
		this.minHealth = 60;
		this.maxHealth = 120;
		this.health = Math.floor(Math.random() * (this.maxHealth - this.minHealth +1)) + this.minHealth;
		this.armor //function
		this.property2
	};
	ATV.prototype = new Mode();

	let Roomba980 = function Roomba980() {
		this.skill = "super clean floors"
		this.
		this.img = `http://i.imgur.com/hsUooRJ.jpg`
	};
	Roomba980.prototype = new ATV();


	let GrizzlyRUV = function GrizzlyRUV() {
		this.towCapacity = "1400lbf";
		this.bullbar = () =>
			this.health + 15;
		this.img = `https://www.clearpathrobotics.com/wp-content/uploads/2015/09/Grizzly-RUV_mining-in-sand.jpg`
	};
	GrizzlyRUV.prototype = new ATV();

