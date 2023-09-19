const btn = document.getElementById("button");
const list = document.getElementById("list");

btn.addEventListener("click",function(){
 list.classList.toggle("hidden")
});


var elem1 = document.getElementById("stealth");
var elem2 = document.getElementById("link_view");
var elem3 = document.getElementById("link_hidden");
function toggle_view(){
    elem1.style.display = "";
    elem2.style.display = "none";
    elem3.style.display = "";
}
function toggle_hidden(){
    elem1.style.display = "none";
    elem2.style.display = "";
    elem3.style.display = "none";
}

