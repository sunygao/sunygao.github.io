window.addEventListener("load", function() {
    var element = document.getElementById('img1');
    var homeImage = document.getElementById('home-image');
    var count = 0;
    var number = document.getElementById('number');
    var started = 0;
    //count variable set to 0
    
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

    function onKeyDown(evt) {

            if (started == 0){
            number.textContent = count;    
            }
            if (started == 1)
            countNumber();
            else 
            {
            	started = 1;
            	home-image.style.display="none";
            	element.style.display="inline"
            }

    
    function countNumber() {
        count = count + 1;
        number.textContent = count;
    }



    

});


