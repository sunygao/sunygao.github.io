window.onload=function(){
  document.getElementById('dotzTire').addEventListener("click", tireChange);
  document.getElementById('dotzDriver').addEventListener("click", driverChange);
  document.getElementById('dotzCockpit').addEventListener("click", cockpitChange);
  document.getElementById('dotzFrontwing').addEventListener("click", frontChange);
  document.getElementById('dotzBackwing').addEventListener("click", backChange);
  document.getElementById('dotzPaddock').addEventListener("click", paddockChange);
  document.getElementById('dotzCommentary').addEventListener("click", comChange);
  document.getElementById('goBack').addEventListener("click", backButton);
}

function tireChange() {
    console.log("onclick okay");

    var imageF1 = document.getElementById('img1');
    var pitStop = new Audio("media/audio/pitstop.mp3");
    var crewBox = new Audio("media/audio/box.mp3");

    if (imageF1.src.match("media/images/sebpit.jpg")) {
        imageF1.src = "media/images/sebside.jpg";
        document.getElementById('dotzTire').style.visibility="hidden";
        document.getElementById('dotzDriver').style.visibility="hidden";
        document.getElementById('dotzCockpit').style.visibility="hidden";
        document.getElementById('dotzFrontwing').style.visibility="hidden";
        document.getElementById('dotzBackwing').style.visibility="hidden";
        document.getElementById('dotzPaddock').style.visibility="hidden";
        document.getElementById('dotzCommentary').style.visibility="hidden";
        document.getElementById('goBack').style.visibility="visible";
        crewBox.play();

    }
    else {
        imageF1.src = "media/images/sebpit.jpg";
        document.getElementById('dotzTire').style.visibility="visible";
        document.getElementById('dotzDriver').style.visibility="visible";
        document.getElementById('dotzCockpit').style.visibility="visible";
        document.getElementById('dotzFrontwing').style.visibility="visible";
        document.getElementById('dotzBackwing').style.visibility="visible";
        document.getElementById('dotzPaddock').style.visibility="visible";
        document.getElementById('dotzCommentary').style.visibility="visible";
        document.getElementById('goBack').style.visibility="hidden";
        pitStop.play();
    }
}


function driverChange() {
    console.log("onclick okay");

    var imageF1 = document.getElementById('img1');
    var pitStop = new Audio("media/audio/pitstop.mp3");
    var crewBox = new Audio("media/audio/driver.mp3");

    if (imageF1.src.match("media/images/sebpit.jpg")) {
        imageF1.src = "media/images/sebfront.jpg";
        document.getElementById('dotzTire').style.visibility="hidden";
        document.getElementById('dotzDriver').style.visibility="hidden";
        document.getElementById('dotzCockpit').style.visibility="hidden";
        document.getElementById('dotzFrontwing').style.visibility="hidden";
        document.getElementById('dotzBackwing').style.visibility="hidden";
        document.getElementById('dotzPaddock').style.visibility="hidden";
        document.getElementById('dotzCommentary').style.visibility="hidden";
        document.getElementById('goBack').style.visibility="visible";
        crewBox.play();

    }
    else {
        imageF1.src = "media/images/sebpit.jpg";
        document.getElementById('dotzTire').style.visibility="visible";
        document.getElementById('dotzDriver').style.visibility="visible";
        document.getElementById('dotzCockpit').style.visibility="visible";
        document.getElementById('dotzFrontwing').style.visibility="visible";
        document.getElementById('dotzBackwing').style.visibility="visible";
        document.getElementById('dotzPaddock').style.visibility="visible";
        document.getElementById('dotzCommentary').style.visibility="visible";
        document.getElementById('goBack').style.visibility="hidden";
        pitStop.play();
    }
}

