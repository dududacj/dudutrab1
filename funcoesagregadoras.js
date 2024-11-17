const perguntas = [   {
        pergunta: "Quem foi o primeiro presidente do Brasil?",
        opcoes: ["Dom Pedro I", "Getúlio Vargas", "Juscelino Kubitschek", "Deodoro da Fonseca"],
        respostaCorreta: "Deodoro da Fonseca"
    },
    {
        pergunta: "Quem é o jogador brasileiro que mais possui WSOP?",
        opcoes: [" Yuri Nerdguy", "Akkari", "Rafael Moraes", "Leo Rizzo"],
        respostaCorreta: "Yuri Nerdguy"
    },
    {
        pergunta: "Em que ano a Segunda Guerra Mundial terminou?",
        opcoes: ["1945", "1939", "1950", "1942"],
        respostaCorreta: "1945"
    },
    {
        pergunta: "Qual foi o jogador do cruzeiro que fez o gol de cavadinha na final da Copa do Brasil contra o corinthians",
        opcoes: ["Fabio", "Dede", "Thiago Neves", "Arrascaeta"],
        respostaCorreta: "Arrascaeta"
    }
];

function exibirPergunta() {
    const perguntaAleatoria = perguntas[Math.floor(Math.random() * perguntas.length)];


    document.getElementById("pergunta").textContent = perguntaAleatoria.pergunta;


    const botoes = document.querySelectorAll(".opcao");
    botoes.forEach((botao, index) => {
        botao.textContent = perguntaAleatoria.opcoes[index];
        botao.setAttribute('data-resposta', perguntaAleatoria.opcoes[index]);
    });
    document.getElementById("opcoes-container").setAttribute("data-resposta-correta", perguntaAleatoria.respostaCorreta);
}
function verificarResposta(respostaEscolhida) {
    const respostaCorreta = document.getElementById("opcoes-container").getAttribute("data-resposta-correta");
    const respostaAluno = document.querySelector(`[data-resposta="${respostaEscolhida}"]`).textContent;
    const feedback = document.getElementById("feedback");
    const reloadBtn = document.getElementById("reload-btn");

    if (respostaAluno === respostaCorreta) {
        feedback.textContent = "Voce é BRABO!";
        feedback.style.color = "green";
    } else {
        feedback.textContent = `Burro! A resposta correta era: ${respostaCorreta}`;
        feedback.style.color = "red";
    }
    reloadBtn.style.display = "inline-block";
}
function recarregarQuiz() {
    exibirPergunta();
    document.getElementById("feedback").textContent = "";
    document.getElementById("reload-btn").style.display = "none";
}






window.onload = function() {
    exibirPergunta();
};
