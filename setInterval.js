console.log("setInterval");
const displayNumber = document.getElementById('displayNumber');


let number = 0;

document.getElementById('btn-start').addEventListener('click',function(){
    const intervalId = setInterval(() => {
        number ++;
        displayNumber.innerText = number;
        const btnSTop = document.getElementById('btn-stop');
        btnSTop.addEventListener('click',function(){
            clearInterval(intervalId);
        })
        document.getElementById('btn-reset').addEventListener('click',function(){
            number = 0;
            console.log(number);
            displayNumber.innerText = number;
        })
    },500);
})