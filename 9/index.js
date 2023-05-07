// // 1 -

function Rectangle(w , h){

    this.width = w;
    this.height = h;
    var instance = 0;
    if(this.constructor==Rectangle){
        instance++
        return instance
    }
    
}
Rectangle.prototype.countInstance = function(){
    var instance = this.instance;
    console.log(instance);
}

Rectangle.prototype.area = function(){
    var a = this.width*this.height
    console.log(a)
}
Rectangle.prototype.primeter = function(){
    var p =2*(this.width + this.height)
    console.log(p);
}

var rec = new Rectangle(6,4)
var rec2 = new Rectangle(6,4)
var rec3 = new Rectangle(6,4)

//

Rectangle.prototype.toString = function(){
    console.log(this.width,this.height,this.area(),this.primeter())
}


// 2 - 

main
function Shape(w , h){

    this.width = w;
    this.height = h;
    //  **** 3 **** //
    if(this.constructor==Shape){
        throw("creating instance is not allowed")
    }
    
}
Shape.prototype.areaShape = function(){
    var a = this.width*this.height
    console.log("area of shape is :"+a)
}

// object from Shape
var shape = new Shape()

// inhernt from Shape 
function Rectangle (w , h , n){

    Shape.call(this,w , h);
    this.Num = n;
    // if(this.constructor==Rectangle){
    //     throw("creating instance is not allowed")
    // }
}

Rectangle.prototype = Object.create(Shape.prototype)

Rectangle.prototype.constructor = Rectangle
// area function of rectangle
Rectangle.prototype.areaRectangle = function(){
    var a = this.width*this.height*this.Num
    console.log("area of Rectangle is :"+a)
}
// Object of rectangel 
var rec = new Rectangle(6,4,4)
// rec.areaShape()
rec.areaRectangle()

// inhernt from rectangle
function Square (w,h,n,r){

    // Shape.call(this,w , h);
    Rectangle.call(this,w,h,n);
    this.radius = r
}


Square.prototype = Object.create(Rectangle.prototype)
Square.prototype.constructor = Square
// area function of square
Square.prototype.areaSquare = function(){
    var a = this.width*this.height*this.Num*this.radius
    console.log("area of square is :"+a)
}

// object of square

var sq = new Square (8,6,4,2)
sq.areaSquare()


