const clock = document.getElementById("clock");
const clock2 = document.getElementById("clock2");





setInterval(function(){
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
    clock2.innerHTML = date.toLocaleDateString();
}, 1000);