function cockpitChange() {
    console.log("onclick okay");

    var imageF1 = document.getElementById('img1');
    var pitStop = new Audio("media/audio/pitstop.mp3");
    var crewBox = new Audio("media/audio/cockpit.mp3");

    if (imageF1.src.match("media/images/sebpit.jpg")) {
        imageF1.src = "media/images/cockpit.png";
        document.getElementById('dotzTire').style.visibility="hidden";
        document.getElementById('dotzDriver').style.visibility="hidden";
        document.getElementById('dotzCockpit').style.visibility="hidden";
        document.getElementById('dotzFrontwing').style.visibility="hidden";
        document.getElementById('dotzBackwing').style.visibility="hidden";
        document.getElementById('dotzPaddock').style.visibility="hidden";
        document.getElementById('dotzCommentary').style.visibility="hidden";
        document.getElementById('goBack').style.visibility="visible";
        crewBox.play();

    }
    else {
        imageF1.src = "media/images/sebpit.jpg";
        document.getElementById('dotzTire').style.visibility="visible";
        document.getElementById('dotzDriver').style.visibility="visible";
        document.getElementById('dotzCockpit').style.visibility="visible";
        document.getElementById('dotzFrontwing').style.visibility="visible";
        document.getElementById('dotzBackwing').style.visibility="visible";
        document.getElementById('dotzPaddock').style.visibility="visible";
        document.getElementById('dotzCommentary').style.visibility="visible";
        document.getElementById('goBack').style.visibility="hidden";
        pitStop.play();
    }
}

function paddockChange() {
    console.log("onclick okay");

    var imageF1 = document.getElementById('img1');
    var pitStop = new Audio("media/audio/pitstop.mp3");
    var crewBox = new Audio("media/audio/boss.mp3");

    if (imageF1.src.match("media/images/sebpit.jpg")) {
        imageF1.src = "media/images/pitwall.jpg";
        document.getElementById('dotzTire').style.visibility="hidden";
        document.getElementById('dotzDriver').style.visibility="hidden";
        document.getElementById('dotzCockpit').style.visibility="hidden";
        document.getElementById('dotzFrontwing').style.visibility="hidden";
        document.getElementById('dotzBackwing').style.visibility="hidden";
        document.getElementById('dotzPaddock').style.visibility="hidden";
        document.getElementById('dotzCommentary').style.visibility="hidden";
        document.getElementById('goBack').style.visibility="visible";
        crewBox.play();

    }
    else {
        imageF1.src = "media/images/sebpit.jpg";
        document.getElementById('dotzTire').style.visibility="visible";
        document.getElementById('dotzDriver').style.visibility="visible";
        document.getElementById('dotzCockpit').style.visibility="visible";
        document.getElementById('dotzFrontwing').style.visibility="visible";
        document.getElementById('dotzBackwing').style.visibility="visible";
        document.getElementById('dotzPaddock').style.visibility="visible";
        document.getElementById('dotzCommentary').style.visibility="visible";
        document.getElementById('goBack').style.visibility="hidden";
        pitStop.play();
    }
}

function comChange() {
    console.log("onclick okay");

    var imageF1 = document.getElementById('img1');
    var pitStop = new Audio("media/audio/pitstop.mp3");
    var crewBox = new Audio("media/audio/commentator.mp3");

    if (imageF1.src.match("media/images/sebpit.jpg")) {
        imageF1.src = "media/images/seb2.jpg";
        document.getElementById('dotzTire').style.visibility="hidden";
        document.getElementById('dotzDriver').style.visibility="hidden";
        document.getElementById('dotzCockpit').style.visibility="hidden";
        document.getElementById('dotzFrontwing').style.visibility="hidden";
        document.getElementById('dotzBackwing').style.visibility="hidden";
        document.getElementById('dotzPaddock').style.visibility="hidden";
        document.getElementById('dotzCommentary').style.visibility="hidden";
        document.getElementById('goBack').style.visibility="visible";
        crewBox.play();

    }
    else {
        imageF1.src = "media/images/sebpit.jpg";
        document.getElementById('dotzTire').style.visibility="visible";
        document.getElementById('dotzDriver').style.visibility="visible";
        document.getElementById('dotzCockpit').style.visibility="visible";
        document.getElementById('dotzFrontwing').style.visibility="visible";
        document.getElementById('dotzBackwing').style.visibility="visible";
        document.getElementById('dotzPaddock').style.visibility="visible";
        document.getElementById('dotzCommentary').style.visibility="visible";
        document.getElementById('goBack').style.visibility="hidden";
        pitStop.play();
    }
}

