// var name="ashi";//global object
// function sayHello(){
//     console.log("hello "+ name);
// }


//FAKE NAMESPACE

// var ashiGreeter={};
// ashiGreeter.name="ashi";
// ashiGreeter.sayHello= function(){
//     console.log("hello "+this.name);//ashiGreeter.name
// }

//IIFE
(function (window){
 var ashiGreeter={};
ashiGreeter.name="ashi";
ashiGreeter.sayHello= function(){
    console.log("hello "+this.name);//ashiGreeter.name
}
window.ashiGreeter=ashiGreeter;
})(window);