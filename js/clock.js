
const clock = document.querySelector("h2#clock")

function getClock() {
    const date = new Date();
    clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}



getClock();
setInterval(getClock, 1000)




/*interval(함수, 시간) => 시간마다 함수 실행
function sayHello(){
    console.log("hello");
}

setInterval(sayHello, 1000);


//timeout 
setTimeout(sayHello, 5000)*/



//padStart
