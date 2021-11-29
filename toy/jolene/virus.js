    
  window.addEventListener("load", function() {
    var image = ['media/virus01.gif', 'media/virus03.png', 'media/virus03.gif','media/virus05.gif','media/virus06.gif']; 

    let btn = document.createElement("button");
    btn.className="btn";
    btn.innerHTML = "Click here to disable Adblock";
    var body = document.getElementsByTagName("body")[0];
    body.appendChild(btn);
    btn.addEventListener("click",function() {
    var num = Math.floor( Math.random() * 5);
    var elem = document.createElement("img");
    elem.addEventListener('click', disappear);
    var container = document.getElementById("page_container");
    var availW = container.offsetWidth  - 400;
    var availH = container.offsetHeight  - 400;
    var randomY = Math.round(Math.random() * availH) + 'px';
    var randomX = Math.round(Math.random() * availW) + 'px';
    elem.src = image[num];
    elem.setAttribute("height", "450px");
    elem.setAttribute("width", "450px");
    elem.style.left = randomX;
    elem.style.top = randomY;
    container.appendChild(elem);
    waitSecond();
  })

  
  


   
  
      function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }
      function disappear(e){
       e.target.style.display = 'none';
      }
  
     

 
      
      async function waitSecond() {
        await sleep(500);
        btn.click();
      }
    }); 