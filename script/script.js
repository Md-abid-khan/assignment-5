document.getElementById("discover")
.addEventListener("click",function(){
    window.location.href = "../discover.html"
})

function clickToAddRemove(id){
    const total = document.getElementById(id)
         .addEventListener("click", function(){
                alert("Board Updated Successfully")
    const minus = getValueById("minus");
    const plus = getValueById("plus");
    const gearDown = minus - 1;
    const gearUp = plus + 1;
    // gearDown.style.text = "bold"
    document.getElementById("minus").innerText = gearDown;
    document.getElementById("plus").innerText = gearUp;

    const valued = document.getElementById(id).value;

    // const clickTime = recentTimeDate();
    // console.log(clickTime)

    const history = document.getElementById("history");

    const P = document.createElement("p");
    P.innerText = `
        You have completed the task ${valued} at ${clickingTime()}  
    `
    P.classList.add("newPClass")
    history.appendChild(P);

    if( minus === 1 ){
        alert("Congrates!!! You have completed all the current task")
    }
    else{
        
    }
    
    
})
return total;
}
const see = clickToAddRemove("complete");
const see1 = clickToAddRemove("complete1");
const see2 = clickToAddRemove("complete2");
const see3 = clickToAddRemove("complete3");
const see4 = clickToAddRemove("complete4");
const see5 = clickToAddRemove("complete5");

document.getElementById("clearHistory").addEventListener("click", function(){
    document.getElementById("history").style.display = "none";
    
})
document.getElementById("changeBgColor").addEventListener("click", function(){
    document.getElementById("body").style.backgroundColor = changeColor();
})




