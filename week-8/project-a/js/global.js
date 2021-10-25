window.addEventListener("load", function() {
    function rotate() {
        document.getElementById("box").style.transform = "rotate(45deg)";
    }

    function rotateBack() {
        document.getElementById("box").style.transform = "rotate(0deg)";
    }
    
    document.getElementById("box").addEventListener("mouseover", rotate);

    document.getElementById("box").addEventListener("mouseout", rotateBack);
});

