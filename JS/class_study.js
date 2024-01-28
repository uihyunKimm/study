'use strict';

class User {
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get age(){
        return this._age;
    }
    set age(value){
        if(value < 0){
            throw Error(`age can not be negative`);
        }
        // this._age = value;
        this._age = value < 0 ? 0 : value;
    }
}

const user1 = new User('steve', 'jobs', 20);
console.log(user1); 

class Shape {
    constructor(width, height, color){
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log(`drawing ${this.color} color of`)
    }

    getArea() {
        return this.width * this.height;
    }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
    draw() {
    super.draw();
    console.log('❤️')
}
    getArea() {
    return (this.width * this.height) / 2;
}
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea())
const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea())