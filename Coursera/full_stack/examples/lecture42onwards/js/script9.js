//ARRAY
var arrayname=new Array();
arrayname[0]="ashi";
arrayname[1]=2;
arrayname[2]=function (name){//function
    console.log("hello "+name);
};
arrayname[3]={course:"HTML,CSS and JS"};//literal object
console.log(arrayname);
arrayname[2]("ashi");
console.log(arrayname[3].course);
arrayname[2](arrayname[0]);


//short hand array creation
var names=["yakav","ashi","kn"];//=[];
console.log(names);
for(var i=0;i<names.length;i++){
    console.log("hello "+names[i]);
}
console.log("\n")
names[100]="jo";
for(var i=0;i<names.length;i++){
    console.log("hello "+names[i]);
}
console.log("\n")

var myObj={
    name:"yakav",
    course:"HTML/CSS/JS",
    platform:"coursera"
};
for(var i in myObj){
    console.log(i+":"+myObj[i]);
}
console.log("\n")
var names2=["yakav","ashi","kn"];//=[];
for(var name in names2){
    console.log("hello "+names2[name]);
}