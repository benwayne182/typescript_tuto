class Shape {

    area: number;
    private color: string;
    //private access modifier, the accessibility of color if only the class body

    constructor(public name: string, public width: number, public height: number) {
        this.area = width * height;
        this.color = "pink";
    };
    //add public access modifier to change the accessibility of the constructor argument

    shoutout() {
        return "I'm " + this.color + " " + this.name + " with an area of " + this.area + " cm squared.";
    }
}

var square = new Shape("square", 30, 30);

console.log(square.shoutout());
console.log('Area of Shape: ' + square.area);
console.log('Name of Shape: ' + square.name);
console.log('Color of Shape: ' + square.color);
console.log('Width of Shape: ' + square.width);
console.log('Height of Shape: ' + square.height);
