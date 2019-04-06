// 1. Copy and paste your prototype in here and refactor into class syntax.

class Cuboid {
    constructor(attributes) {
        this.length = attributes.length;
        this.width = attributes.width;
        this.height = attributes.height;
    }

    volume() {
        return this.length * this.width * this.height;
    }

    surfaceArea() {
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    }
}

class Cube extends CuboidMaker {
    constructor(attributes) {
        super({ "length": attributes.side_length, "width": attributes.side_length, "height": attributes.side_length });
    }

    volume() {
        return Math.pow(this.length, 3);
    }

    surfaceArea() {
        return 6 * Math.pow(this.length, 2);
    }
}

const class_cuboid = new Cuboid({ "length": 4, "width": 5, "height": 5 });

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(class_cuboid.volume()); // 100
console.log(class_cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.
const cube = new Cube({ side_length: 4 });
console.log(cube.volume());
console.log(cube.surfaceArea());