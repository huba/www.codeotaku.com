
/// *** class Vec2 ***
/// This class is used for basic Vec2 operations which are common in 2D tile-based games.
function Vec2 (x, y) {
	this.x = x;
	this.y = y;
}

Vec2.get = function(input) {
	if (input instanceof Vec2)
		return input;
	else
		return new Vec2(input[0], input[1]);
}

Vec2.equals = function(left, right) {
	return (left[0] == right[0]) && (left[1] == right[1]);
}

Vec2.add = function(left, right) {
	return [left[0] + right[0], left[1] + right[1]];
}

Vec2.euclidianDistance = function(left, right) {
	var dx = left[0] - right[0], dy = left[1] - right[1];
	return Math.sqrt(dx*dx + dy*dy);
}

Vec2.manhattenDistance = function(left, right) {
	var dx = left[0] - right[0], dy = left[1] - right[1];
	return Math.abs(dx) + Math.abs(dy);
}

// The order of these items is important:
Vec2.P = [[-1, 0], [1, 0], [0, -1], [0, 1]];

/// *** class ResourceLoader ***
/// The basic resource loading class which provides a callback once all resources are loaded.
function ResourceLoader (parent) {
	this.parent = parent;
	
	this.resources = {};
	this.callback = null;
	this.counter = 0;
}

ResourceLoader.InvalidResourceNameError = function(name) {
	this.name = name;
	this.message = "Invalid resource name";
}

ResourceLoader.InvalidResourceNameError.prototype.toString = function() {
	return this.message + ": " + this.name;
}

ResourceLoader.prototype.onLoad = function(name) {
	this.counter -= 1;
	
	//console.log("Resource loaded", name);
	
	if (this.counter == 0) {
		this.callback(this);
	}
}

ResourceLoader.prototype.loadResource = function(name, source, type) {
	if (typeof(name) != 'string') {
		throw new ResourceLoader.InvalidResourceNameError(name);
	}
	
	this.counter += 1;
	
	var resource = new type();
	this.resources[name] = resource;
	
	resource.addEventListener('load', this.onLoad.bind(this, name));
	resource.addEventListener('canplaythrough', this.onLoad.bind(this, name));
	
	//console.log("Loading resource", type, name, source);
	resource.src = source;
	
	return resource;
}

ResourceLoader.prototype.loadImage = function(name, source) {
	this.loadResource(name, source, Image);
}

ResourceLoader.prototype.loadAudio = function(name, source) {
	var resource = this.loadResource(name, source, Audio);
}

ResourceLoader.prototype.get = function(name) {
	var resource = this.resources[name];
	
	if (!resource && this.parent) {
		resource = this.parent.get(name);
	}
	
	return resource;
}

ResourceLoader.prototype.loaded = function (callback) {
	this.callback = callback;

	if (this.counter == 0) {
		callback(this);
	}
}

function randomInt(max) {
	return Math.floor(Math.random() * max)
}

function randomIntRange(min, max){
	return Math.floor(Math.random() * (max - min) + min);
}
