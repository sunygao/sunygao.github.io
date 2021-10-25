window.addEventListener("load", function() {
   
    function changeText() {
        document.getElementById("text").innerText = 'The background is blue';

        document.getElementById("box").style.backgroundColor = '#2f91e6'
        
    }
    
    document.getElementById("box").addEventListener("click", changeText);

});

