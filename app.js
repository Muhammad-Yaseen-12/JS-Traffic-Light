
let isGreen = false;
let car = document.getElementById("car");
let interval;

function redbtn() {
    document.getElementById("red-light").classList.add("active");
    document.getElementById("yellow-light").classList.remove("active");
    document.getElementById("green-light").classList.remove("active");

    isGreen = false;
    car.style.animationPlayState = 'paused';
    clearInterval(interval);
}

function yellowbtn() {
    document.getElementById("yellow-light").classList.add("active");
    document.getElementById("red-light").classList.remove("active");
    document.getElementById("green-light").classList.remove("active");

    isGreen = false;
    car.style.animationPlayState = 'paused'; 
    clearInterval(interval);
}

function greenbtn() {
    document.getElementById("green-light").classList.add("active");
    document.getElementById("red-light").classList.remove("active");
    document.getElementById("yellow-light").classList.remove("active");

    isGreen = true;
    moveCar();
}

function moveCar() {
    if (interval) {
        clearInterval(interval);
    }

    interval = setInterval(function () {
        if (isGreen) {
            car.style.animationPlayState = 'running';
        } else {
            car.style.animationPlayState = 'paused';
            clearInterval(interval);
        }
    }, 100);
}
