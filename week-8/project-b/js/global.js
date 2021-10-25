window.addEventListener("load", function() {
    function turnBlue() {
        document.getElementById("box-left").style.background = "#2375d8";
    }

    function turnGreen() {
        document.getElementById("box-right").style.background = "#b6f2bd";
    }
    
    document.getElementById("box-left").addEventListener("click", turnBlue);

    document.getElementById("box-right").addEventListener("click", turnGreen);
});

