//EVENT HANDLING
document.addEventListener("DOMContentLoaded",//any element is loaded then it is called
function(event){
    function sayHello(event){//every event handler function get event object
       console.log(event);
        this.textContent="said it"//changes text that is there in button as button is global here as even is listened from button
       // console.log(this);
        
        var name=document.getElementById("name").value;
        var message="<h2> hello "+name+"</h2>";
        document.getElementById("content").innerHTML=message;//it takes <h2> not as text insted as html property
        
    if(name==="student"){
        var title=document.querySelector("#title").textContent;
        title+=" & lovin it!!";//if name is student then lecture 53 & lovin it
        document.querySelector("#title").textContent=title;
    }
    }
    document.querySelector("button").addEventListener("click",sayHello);
    document.querySelector("body").addEventListener("mousemove",
    function (event){
        if(event.shiftKey===true){//if shift key is presed then x and y axis is shown
            console.log("x:"+event.clientX);//cursor in x axis
        console.log("y:"+event.clientY);//curser in y axis
        }
        
    }
    );
});