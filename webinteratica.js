async function obterRacas() {
    try {
        const resposta = await fetch('https://dog.ceo/api/breeds/list/all');
        const dados = await resposta.json();
        
        if (dados.status === "success") {
            exibirBotoesRacas(dados.message);
        }
    } catch (erro) {
        console.error('Erro ao obter as raças:', erro);
        alert('Erro ao carregar as raças. Tente novamente.');
    }
}
function exibirBotoesRacas(racas) {
    const listaRacas = document.getElementById('lista-racas');
    listaRacas.innerHTML = ''; 

    for (let racaCachorro in racas) { 
        const botao = document.createElement('button');
        botao.innerText = racaCachorro; 
        botao.onclick = () => obterImagens(racaCachorro); 
        listaRacas.appendChild(botao);
    }
}
async function obterImagens(racaCachorro) {  
    try {
        const resposta = await fetch(`https://dog.ceo/api/breed/${racaCachorro}/images/random/4`); 
        const dados = await resposta.json();

        if (dados.status === "success") {
            exibirImagens(dados.message);
        }
    } catch (erro) {
        console.error('Erro ao obter as imagens:', erro);
        alert('Erro ao carregar as imagens. Tente novamente.');
    }
}

function exibirImagens(imagens) {
    const divImagens = document.getElementById('imagens');
    divImagens.innerHTML = ''; 

    imagens.forEach(imagemUrl => {
        const img = document.createElement('img');
        img.src = imagemUrl;
        img.alt = "Imagem de cachorro";
        img.style.width = '200px';
        img.style.margin = '10px';
        img.style.borderRadius = '10px';
        divImagens.appendChild(img);
    });
}


obterRacas();
