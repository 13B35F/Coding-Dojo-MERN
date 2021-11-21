function logout(){
    document.querySelector("#btn").innerHTML = "Logout"
}
    document.querySelector("#btn").addEventListener("click", logout)
    
function removeadd(){
    document.querySelector("#def-btn").outerHTML = "" 
}
    document.querySelector("#def-btn").addEventListener("click", removeadd)
    
function liked(){
    document.querySelector("#like1").innerHTML = alert("Ninja was liked")
}
    document.querySelector("#like1").addEventListener("click", liked)
function liked(){
    document.querySelector("#like2").innerHTML = alert("Ninja was liked")
}
    document.querySelector("#like2").addEventListener("click", liked)