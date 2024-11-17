
const calcularPorQualidade = (qualidade) => {
    switch(qualidade) {
        case 'bom':
            return 0.2;  
        case 'regular':
            return 0.1;  
        case 'ruim':
            return 0.05; 
        default:
            return 0;
    }
}
const calcularGorjeta = () => {
    const valorConta = parseFloat(document.getElementById('conta').value);
    const qualidade = document.getElementById('qualidade').value;

    if (isNaN(valorConta) || valorConta <= 0) {
        alert("Por favor, insira um valor válido para a conta.");
        return;
    }
    const porcentagemGorjeta = calcularPorQualidade(qualidade);
    const gorjeta = valorConta * porcentagemGorjeta;


    document.getElementById('resultado').textContent = `Gorjeta: R$ ${gorjeta}`;
}
