function multiply(x,y){
    return x*y;
}
var a=multiply(9,8);
console.log(a);
multiply.version="v.1.0.0";
console.log(multiply);
console.log(multiply.version);
function makemultiplier(multiplier){
    var myfunc=function(x){
        return multiplier*x;
    };
    return myfunc;

}
var multiby3=makemultiplier(3);
console.log(multiby3(10));
var doubleall=makemultiplier(2);
console.log(doubleall(100));
var a=function(x,y){
    return x+y;
}
var i=a(3,8);
console.log(i);
 function dooperation(x,operation){
     return operation(x);
 }
 var result=dooperation(5,multiby3);
 console.log(result);

