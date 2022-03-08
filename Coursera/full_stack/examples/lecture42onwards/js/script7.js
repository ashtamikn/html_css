//function constructors
function Circle(radius){
    this.radius=radius;
    // this.getArea=
    // function(){
    //     return Math.PI * Math.pow(this.radius,2);
    // };
}
Circle.prototype.getArea=
function (){
        return Math.PI * Math.pow(this.radius,2);
}
var myCircle=new Circle(10);
console.log(myCircle);
console.log(myCircle.radius);
console.log(myCircle.getArea());
var myotherCircle=new Circle(20);
console.log(myotherCircle);
//console.log(myotherCircle.getArea());
