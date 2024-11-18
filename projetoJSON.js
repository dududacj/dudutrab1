let livros = JSON.parse(localStorage.getItem("livros")) || [];


function exibirLivros() {
    const corpoTabela = document.querySelector("#lista-livros tbody");
    corpoTabela.innerHTML = ''; 
    livros.forEach((livro, indice) => {
        const linha = document.createElement("tr");

        linha.innerHTML = `
            <td>${livro.titulo}</td>
            <td>${livro.autor}</td>
            <td>${livro.genero}</td>
            <td>${livro.ano}</td>
            <td>${livro.avaliacao}</td>
            <td>
                <button onclick="avaliarLivro(${indice})">Avaliar</button>
                <button onclick="excluirLivro(${indice})">Excluir</button>
            </td>
        `;

        corpoTabela.appendChild(linha);
    });
}

document.getElementById("form-adicionar-livro").addEventListener("submit", function(evento) {
    evento.preventDefault(); 

    const titulo = document.getElementById("titulo").value;
    const autor = document.getElementById("autor").value;
    const genero = document.getElementById("genero").value;
    const ano = document.getElementById("ano").value;
    const avaliacao = document.getElementById("avaliacao").value;
    livros.push({
        titulo,
        autor,
        genero,
        ano,
        avaliacao: parseFloat(avaliacao)
    });


    localStorage.setItem("livros", JSON.stringify(livros));


    document.getElementById("form-adicionar-livro").reset();
    exibirLivros();
});


function excluirLivro(indice) {
    if (confirm("Tem certeza que deseja excluir este livro?")) {
        livros.splice(indice, 1); 
        localStorage.setItem("livros", JSON.stringify(livros)); 
        exibirLivros(); 
    }
}
function classificarLivros(criterio) {
    livros.sort((a, b) => {
        if (a[criterio] < b[criterio]) return -1;
        if (a[criterio] > b[criterio]) return 1;
        return 0;
    });
    localStorage.setItem("livros", JSON.stringify(livros));
    exibirLivros();
}

function buscarLivros() {
    const termoBusca = document.getElementById("termo-busca").value.toLowerCase();

    const livrosFiltrados = livros.filter(livro => {
        return (
            livro.titulo.toLowerCase().includes(termoBusca) ||
            livro.autor.toLowerCase().includes(termoBusca) ||
            livro.genero.toLowerCase().includes(termoBusca)
        );
    });

    exibirLivrosFiltrados(livrosFiltrados);
}

function exibirLivrosFiltrados(livrosFiltrados) {
    const corpoTabela = document.querySelector("#lista-livros tbody");
    corpoTabela.innerHTML = '';
    livrosFiltrados.forEach((livro, indice) => {
        const linha = document.createElement("tr");

        linha.innerHTML = `
            <td>${livro.titulo}</td>
            <td>${livro.autor}</td>
            <td>${livro.genero}</td>
            <td>${livro.ano}</td>
            <td>${livro.avaliacao}</td>
            <td>
                <button onclick="avaliarLivro(${indice})">Avaliar</button>
                <button onclick="excluirLivro(${indice})">Excluir</button>
            </td>
        `;

        corpoTabela.appendChild(linha);
    });
}
function avaliarLivro(indice) {
    const novaAvaliacao = prompt("Digite a nova avaliação (0 a 5):", livros[indice].avaliacao);
    if (novaAvaliacao >= 0 && novaAvaliacao <= 5) {
        livros[indice].avaliacao = parseFloat(novaAvaliacao);
        localStorage.setItem("livros", JSON.stringify(livros)); 
        exibirLivros(); 
    } else {
        alert("Avaliação inválida. insira um valor entre 0 e 5.");
    }
}




window.onload = function() {
    exibirLivros();
};
