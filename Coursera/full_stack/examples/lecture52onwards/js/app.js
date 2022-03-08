ashiGreeter.sayHello();
aniGreeter.sayHi();

// var a=(function (){
//     console.log("hello coursera!");
// });
// a();    =======>
//IMMEDIATELY INVOKED FUNCTION EXPRESSION(IIFE)
(function(){
    console.log("hello coursera!");
})();


(function(name){
    console.log("hello "+name);
})("cousera");