function backChange() {
    console.log("onclick okay");

    var imageF1 = document.getElementById('img1');
    var pitStop = new Audio("media/audio/pitstop.mp3");
    var crewBox = new Audio("media/audio/sing.mp3");

    if (imageF1.src.match("media/images/sebpit.jpg")) {
        imageF1.src = "media/images/back.jpg";
        document.getElementById('dotzTire').style.visibility="hidden";
        document.getElementById('dotzDriver').style.visibility="hidden";
        document.getElementById('dotzCockpit').style.visibility="hidden";
        document.getElementById('dotzFrontwing').style.visibility="hidden";
        document.getElementById('dotzBackwing').style.visibility="hidden";
        document.getElementById('dotzPaddock').style.visibility="hidden";
        document.getElementById('dotzCommentary').style.visibility="hidden";
        document.getElementById('goBack').style.visibility="visible";
        crewBox.play();

    }
    else {
        imageF1.src = "media/images/sebpit.jpg";
        document.getElementById('dotzTire').style.visibility="visible";
        document.getElementById('dotzDriver').style.visibility="visible";
        document.getElementById('dotzCockpit').style.visibility="visible";
        document.getElementById('dotzFrontwing').style.visibility="visible";
        document.getElementById('dotzBackwing').style.visibility="visible";
        document.getElementById('dotzPaddock').style.visibility="visible";
        document.getElementById('dotzCommentary').style.visibility="visible";
        document.getElementById('goBack').style.visibility="hidden";
        pitStop.play();
    }
}

function frontChange() {
    console.log("onclick okay");

    var imageF1 = document.getElementById('img1');
    var pitStop = new Audio("media/audio/pitstop.mp3");
    var crewBox = new Audio("media/audio/podium.mp3");

    if (imageF1.src.match("media/images/sebpit.jpg")) {
        imageF1.src = "media/images/winner.jpg";
        document.getElementById('dotzTire').style.visibility="hidden";
        document.getElementById('dotzDriver').style.visibility="hidden";
        document.getElementById('dotzCockpit').style.visibility="hidden";
        document.getElementById('dotzFrontwing').style.visibility="hidden";
        document.getElementById('dotzBackwing').style.visibility="hidden";
        document.getElementById('dotzPaddock').style.visibility="hidden";
        document.getElementById('dotzCommentary').style.visibility="hidden";
        document.getElementById('goBack').style.visibility="visible";
        crewBox.play();

    }
    else {
        imageF1.src = "media/images/sebpit.jpg";
        document.getElementById('dotzTire').style.visibility="visible";
        document.getElementById('dotzDriver').style.visibility="visible";
        document.getElementById('dotzCockpit').style.visibility="visible";
        document.getElementById('dotzFrontwing').style.visibility="visible";
        document.getElementById('dotzBackwing').style.visibility="visible";
        document.getElementById('dotzPaddock').style.visibility="visible";
        document.getElementById('dotzCommentary').style.visibility="visible";
        document.getElementById('goBack').style.visibility="hidden";
        pitStop.play();
    }
}

function backButton() {
  var imageF1 = document.getElementById('img1');
  var pitStop = new Audio("media/audio/pitstop.mp3");

  imageF1.src = "media/images/sebpit.jpg";
  document.getElementById('dotzTire').style.visibility="visible";
  document.getElementById('dotzDriver').style.visibility="visible";
  document.getElementById('dotzCockpit').style.visibility="visible";
  document.getElementById('dotzFrontwing').style.visibility="visible";
  document.getElementById('dotzBackwing').style.visibility="visible";
  document.getElementById('dotzPaddock').style.visibility="visible";
  document.getElementById('dotzCommentary').style.visibility="visible";
  document.getElementById('goBack').style.visibility="hidden";
  pitStop.play();
}
