window.addEventListener("load", function() {
  
    document.getElementById("hours").addEventListener("input", setTime);
    document.getElementById("minutes").addEventListener("input", setTime);
    document.getElementById("seconds").addEventListener("input", setTime);
    document.getElementById("start").addEventListener("click", countdown);
    
    document.getElementById("chrys").style.cursor = 'pointer';
    document.getElementById("rose").style.cursor = 'pointer';
    document.getElementById("daisy").style.cursor = 'pointer';
    document.getElementById("violet").style.cursor = 'pointer';
    
    document.getElementById("chrys").addEventListener("click", chrysSequence);
    document.getElementById("rose").addEventListener("click", roseSequence);
    document.getElementById("daisy").addEventListener("click", daisySequence);
    document.getElementById("violet").addEventListener("click", violetSequence);
    
    var h;
    var m;
    var s;
    var boxElements = document.getElementsByClassName('box');
    
    function shuffle(array) {
      let currentIndex = array.length,  randomIndex;
      
      while (currentIndex != 0) {
        
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
      
        [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
      }
      
      return array;
    }
  
  var arr = [1, 2, 3, 4];
  var shuffledArr = shuffle(arr);
  for (let i = 0; i < boxElements.length; i++) {
     boxElements[i].style.order = shuffledArr[i];
    
  } 
  console.log(arr)
    
    function setTime() {
      
      var h = document.getElementById("hours").valueAsNumber;
      var m = document.getElementById("minutes").valueAsNumber;
      var s = document.getElementById("seconds").valueAsNumber;
      console.log({h, m, s})
    }
    
  function countdown() {
      document.getElementById("header").innerHTML = 'now we wait :)';
      var h = document.getElementById("hours").valueAsNumber;
      var m = document.getElementById("minutes").valueAsNumber;
      var s = document.getElementById("seconds").valueAsNumber;
      
      var t = ((h*3600000) + (m*60000) + (s*1000)) / 4;
      
      console.log(t);

      var n = -1;

      var timesRun = 0;
      var interval = setInterval(function(){
      timesRun += 1;
      var stage = ["images/1.svg", "images/2.svg", "images/3.svg"];
      n = (n + 1) % stage.length;
      console.log(n);
      document.getElementById('rose-img').src = stage[n];
      document.getElementById('daisy-img').src = stage[n];
      document.getElementById('violet-img').src = stage[n];
      document.getElementById('chrys-img').src = stage[n];       
      if(timesRun === 4){
          clearInterval(interval);
          document.getElementById("rose-img").src = 'images/rose-grown.svg';
          document.getElementById("daisy-img").src = 'images/daisy-grown.svg';
          document.getElementById("violet-img").src = 'images/violet-grown.svg';
          document.getElementById("chrys-img").src = 'images/chrys-grown.svg';
      }
      
      }  
    , t);
  }
    
  function chrysSequence() {
    document.getElementById("header").innerHTML = 'hit start when you are ready to water :)';
    document.getElementById("timer-container").style.opacity = '1';
    document.getElementById("rose").style.display = 'none';
    document.getElementById("daisy").style.display = 'none';
    document.getElementById("violet").style.display = 'none';
    document.getElementById("chrys").style.height = '96%';
    document.getElementById("chrys").style.width = '96%';
    document.getElementById("chrys-img").src = 'images/seeds-1-planted.svg';
    document.getElementById("chrys").style.borderRadius = '5%';
    document.getElementById("chrys").style.cursor = 'default';
    document.getElementById("chrys").removeEventListener("click", chrysSequence);
  }
    
  function roseSequence() {
    document.getElementById("header").innerHTML = 'hit start when you are ready to water :)';
    document.getElementById("timer-container").style.opacity = '1';
    document.getElementById("chrys").style.display = 'none';
    document.getElementById("daisy").style.display = 'none';
    document.getElementById("violet").style.display = 'none';
    document.getElementById("rose").style.height = '96%';
    document.getElementById("rose").style.width = '96%';
    document.getElementById("rose-img").src = 'images/seeds-2-planted.svg';
    document.getElementById("rose").style.borderRadius = '5%';
    document.getElementById("rose").style.cursor = 'default';
    document.getElementById("rose").removeEventListener("click", roseSequence);
  }
    
  function daisySequence() {
    document.getElementById("header").innerHTML = 'hit start when you are ready to water :)';
    document.getElementById("timer-container").style.opacity = '1';
    document.getElementById("rose").style.display = 'none';
    document.getElementById("chrys").style.display = 'none';
    document.getElementById("violet").style.display = 'none';
    document.getElementById("daisy").style.height = '96%';
    document.getElementById("daisy").style.width = '96%';
    document.getElementById("daisy-img").src = 'images/seeds-3-planted.svg';
    document.getElementById("daisy").style.borderRadius = '5%';
    document.getElementById("daisy").style.cursor = 'default';
    document.getElementById("daisy").removeEventListener("click", daisySequence);
  }
    
  function violetSequence() {
    document.getElementById("header").innerHTML = 'hit start when you are ready to water :)';
    document.getElementById("timer-container").style.opacity = '1';
    document.getElementById("rose").style.display = 'none';
    document.getElementById("daisy").style.display = 'none';
    document.getElementById("chrys").style.display = 'none';
    document.getElementById("violet").style.height = '96%';
    document.getElementById("violet").style.width = '96%';
    document.getElementById("violet-img").src = 'images/seeds-4-planted.svg';
    document.getElementById("violet").style.borderRadius = '5%';
    document.getElementById("violet").style.cursor = 'default';
    document.getElementById("violet").removeEventListener("click", violetSequence);
  }
    
  })