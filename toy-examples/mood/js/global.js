window.addEventListener("load", function() {

    var containerWidth = document.getElementById('container').clientWidth;
    var containerHeight = document.getElementById('container').clientHeight;

    var leftRight = containerWidth*.5;
    var topBottom = containerHeight*.5;
    var leftRightQuarter = leftRight*.5;
    var topBottomQuarter = topBottom*.5;





    //show color function
    function follow(e){

        var x = e.offsetX;
        var y = e.offsetY;

        //grid
        var zero = x < leftRightQuarter && y < topBottomQuarter;
        var one = x > leftRightQuarter && x < leftRight; 
        var two = x > leftRight && x < leftRightQuarter*3;
        var three = x > leftRightQuarter*3 && y < topBottomQuarter;
        var four = y > topBottomQuarter && y < topBottom;
        var eight = y > topBottom && y < topBottomQuarter*3;
        var twelve = x < leftRightQuarter && y > topBottomQuarter*3;
        var thirteen = y > topBottomQuarter*3;
        var fifteen = x > leftRightQuarter*3 && y > topBottomQuarter*3;
        

        //0
        if (zero == true) {
            document.getElementById("zero-video").style.display="block";
        }
        else{
            document.getElementById("zero-video").style.display="none";
        }

        //1 
        if (one == true && y < topBottomQuarter){
            document.getElementById("one-video").style.display="block";
        }
        else{
            document.getElementById("one-video").style.display="none";
        }
        //2
        if (two == true && y < topBottomQuarter){
            document.getElementById("two-video").style.display="block";
        }
        else{
            document.getElementById("two-video").style.display="none";
        }

        //3
        if (three == true){
            document.getElementById("three-video").style.display="block";
        }
        else{
            document.getElementById("three-video").style.display="none";
        }
        
        //4
        if (four == true && x < leftRightQuarter){
            document.getElementById("four-video").style.display="block";        
        }
        else{
            document.getElementById("four-video").style.display="none";
        }

        //5
        if (four == true && one == true){
            document.getElementById("five-video").style.display="block";
        }
        else{
            document.getElementById("five-video").style.display="none";
        }

        //6
        if (two == true && four == true){
            document.getElementById("six-video").style.display="block";        
        }
        else{
            document.getElementById("six-video").style.display="none";
        }
        //7
        if (four == true && x > leftRightQuarter*3){
            document.getElementById("seven-video").style.display="block";        
        }
        else{
            document.getElementById("seven-video").style.display="none";
        }
        //8
        if (eight == true && x < leftRightQuarter){
            document.getElementById("eight-video").style.display="block";
        }
        else{
            document.getElementById("eight-video").style.display="none";
        }
        //9
        if (eight == true && one == true){
            document.getElementById("nine-video").style.display="block";
        }
        else{
            document.getElementById("nine-video").style.display="none";
        }
        //10
        if (eight == true && two == true){
            document.getElementById("ten-video").style.display="block";
        }
        else{
            document.getElementById("ten-video").style.display="none";
        }
        //11
        if (eight == true && x > leftRightQuarter*3){
            document.getElementById("eleven-video").style.display="block";
        }
        else{
            document.getElementById("eleven-video").style.display="none";
        }
        //12
        if (twelve == true){
            document.getElementById("twelve-video").style.display="block";
        }
        else{
            document.getElementById("twelve-video").style.display="none";
        }
        //13
        if (one == true && thirteen == true){
            document.getElementById("thirteen-video").style.display="block";
        }
        else{
            document.getElementById("thirteen-video").style.display="none";
        }
        //14 
        if (two == true && thirteen == true){
            document.getElementById("fourteen-video").style.display="block";
        }
        else{
            document.getElementById("fourteen-video").style.display="none";
        }
        //15
        if (fifteen == true){
            document.getElementById("fifteen-video").style.display="block";
        }
        else{
            document.getElementById("fifteen-video").style.display="none";
        }
      
    }

    document.getElementById("container").addEventListener('mousemove', follow) 
  })











//resize

