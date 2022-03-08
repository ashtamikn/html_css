var string="hello";
string+=" world";
console.log(string + "!");
console.log((5+4)/3);
console.log(undefined/5);
var x=4,y='4';
if(x==y){
    console.log("x and y are equal");
}
var x=4,y='4';
if(x===y){
    console.log("x and y are equal");
}
else {
    console.log("not equal");
}
if(false || null || undefined || "" ||0 ||NaN){
    console.log("this line will never get executed");
    
}
else{
    console.log("all false");
}
if(true && "hello" && 1 && -1 &&"false"){
    console.log("all true");
}
function a()
{
    return
    {
        name:"ashi"
    };
}
function b(){//compulsiry this one
    return{
        name:"ashi k"
    };
}
console.log(a());
console.log(b());


var sum=0;
for(var i=0;i<10;i++){
    console.log(i);
    sum+=i;
}
console.log("sum is "+sum);