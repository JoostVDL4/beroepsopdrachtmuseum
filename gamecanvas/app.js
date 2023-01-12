drawCircle(100, 100, 80);
drawCircle(300, 100, 80);
drawCircle(500, 100, 80);
drawCircle(100, 300, 80);
drawCircle(300, 300, 80);
drawCircle(500, 300, 80);
drawCircle(100, 500, 80);
drawCircle(300, 500, 80);
drawCircle(500, 500, 80);

function drawCircle(x, y, r)
{
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(x, y, r, 0, 2 * Math.PI);
ctx.stroke();
}


const i = Math.floor(Math.random() * holes.length)
    const hole = holes[i]
    let timer = null;

    const img = document.createElement("img")
    img.classList.add("mole")
    img.src = "images/mole.png"