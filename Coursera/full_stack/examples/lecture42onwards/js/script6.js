var a=7;
var b=a;
console.log("a:"+a);
console.log("b:"+b);
b=5;
console.log("after b update :");
console.log("a:"+a);
console.log("b:"+b);
var a={x:7};
var b=a;
console.log(a);
console.log(b);
b.x=5;
console.log("after b.x update:");
console.log(a);
console.log(b);
function changePrimitive(primVlaue){
    console.log("in change primitive..");
    console.log("before:");
    console.log(primVlaue);
    primVlaue=5;
    console.log("after:");
    console.log(primVlaue);

}
var value=7;
changePrimitive(value);
console.log("after changePrimitive,orig value:");
console.log(value);


function changeObject(objValue){
    console.log("in change object..");
    console.log("before:");
    console.log(objValue);
    objValue.x=5;
    console.log("after:");
    console.log(objValue);

}
var value={x:7};
changeObject(value);
console.log("after chaneg object,orig value:");
console.log(value);