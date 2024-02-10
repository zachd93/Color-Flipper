colors = ['red', 'lavender', 'turquoise'];

function getNumber() {
    let randNumber =  Math.floor(Math.random() * colors.length);
    return randNumber
}

let changeColorText = document.getElementById("btn").addEventListener("click", function() {
    number = getNumber();
    document.querySelector("body").style.backgroundColor = colors[number];
    document.getElementById("display-box").innerText = `Background Color : ${colors[number]}`;
    console.log("Pressed");
})

