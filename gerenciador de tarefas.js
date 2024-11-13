let tarefasPendentes = []; 


let tarefasConcluidas = []; 


function adicionarTarefa() {
  
  const inputTarefa = document.querySelector("input[type='text']"); 
   

    if (tarefaTexto === "") {
        alert("digite uma tarefa");
        return;
    }

   
    tarefasPendentes.push(tarefaTexto);
    inputTarefa.value = ""; 
    renderizarTarefas(); 
}


function concluirTarefa(index) {
  
  const tarefaConcluida = tarefasPendentes.splice(index, 1);
    tarefasConcluidas.push(tarefaConcluida[0]); 
    renderizarTarefas(); 
}

function removerTarefa(index, lista) {
    if (lista === 'pendente') {
        tarefasPendentes.splice(index, 1); 
    } else {
        tarefasConcluidas.splice(index, 1); 
    }
    renderizarTarefas(); 
}


function renderizarTarefas() {
  
    const tarefasPendentesList = document.getElementById("tarefasPendentes");
    const tarefasConcluidasList = document.getElementById("tarefasConcluidas");

    
    tarefasPendentesList.innerHTML = "";
    tarefasConcluidasList.innerHTML = "";

  
    tarefasPendentes.forEach((tarefa, index) => {
        const li = document.createElement("li");
        li.innerHTML = `${tarefa} 
                        <button onclick="concluirTarefa(${index})">Concluir</button>
                        <button onclick="removerTarefa(${index}, 'pendente')">Remover</button>`;
        tarefasPendentesList.appendChild(li);
    });

   
    tarefasConcluidas.forEach((tarefa, index) => {
        const li = document.createElement("li");
        li.innerHTML = `<span class="completed">${tarefa}</span>
                        <button onclick="removerTarefa(${index}, 'concluida')">Remover</button>`;
        tarefasConcluidasList.appendChild(li);
    });
}
