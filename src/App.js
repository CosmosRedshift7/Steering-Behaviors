// import p5 from 'p5';
// import '../node_modules/p5/lib/p5.js';
// import '../node_modules/p5/lib/p5.min.js';
// import '../node_modules/p5/lib/addons/p5.dom.min.js';
// import '../node_modules/p5/lib/addons/p5.sound.min.js';

console.log(1);

var font;
var vehicles = [];
var Y_AXIS = 1;
var X_AXIS = 2;
var c1, c2;

function preload() {
	font = loadFont('Pattaya-Regular.ttf');
}

function setup() {
	var points = font.textToPoints('Космос', 100, 200, 192);
	
	c1 = color(142, 48, 171);
	c2 = color(184, 55, 43);

	createCanvas(800, 300);
	setGradient(0, 0, width, height, c1, c2, X_AXIS); // Background

	for (var i = 0; i < points.length; i++) {
		var pt = points[i];
		var vehicle = new Vehicle(pt.x, pt.y);
		vehicles.push(vehicle);
	}
}

function draw() {
	setGradient(0, 0, width, height, c1, c2, X_AXIS); // Background

	for (var i = 0; i < vehicles.length; i++) {
		var v = vehicles[i];
		v.behaviors();
		v.update();
		v.show();

	}
}

function setGradient(x, y, w, h, c1, c2, axis) {
	noFill();

	if (axis == Y_AXIS) {  // Top to bottom gradient
		for (var i = y; i <= y+h; i++) {
			var inter = map(i, y, y+h, 0, 1);
			var c = lerpColor(c1, c2, inter);
			stroke(c);
			line(x, i, x+w, i);
		}
	}  
	else if (axis == X_AXIS) {  // Left to right gradient
		for (var i = x; i <= x+w; i++) {
			var inter = map(i, x, x+w, 0, 1);
			var c = lerpColor(c1, c2, inter);
			stroke(c);
			line(i, y, i, y+h);
		}
	}
}
