window.addEventListener("load", function() {
    function changeText() {
        document.getElementById("answer").innerText = 2 + 2;
    }
    
    document.getElementById("button").addEventListener("click", changeText);

});

