
/*Variaveis*/
let chave = "4ea1c3cd6201c5ac92a6689bb1e2379a"

function colocarnatela(dados) {
console.log(dados)
document.querySelector(".cidades").innerHTML = "Tempo em " + dados.name
document.querySelector(".graus").innerHTML = Math.floor(dados.main.temp) + "°C"
document.querySelector(".clain").innerHTML = dados.weather[0].description
document.querySelector(".icone").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"
document.querySelector(".humidit").innerHTML = "Umidade " + dados.main.humidity + "%"

}


async function buscarcidade(cidade) {
    let dados = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + cidade + "&appid=" +
        chave + "&lang=pt_br" +
        "&units=metric"
    )

        .then(resposta => resposta.json())
    console.log(dados)
colocarnatela(dados)
}

function cliqueinobotao() {
    let cidade = document.querySelector(".input-cidade").value
    buscarcidade(cidade)
}
