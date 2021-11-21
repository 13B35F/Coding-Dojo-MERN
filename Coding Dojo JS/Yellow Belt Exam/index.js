const donateButtonElem = document.querySelector("#donate");

donateButtonElem.addEventListener("click", function () {
  donateButtonElem.outerHTML = "";
});

function like(id) {
  console.log("like function", id);
  const targetElem = document.getElementById("count" + id);
  const count = parseInt(targetElem.innerHTML, 10); // string to interger
  targetElem.innerHTML = count + 1;
}

var pettings = document.querySelectorAll(".Petting"); // array[htmlElement]
for (var i = 0; i < pettings.length; i++) {
  pettings[i].addEventListener("click", function () {
    like(this.id); // "2"
  });
}

function pet(element) {
  alert("You picked a " + element.value);
}
