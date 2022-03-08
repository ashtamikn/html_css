// var name="Ani";//global object overwrites ashi
// function sayHi(){
//     console.log("hi "+name)
// }

//FAKE NAMESPACE
// var aniGreeter={};
// aniGreeter.name="ani";
// aniGreeter.sayHi=function(){
//     console.log("hi "+this.name);//aniGreeter.name
// }

//IIFE
(function(window){
    var aniGreeter={};
aniGreeter.name="ani";
var greeting="hi";
aniGreeter.sayHi=function(){
    console.log("hi "+this.name);//aniGreeter.name
}
window.aniGreeter=aniGreeter;//setting to global object
})(window);