const API_KEY = 'SUA_CHAVE_API';  // Substitua com sua chave da API do TMDb
const BASE_URL = 'https://api.themoviedb.org/3';
const IMG_URL = 'https://image.tmdb.org/t/p/w500';

async function obterCatalogo() {
    const url = `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=pt-BR&page=1`;
    
    try {
        const resposta = await fetch(url);
        const dados = await resposta.json();
        exibirCatalogo(dados.results);
    } catch (erro) {
        console.error('Erro ao carregar catálogo:', erro);
        alert('Erro ao carregar catálogo. Tente novamente.');
    }
}

function exibirCatalogo(filmes) {
    const listaFilmes = document.getElementById('lista-filmes');
    listaFilmes.innerHTML = '';  

    filmes.forEach(filme => {
        const divFilme = document.createElement('div');
        divFilme.classList.add('item');
        divFilme.onclick = () => mostrarDetalhes(filme.id);

        const img = document.createElement('img');
        img.src = IMG_URL + filme.poster_path;
        img.alt = filme.title;

        const titulo = document.createElement('p');
        titulo.textContent = filme.title;

        divFilme.appendChild(img);
        divFilme.appendChild(titulo);
        listaFilmes.appendChild(divFilme);
    });
}

async function mostrarDetalhes(idFilme) {
    const url = `${BASE_URL}/movie/${idFilme}?api_key=${API_KEY}&language=pt-BR`;

    try {
        const resposta = await fetch(url);
        const dados = await resposta.json();
        exibirDetalhes(dados);
    } catch (erro) {
        console.error('Erro ao carregar detalhes:', erro);
        alert('Erro ao carregar detalhes. Tente novamente.');
    }
}

function exibirDetalhes(filme) {
    const detalhesConteudo = document.getElementById('detalhes-conteudo');
    detalhesConteudo.innerHTML = '';

    const titulo = document.createElement('h3');
    titulo.textContent = filme.title;

    const descricao = document.createElement('p');
    descricao.textContent = filme.overview;

    const imagem = document.createElement('img');
    imagem.src = IMG_URL + filme.poster_path;
    imagem.alt = filme.title;
    imagem.style.width = '300px';

    detalhesConteudo.appendChild(imagem);
    detalhesConteudo.appendChild(titulo);
    detalhesConteudo.appendChild(descricao);

    document.getElementById('detalhes').style.display = 'block';
    document.getElementById('catalogo').style.display = 'none';
}

function voltarCatalogo() {
    document.getElementById('detalhes').style.display = 'none';
    document.getElementById('catalogo').style.display = 'block';
}

async function buscar() {
    const query = document.getElementById('search-input').value;
    if (query === '') return;

    const url = `${BASE_URL}/search/movie?api_key=${API_KEY}&language=pt-BR&query=${query}`;

    try {
        const resposta = await fetch(url);
        const dados = await resposta.json();
        exibirCatalogo(dados.results);
    } catch (erro) {
        console.error('Erro ao buscar filmes:', erro);
        alert('Erro ao buscar filmes. Tente novamente.');
    }
}




obterCatalogo();
