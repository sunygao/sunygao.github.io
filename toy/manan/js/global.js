window.addEventListener("load", function() {

   this.document.getElementById("enter").style.display = "none";

   function showStuff() {
       document.getElementById("enter").style.display = "inline";
   }

   function myFunction() {
       window.location = "index.html"
   }

   setTimeout(showStuff, 3000);

   this.document.getElementById("enter").onclick = function () {
      location.href = "the-web.html";
  }

this.window.addEventListener("keydown", keyListen);
  function keyListen(){
      console.log("gandu");
  }
   //put your javascript here, between the function curly braces for the window event listener


});

