window.addEventListener("load", function() {

    window.addEventListener('scroll', disableScroll);
    function disableScroll() {
        window.scrollTo(0,0);
      }

      window.addEventListener('click', hideText);
      function hideText(e) {
          e.target.getElementById="body"
          document.getElementById("text").style.display = "none";
      }

    
    var soundOne = new Audio("sounds/202093__spookymodem__bottle-shattering.wav");
        soundOne.src = "sounds/202093__spookymodem__bottle-shattering.wav"; 

    var soundTwo = new Audio('sounds/330800__czarcazas__shattering-glass-small.mp3');
    soundTwo.src = "sounds/330800__czarcazas__shattering-glass-small.mp3";
    
    var soundThree = new Audio("sounds/422633__aurelon__break-something-ice-glass.flac");
        soundThree.src = "sounds/422633__aurelon__break-something-ice-glass.flac"; 

    var soundFour = new Audio('sounds/422633__aurelon__break-something-ice-glass.flac');
    soundFour.src = "sounds/422633__aurelon__break-something-ice-glass.flac";


    var soundArray = [
        soundOne,
        soundTwo,
        soundThree,
        soundFour
     ] 
     var currentIndex = 0;
     var currentSound = soundArray[currentIndex];




    var all_shards = document.getElementsByClassName("shard")
    for (let i = 0; i < all_shards.length; i++) {

        all_shards[i].addEventListener("mouseover",shatter);
        
      }



    function shatter(e){
        e.target.classList.add("running")

        currentSound.play();

        findNextSound();

    }

   


    function findNextSound() {
        if(currentIndex === soundArray.length - 1) {
           currentIndex = 0;
           currentSound = soundArray[currentIndex];
        } else {
           var nextIndex = currentIndex + 1;
           currentSound = soundArray[nextIndex];
           currentIndex = nextIndex;
        }
     }  


   
});