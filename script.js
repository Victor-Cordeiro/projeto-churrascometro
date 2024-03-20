// // Carne - 400 gr por pessoa + de 6 horas - 650
// // cerveja - 1200ml por pessoa + 6 horas  - 2000 ml
// // Refrigerante/agua - 1000 ml por pessoa + 6 horas 1500ml 

// crianças valem por 0,5

// variaveis= crianças, adultos, horas 

let inputAdultos = document.getElementById("pessoas");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular() {
    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;  
    let duracao = inputDuracao.value;

    let qtdTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);
    let qtdTotalCerveja = cervejaPP(duracao) * adultos;
    let qtdTotalbebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao) / 2 * criancas);

    resultado.innerHTML = `<p>${qtdTotalCarne/1000} kilos de Carne</p>`
    resultado.innerHTML += `<p>${qtdTotalCerveja}ml de Cerveja</p>`
    resultado.innerHTML += `<p>${qtdTotalbebidas}ml de Bebidas</p>`
}

function carnePP(duracao){
    let carne = 400;
    if(duracao >= 6){
        return  650;
    }else{
        return  400;
    }
    
}

function cervejaPP(duracao){
    
    if(duracao >= 6){
        return 2000;
    }else{
        return  1200;
    }
    
}

function  bebidasPP(duracao){
    
    if(duracao >= 6){
        return 1500;
    }else{
        return  1000;
    }
    
}
