function solve(width, height, color) {
    class Rectangle {
constructor(width, height, color){
this.width = width;
this.height = height;
this.color = color[0].toUpperCase() + color.slice(1);
}
calcArea(){
    return this.width * this.height;
}
    }
    return new Rectangle(width, height, color);
}