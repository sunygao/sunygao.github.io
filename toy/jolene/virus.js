    
    var image = ['media/virus01.gif', 'media/virus03.png', 'media/virus03.gif']; 

    window.randomImage = function() {
        var num = Math.floor( Math.random() * 3);
        var elem = document.createElement("img");
        var container = document.getElementById("page_container");
        var availW = container.offsetWidth  - 400;
        var availH = container.offsetHeight  - 400;
        var randomY = Math.round(Math.random() * availH) + 'px';
        var randomX = Math.round(Math.random() * availW) + 'px';
        elem.src = image[num];
        elem.setAttribute("height", "400");
        elem.setAttribute("width", "400");
        elem.style.left = randomX;
        elem.style.top = randomY;
        container.appendChild(elem);
        waitSecond();
    }
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }
      
      async function waitSecond() {
        await sleep(500);
        randomImage();
      }
  