window.addEventListener("resize", function() {

    var containerWidth = document.getElementById('container').clientWidth;
    var containerHeight = document.getElementById('container').clientHeight;

    var leftRight = containerWidth*.5;
    var topBottom = containerHeight*.5;
    var leftRightQuarter = leftRight*.5;
    var topBottomQuarter = topBottom*.5;

    //store all .colors in array
    var colorList = [];
    (function(){
        var elements = document.getElementsByClassName("colors");
        for (var i=0; i < elements.length; i++){
            colorList.push(elements[i].innerHTML);
        }
    })();



    //show color function
    function follow(e){

        var x = e.offsetX;
        var y = e.offsetY;

        //grid
        var zero = x < leftRightQuarter && y < topBottomQuarter;
        var one = x > leftRightQuarter && x < leftRight; 
        var two = x > leftRight && x < leftRightQuarter*3;
        var three = x > leftRightQuarter*3 && y < topBottomQuarter;
        var four = y > topBottomQuarter && y < topBottom;
        var eight = y > topBottom && y < topBottomQuarter*3;
        var twelve = x < leftRightQuarter && y > topBottomQuarter*3;
        var thirteen = y > topBottomQuarter*3;
        var fifteen = x > leftRightQuarter*3 && y > topBottomQuarter*3;
        

        //0
        if (zero == true) {
            document.getElementById("zero-video").style.display="block";
        }
        else{
            document.getElementById("zero-video").style.display="none";
        }

        //1 
        if (one == true && y < topBottomQuarter){
            document.getElementById("one-video").style.display="block";
        }
        else{
            document.getElementById("one-video").style.display="none";
        }
        //2
        if (two == true && y < topBottomQuarter){
            document.getElementById("two-video").style.display="block";
        }
        else{
            document.getElementById("two-video").style.display="none";
        }

        //3
        if (three == true){
            document.getElementById("three-video").style.display="block";
        }
        else{
            document.getElementById("three-video").style.display="none";
        }
        
        //4
        if (four == true && x < leftRightQuarter){
            document.getElementById("four-video").style.display="block";        
        }
        else{
            document.getElementById("four-video").style.display="none";
        }

        //5
        if (four == true && one == true){
            document.getElementById("five-video").style.display="block";
        }
        else{
            document.getElementById("five-video").style.display="none";
        }

        //6
        if (two == true && four == true){
            document.getElementById("six-video").style.display="block";        
        }
        else{
            document.getElementById("six-video").style.display="none";
        }
        //7
        if (four == true && x > leftRightQuarter*3){
            document.getElementById("seven-video").style.display="block";        
        }
        else{
            document.getElementById("seven-video").style.display="none";
        }
        //8
        if (eight == true && x < leftRightQuarter){
            document.getElementById("eight-video").style.display="block";
        }
        else{
            document.getElementById("eight-video").style.display="none";
        }
        //9
        if (eight == true && one == true){
            document.getElementById("nine-video").style.display="block";
        }
        else{
            document.getElementById("nine-video").style.display="none";
        }
        //10
        if (eight == true && two == true){
            document.getElementById("ten-video").style.display="block";
        }
        else{
            document.getElementById("ten-video").style.display="none";
        }
        //11
        if (eight == true && x > leftRightQuarter*3){
            document.getElementById("eleven-video").style.display="block";
        }
        else{
            document.getElementById("eleven-video").style.display="none";
        }
        //12
        if (twelve == true){
            document.getElementById("twelve-video").style.display="block";
        }
        else{
            document.getElementById("twelve-video").style.display="none";
        }
        //13
        if (one == true && thirteen == true){
            document.getElementById("thirteen-video").style.display="block";
        }
        else{
            document.getElementById("thirteen-video").style.display="none";
        }
        //14 
        if (two == true && thirteen == true){
            document.getElementById("fourteen-video").style.display="block";
        }
        else{
            document.getElementById("fourteen-video").style.display="none";
        }
        //15
        if (fifteen == true){
            document.getElementById("fifteen-video").style.display="block";
        }
        else{
            document.getElementById("fifteen-video").style.display="none";
        }
      
    }

    document.getElementById("container").addEventListener('mousemove', follow) 
  })
