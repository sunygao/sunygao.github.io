

window.addEventListener("load", function() {
    //event
    //--- "keydown" event

    //function
    //--- change to the next image 

    //function
    //--- count the finish percentage of each press 

    //function
    //--- document the times of space pressed

    var element = document.getElementById('myimages');
    var title = document.getElementById('title');
    var homeImage = document.getElementById('home-image');
    var count = 0;
    var number = document.getElementById('number');
    var started = 0;
    //count variable set to 0

    //make variables for images
    var spacebar = document.getElementById("home-image");
    var one = document.getElementById("myimages");

    //event listeners
    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('keyup', onKeyUp);
    document.body.onkeydown = function (event) {
        var e = window.event || event;
        if(e.preventDefault){
            e.preventDefault();
        }else{
            window.event.returnValue = false;
        }
    }

    //functions
     function onKeyDown(evt) {
        if(evt.keyCode === 32) {       	        	
            if (started == 0){
            number.textContent = count;    
            }
        }
            if (started == 1)
            countNumber();
            else 
            {
            	started = 1;
            	homeImage.style.display="none";
                title.style.display="none";
            	element.style.display="inline"
            }
        
            
            if (count < 5)
            element.src="images/image1.png";
            if (count >= 5 && count < 10)
            element.src="images/2.png";
            if (count >= 10)
            element.src="images/6.png";

        }
     

    function onKeyUp(evt) {
        if(evt.keyCode === 32) {
            if (count < 5)
            element.src="images/7.png";
            if (count >= 5 && count < 10)
            element.src="images/image1.png";
            if (count >= 10)
            element.src="images/8.png";

        }
    }

    function countNumber() {
        count = count + 1;
        number.textContent = count;
    
}



    
});