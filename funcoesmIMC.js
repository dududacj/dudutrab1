function calcularIMC() {
    var peso = parseFloat(document.getElementById('peso').value);
    var altura = parseFloat(document.getElementById('altura').value);
    
    if (isNaN(peso) || isNaN(altura) || altura <= 0 || peso <= 0) {
        document.getElementById('resultado').textContent = "insira valores válidos!";
        return;
    }

    var imc = peso / (altura * altura);
    document.getElementById('resultado').textContent = "Seu IMC é: " + imc.toFixed(2);
}
