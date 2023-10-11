function calcular() {
    event.preventDefault();

    let n1 = parseFloat(document.getElementById("n1").value);
    let n2 = parseFloat(document.getElementById("n2").value);
    let op = document.getElementById("operacao").value; //Valor selecionado no select
    let Resultado; //undefinied

    if (isNaN(n1) || isNaN(n2)) {
        alert("É necessário digitar apenas números");
        return;
    }

    if (op == "+") {
        Resultado = somar(n1, n2);
    } else if (op == "-") {
        Resultado = subtrair(n1, n2);
    } else if (op == "*") {
        Resultado = multiplicar(n1, n2);
    } else if (op == "/") {
        Resultado = dividir(n1, n2);
    } else {
        Resultado = 'Operação inválida'
    }

    //Inserir o resultado no HTML (DOM)
    
    document.getElementById("result").innerText = Resultado;

    // alert(`Resultado da conta = ${Resultado}`);
} //Fim da função calcular


function subtrair(x, y) {
    return x - y;
}

function somar(x, y) {
    return x + y;
}

function dividir(x, y) {
    if (y == 0) {
        return "Não é um número";
    }
    return x / y;
}

function multiplicar(x, y) {
    return x * y;
}
