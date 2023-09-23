const btn = document.getElementById("button");
const list = document.getElementById("list");

btn.addEventListener("click",() => {
 list.classList.toggle("hidden")
});
btn.addEventListener("click", () => {
    window.setTimeout(() => {
        alert("1.5秒だよ");
    }, 1500);
});




let elem1 = document.getElementById("stealth");
let elem2 = document.getElementById("link_view");
let elem3 = document.getElementById("link_hidden");
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

function qq(){
    let obj = document.getElementsByClassName("pochi")[0];
    obj.style.opacity = 0.1;
}


