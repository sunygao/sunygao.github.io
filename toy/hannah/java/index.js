window.addEventListener("load", function() {
    document.getElementById("eye").addEventListener("click", playEye);

    function playEye() {
        var audio = document.getElementById("eyeAudio");
        audio.play();
        audio.volume = .6;

        var audio = document.getElementById("ambientAudio");
        audio.play();
        audio.volume = .4;
    }

    document.getElementById("feather").addEventListener("click", playFeather);
  
    function playFeather() {
        var audio = document.getElementById("featherAudio");
        audio.play();
    }
    
    document.getElementById("globe").addEventListener("click", playGlobe);
  
    function playGlobe() {
        var audio = document.getElementById("globeAudio");
        audio.play();
    }

    document.getElementById("howl").addEventListener("click", playHowl);
  
    function playHowl() {
        var audio = document.getElementById("howlAudio");
        audio.play();
        audio.volume= .5;
    }

    document.getElementById("toy").addEventListener("click", playToy);
  
    function playToy() {
        var audio = document.getElementById("toyAudio");
        audio.play();
    }
  })
