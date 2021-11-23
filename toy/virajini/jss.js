// window.addEventListener("load", function() {
//    function split () {
//        document.getElementById("")
//    }
// });

window.addEventListener('click', (e) => {
    console.log(e.target);
    let idname = e.target.getAttribute('id'); 
    console.log(idname);

    var Max = 360;

    var Min = 10;
    let degree = Math.floor((Math.random() *(Max - Min + 1) + Min));

    console.log(degree);

    // document.getElementById(idname).style.opacity = 0;

    document.getElementById(idname).style.transform = `rotate(${degree}deg)`;

    document.getElementById(idname).classList.add("fall");

});
