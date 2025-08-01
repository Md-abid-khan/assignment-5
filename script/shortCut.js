function getValueById(id){
    const value = document.getElementById(id).innerText;
    const valueInNumber = parseInt(value);
    return valueInNumber;
}

function recentTimeDate(){
    const time = new Date();
    const stringTime = time.toLocaleString();
    // const tide = stringTime.classList.add("b")
    document.getElementById("timeDate").textContent = stringTime;
}
recentTimeDate();
setInterval(recentTimeDate, 1000);

function clickingTime(){
    const clickTime = new Date();
    const clickTimeString = clickTime.toLocaleTimeString();
    return clickTimeString;
}

function changeColor(){
    const color = Math.floor(Math.random()* 0xffffff).toString(16);
    document.body.style.background = `#${color}`;
}