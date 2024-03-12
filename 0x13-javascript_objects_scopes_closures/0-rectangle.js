#!/usr/bin/node
// Write an empty class Rectangle that defines a rectangle
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
