const meat = document.getElementById("carne")
const beer = document.getElementById("cerveja")
const soda = document.getElementById("refrigerante")


meat.addEventListener('click', () => {
    if(meat.style.background == "rgb(166, 28, 40)") {
        meat.style.background = "black"
    }
    else{meat.style.background = "rgb(166, 28, 40)"}
})

beer.addEventListener('click', () => {
    if (beer.style.background == "rgb(166, 28, 40)") {
        beer.style.background = "black"
    }
    else { beer.style.background = "rgb(166, 28, 40)"}
})

soda.addEventListener('click', () => {
    if(soda.style.background == "rgb(166, 28, 40)") {
        soda.style.background = "black"
    }
    else{soda.style.background = "rgb(166, 28, 40)"}
})