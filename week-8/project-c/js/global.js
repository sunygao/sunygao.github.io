window.addEventListener("load", function() {
   
    function changeText() {
        document.getElementById("text").innerText = 'Clicked!';
    }
    
    document.getElementById("box").addEventListener("click", changeText);

});

