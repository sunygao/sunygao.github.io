document.getElementById("circle").onclick = function() {hideFunction()};

function hideFunction() {
    console.log("clicked");
    document.getElementById("section1").style.display = "none";
}
document.getElementById("circle2").onclick = function() {hide2Function()};

function hide2Function() {
    console.log("clicked the second one");
    document.getElementById("section2").style.display = "none";
}

document.getElementById("circle3").onclick = function() {hide3Function()};

function hide3Function() {
    console.log("clicked the third");
    document.getElementById("section3").style.display = "none";
}