const bulb = document.getElementById("bulb")
const sw = document.querySelector("#switch")

var flag = 0
sw.addEventListener("click", ()=>{
    if(flag == 0){
        bulb.style.backgroundColor = "yellow"
        bulb.innerHTML = "Bulb is on"
        bulb.style.color = "black"
        bulb.style.fontWeight = "bold"
        sw.style.backgroundColor= "red"
        flag = 1
    }
    else{
        bulb.style.backgroundColor = "black"
        bulb.innerHTML = "Bulb is off"
        bulb.style.color = "yellow"
        sw.style.backgroundColor = "green"
        flag = 0
    }
    
})