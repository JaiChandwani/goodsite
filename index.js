noBtn.addEventListener('mouseover', () => {
    let noBtn = document.getElementById("noBtn");
    noBtn.innerHTML = "no"
    if (noBtn.style.left == "0px") {
        noBtn.style.left = "20%";
    }
    else {
        noBtn.style.left = "0px"

    }
})
noBtn.addEventListener('click', () => {
    let noBtn = document.getElementById("noBtn");
    noBtn.innerHTML = "choose again"
})
var yesBtn = document.getElementById("yesBtn");
yesBtn.addEventListener('click',()=>{
    document.getElementById("ask").innerText = "I love you too :) let's fix a date"
    document.getElementById("noBtn").style.visibility = "hidden"
    document.getElementById("yesBtn").style.visibility = "hidden"
    document.getElementById("call").style.visibility="visible"
    
})
