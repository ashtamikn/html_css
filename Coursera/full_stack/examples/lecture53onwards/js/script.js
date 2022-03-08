//DOM manipulation
// console.log(document.getElementById("title"));
// console.log(document instanceof HTMLDocument);

function sayHello(event){//every event handler function get event object
    this.textContent="said it"//changes text that is there in button as button is global here as even is listened from button
    console.log(this);
    // console.log(
    //     document.getElementById("name").value//when you console ...after giving ashi as input ...it prints ashi becs ashi is the value given to id name
    // );
    //OR
    var name=document.getElementById("name").value;
    var message="<h2> hello "+name+"</h2>";
    document.getElementById("content").innerHTML=message;//it takes <h2> not as text insted as html property
    //(var message="hello "+name;
    //console.log(message);
   // document.getElementById("content").textContent = message;)
if(name==="student"){
    //var title=document.getElementById("title");======
    var title=document.querySelector("#title").textContent;
    //selects element not only by id
    title+=" & lovin it!!";//if name is student then lecture 53 & lovin it
    document.querySelector("#title").textContent=title;
}
}
document.querySelector("button").addEventListener("click",sayHello);
// document.querySelector("button").onclick=sayHello;