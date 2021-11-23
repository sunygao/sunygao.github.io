this.window.addEventListener("keydown", keyListen);
var z=0;
  function keyListen(){
    
    if (keyListen.keyCode !=0) {  
        z++;   
      
      console.log(z);
    }

    if(z==20){
        location.href = "index.html";
    }


  }