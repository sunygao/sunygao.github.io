window.addEventListener("load", function() {
  document.getElementById("doorbell").addEventListener("click", answerDoor);

  document.getElementById("doorbell").addEventListener("animationend", spinEnd);

  function answerDoor() {
    document.getElementById('doorbell').className = 'classname';
  }
  
  function spinEnd() {
    window.location.href = 'index.html';
  }
})
