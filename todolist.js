const botaoAdicionar = document.getElementById('botaoAdicionar');
const entradaTarefa = document.getElementById('entradaTarefa');
const listaTarefas = document.getElementById('listaTarefas');

function adicionarTarefa() {
    const textoTarefa = entradaTarefa.value.trim();

    if (textoTarefa !== "") {
        const itemTarefa = document.createElement('li');
        const caixaSelecao = document.createElement('input');
        caixaSelecao.type = 'checkbox';
        caixaSelecao.addEventListener('change', alternarTarefaConcluida);
        const botaoRemover = document.createElement('button');
        botaoRemover.classList.add('remove-btn');
        botaoRemover.textContent = 'Remover';
        botaoRemover.addEventListener('click', removerTarefa);


      
        itemTarefa.textContent = textoTarefa;
        itemTarefa.prepend(caixaSelecao);
        itemTarefa.appendChild(botaoRemover);
        listaTarefas.appendChild(itemTarefa);
        entradaTarefa.value = '';
    }
}
function removerTarefa(evento) {
    const itemTarefa = evento.target.parentElement;
    listaTarefas.removeChild(itemTarefa);
}
function alternarTarefaConcluida(evento) {
    const itemTarefa = evento.target.parentElement;
    if (evento.target.checked) {
        itemTarefa.classList.add('concluida');
    } else {
        itemTarefa.classList.remove('concluida');
    }
}



botaoAdicionar.addEventListener('click', adicionarTarefa);
entradaTarefa.addEventListener('keypress', function (evento) {
    if (evento.key === 'Enter') {
        adicionarTarefa();
    }
});
