//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];

function adicionarAmigo() {
    let nomes = document.querySelector('input').value;

    // Verifica se o nome está vazio
    if (nomes === "") {
        alert('Nome inválido');
        return;  // Impede que o código continue e o nome seja adicionado
    }

    // Adiciona o nome ao array e limpa o campo de input
    amigos.push(nomes);
    console.log(amigos);

    // Limpa o campo de input para o próximo nome
    document.querySelector('input').value = "";

    alert(`${nomes} foi adicionado com sucesso a lista`)
}

function sortearAmigo(){
    if (amigos.length === 0) {
        alert('Não há amigos na lista!');
        return;
    }

    // Gera um índice aleatório
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    
    // Escolhe o nome aleatório
    let nomeAleatorio = amigos[indiceAleatorio];
    alert('O seu amigo secreto é: ' + nomeAleatorio);
}
