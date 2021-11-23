window.addEventListener("load", function() {

    this.document.getElementById("whattodo").style.display = "none";
 
    function showStuff() {
        document.getElementById("whattodo").style.display = "inline";
    }
 
    function myFunction() {
        window.location = "the-web.html"
    }
 
    setTimeout(showStuff, 10000);
 
    this.document.getElementById("whattodo").onclick = function () {
       location.href = "errorstate.html";
   };
    //put your javascript here, between the function curly braces for the window event listener
 
 
 });
 
 