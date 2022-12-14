
const btn = document.querySelector("#button");

const randonColor = () => {
    let rand = "0123456789ABCDEF"
    let con = "#";
    for (let i = 0; i < 6; i++) {
        con = con + rand[Math.floor(Math.random() * 16)];
    } return con
}

function change() {
    document.getElementById("canvas").style.backgroundColor = randonColor()
}

btn.addEventListener("click", () => { change() });
