let containerEscolha = document.querySelector("#container-escolha")
let btn = document.querySelector("#btn");

let escolha = document.querySelector("#escolha");

escolha.style.display = 'none'
btn.addEventListener('click', function() {

    escolha.style.display = 'block'
   /* if(escolha.style.display === 'none'){  
       escolha.style.display = 'block'
    }else{
    escolha.style.display = 'none'
  } */
    
})

let primeiroBotao = document.querySelector("#botao-1");
 
celsius.style.display = 'none'
primeiroBotao.addEventListener('click', function() {
    let celsius = document.querySelector("#celsius");
    if(celsius.style.display === 'none') {
        celsius.style.display = 'block'
    }else{
        celsius.style.display = 'none'
    }
})

milhas.style.display = 'none'
let segundoBotao = document.querySelector("#botao-2");

segundoBotao.addEventListener('click', function() {
    let milhas = document.querySelector("#milhas");
    if(milhas.style.display === 'none'){
        milhas.style.display = 'block'
    }else{
        milhas.style.display = 'none'
    }
})

let terceiroBotao = document.querySelector("#botao-3");

terceiroBotao.addEventListener('click', function() {
    escolha.style.display = 'none'
})

function calculaResultado(form) {
    form.resultado.value = (form.entrada.value * 1.8) + 32 ;

}

function expressaoMatematica(form) {
    form.entrada.blur();
    form.entrada.value = prompt("Informe o Valor que deseja Converter:")
    calculaResultado(form)
}


function limparCampos() {
    let entradaValor = document.getElementById('entrada').value;
    let resultadoValor = document.getElementById('resultado').value;
    
    entradaValor = "";
    resultadoValor = "";
    
}

function calculaResultadoMilhas(form) {
    form.resultadomilhas.value = (form.entradamilhas.value / 1.609);

}

function expressaoMatematicaMilhas(form) {
    form.entradamilhas.blur();
    form.entradamilhas.value = prompt("Informe o Valor que deseja Converter:")
    calculaResultadoMilhas(form)
}

function limparCamposMilhas() {
    let entradaValorMilhas = document.getElementById('entradamilhas').value;
    let resultadoValorMilhas = document.getElementById('resultadomilhas').value;
    
    entradaValorMilhas = "";
    resultadoValorMilhas = "";
    
}

 
 

