let inAdultos = document.getElementById("adulto");
let inCrianca = document.getElementById("crianca");
let inDuracao = document.getElementById("duracao");
let carne = document.getElementById("carne");
let cerveja = document.getElementById("cerveja")
let refrigerante = document.getElementById("refrigerante");
let levantamentoButton = document.getElementById("levantamento");
const contentCarne = document.getElementById("contentCarne");
const contentCerveja  = document.getElementById("contentCerveja");
const contentRefrigerante =  document.getElementById("contentRefrigerante")
let qtdCarne;
let qtdCerveja;
let qtdRefrigerante;


levantamentoButton.addEventListener('click', () => {
    let adulto = Number(inAdultos.value);
    let crianca = Number(inCrianca.value);
    let duracao = Number(inDuracao.value);

    let resultCarne = adulto * carnePP(duracao) + (crianca / 2) * carnePP(duracao)
    let resultCerveja = adulto * cervejaPP(duracao) + (crianca / 2) * cervejaPP(duracao)
    let resultRefrigerante = adulto * refrigerantePP(duracao) + (crianca / 2) * refrigerantePP(duracao)

    let writeCarne = "Serão necessários " + resultCarne / 1000 + "kg de carne";
    let writeCerveja = "Serão necessários " + resultCerveja / 1000 + " litros de cerveja";
    let writeRefrigerante = "Serão necessários " + resultRefrigerante / 1000 + " litros de Refrigerante";

    // contentCarne.innerHTML = writeCarne
    // contentCerveja.innerHTML = writeCerveja
    // contentRefrigerante.innerHTML = writeRefrigerante

    // console.log(writeCarne, writeCerveja, writeRefrigerante)
    
    window.location.href = './resultado.html';
})


function carnePP(tempo) {

    if(tempo < 6){
        return qtdCarne = 400
    }
    else if (tempo <= 0) {
        return qtdCarne = "Não foi possível calcular. Número inválido!"
    }
    else {
        return qtdCarne = 650
    }

}

function cervejaPP(tempo) {
    if(tempo < 6){
        return qtdCerveja = 1200
    }
    else if (tempo <= 0) {
        return qtdCerveja = "Não foi possível calcular. Número inválido!"
    }
    else {
        return qtdCerveja = 2000
    }
}

function refrigerantePP(tempo) {
    if(tempo < 6){
        return qtdRefrigerante = 1000
    }
    else if (tempo<= 0) {
        return qtdRefrigerante = "Não foi possível calcular. Número inválido!"
    }
    else {
        return qtdRefrigerante = 1500
    }
}


// style

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