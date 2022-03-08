//object literal
var literalCircle={//==new object()
    radius:10,
    getArea:function(){
        var self=this;
        console.log(this);
        var increaseRadius=function (){
            this.radis=20;//sets 20 for global object's radius i.e window ...but not for literal object        
            self.radius=20;//sets 20 for literal object
        };
        increaseRadius();
        console.log(this.radius);
        return Math.PI * Math.pow(this.radius,2);
    }
};
console.log(literalCircle.getArea());

