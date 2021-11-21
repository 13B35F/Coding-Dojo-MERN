function incrementLike(id) {
    console.log("like function", id);
    const targetElem = document.getElementById("count" + id);
    const count = parseInt(targetElem.innerHTML, 10);
    targetElem.innerHTML = count + 1;
    }
  
  var likeButtons = document.querySelectorAll(".like");
  console.log(likeButtons);
  
    likeButtons.forEach(function (elem) {
    elem.addEventListener("click", function () {
    incrementLike(elem.id);
        });
    });

