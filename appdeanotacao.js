function adicionarNota() {
    const input = document.getElementById("entradaNota");
    const textoNota = input.value.trim();

  if (textoNota === "") {
        alert("Cara, insira uma nota.");
        return;
    }
    const itemNota = document.createElement("div");

    const textoNotaElemento = document.createElement("span");
    textoNotaElemento.textContent = textoNota;
    itemNota.appendChild(textoNotaElemento);
    const botaoExcluir = document.createElement("button");
    botaoExcluir.textContent = "Excluir";
    botaoExcluir.onclick = function() {
        excluirNota(itemNota);
    };
    itemNota.appendChild(botaoExcluir);

    const listaNotas = document.getElementById("listaNotas");
    listaNotas.appendChild(itemNota);
    input.value = "";
}






function excluirNota(itemNota) {
    itemNota.remove();
}
