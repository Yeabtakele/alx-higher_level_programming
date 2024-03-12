#!/usr/bin/node
class Rectangle {
	  constructor(width, height) {
		      this.width = width;
		      this.height = height;
		    }

	  getArea() {
		      return this.width * this.height;
		    }

	  getPerimeter() {
		      return 2 * (this.width + this.height);
		    }
}

module.exports = Rectangle;
