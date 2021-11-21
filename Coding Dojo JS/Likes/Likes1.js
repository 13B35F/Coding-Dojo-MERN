var cnt1 = 0;
function like(id){
    document.getElementById(id).innerHTML = cnt1 + " Like(s)";
}
for (var i = 0; i < hearts.length; i++){
    hearts[i].addeventlistner 
    ("click", function () {like(this.id)})
}      
// cnt1++;
// document.querySelector("#heart").addEventListener
// ("click", function (){like("count")})