var message="in global"
console.log("global:message="+message);
var a=function (){//=>function a()
    var message="inside a";
    console.log("a:message="+message);
    function c()
{
    console.log("c:message ="+message);
}
c();
    b();

}
function b()
{
    console.log("b:message ="+message);
}
a();