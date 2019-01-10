
// variavel global de controle do parentesis
parentesis_aberto = false;

// funcao pega o botao e mostra no display
function botao(num) {

    // verifica se o botao clicado foi o de parentesis
    if ((num == 'parentesis') && !parentesis_aberto){
        // variavel de controle dos parentesis
        num = '(';
        parentesis_aberto = true;
        // adiciona o parentesis e troca o estado
    } else if ((num == 'parentesis') && (parentesis_aberto)){
        num = ')';
        parentesis_aberto = false;
        // adiciona o parentesis e troca o estado
    }

    // visor da calculadora
    var visor = document.getElementById('visor');

    // se for o numero no display for diferente de 0 incrementa novo numero
    
    if (visor.innerText.startsWith('0')){
        visor.innerText = num;
    } else {
        // senao sobrescreve o 0 por outro
        visor.innerText += num;
    }

}

// pega os valores do visor, calcula e exibe o resultado
function calcular(){
    visor.innerHTML = eval(visor.innerText);
}


// funcao limpa_visor
function limpa_visor(){
    var visor = document.getElementById('visor');
    visor.innerHTML = '0';    
}

// funcao apaga_caracter
function apaga_caracter(){
    var visor = document.getElementById('visor');

    if (visor.innerHTML.length <= 1){
        visor.innerHTML = '0';
    } else{
        visor.innerHTML = visor.innerHTML.slice(0, visor.innerHTML.length -1);
    }


}

// funcao porcentagem
function porcentagem(){
    var visor = document.getElementById('visor');
    visor.innerHTML = eval(visor.innerHTML)/100;
}
