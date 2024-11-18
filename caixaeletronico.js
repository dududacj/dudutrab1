let saldo = 1000;
function realizarOperacao() {
    const opcao = document.getElementById("opcao").value;
    const valor = parseFloat(document.getElementById("valor").value);
    const resultado = document.getElementById("resultado");


    if (isNaN(valor) || valor <= 0) {
        resultado.textContent = "Senhor(a) favor, inserir um valor válido maior que 0.";
        return;
    }

   
    if (opcao === "consultar") {
      
        resultado.textContent = `Seu saldo atual é: R$ ${saldo.toFixed(2)}`;
    } else if (opcao === "sacar") {
      
        if (valor > saldo) {
            resultado.textContent = "Saldo insuficiente para essa operação,VOCE ESTÁ DURO.";
        } else {
            saldo -= valor;
            resultado.textContent = `Saque realizado com sucesso! Novo saldo: R$ ${saldo}, voce está com o pataco.`;
        }
    } else if (opcao === "depositar") {
     
        saldo += valor;
        resultado.textContent = `Depósito realizado com sucesso! Novo saldo: R$ ${saldo}`;
    }
}
