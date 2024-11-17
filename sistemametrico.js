function converter() {
    const metros = parseFloat(document.getElementById('metros').value);
    const unidade = document.getElementById('unidade').value;
    if (isNaN(metros) || metros <= 0) {
        alert("Insira um valor válido para a distância.");
        return;
    }
    let resultado;
    switch (unidade) {
        case 'jarda':
            resultado = metros * 1.094;  
            break;
        case 'pe':
            resultado = metros * 3.281;  
            break;
        case 'polegada':
            resultado = metros * 39.37;  
            break;
        case 'milha':
            resultado = metros * 0.000621;  
            break;
        default:
            resultado = 0;
            break;
    }





  
    document.getElementById('resultado').textContent = `Resultado: ${resultado} ${unidade}`;
}
