var btn = document.querySelector("button");
btn.addEventListener("click", createSquare);
let section = document.getElementById("section");

let total = 0;
let totalShow = 0

function createSquare() {
    console.log('kwadracik');
    total++
    totalShow++
    var textnode = document.createTextNode(totalShow);

    if (total === 5) {
        div2 = document.createElement("div");
        section.appendChild(div2);
        div2.classList.add("mystyle");
        div2.appendChild(textnode);
        total = 0;
    } else {
        div = document.createElement("div");
        section.appendChild(div);
        div.appendChild(textnode);
    }
    console.log(total);
}