let botaoAdicionar = document.getElementById("adicionar");

let inputNome = document.getElementById("nome");

let lista = document.getElementById("lista");

botaoAdicionar.addEventListener("click", function(){

    let nome = inputNome.value.trim();

    if(nome === ""){

        alert("Digite um nome válido!");
        return;
    }

    // CRIA ITEM DA LISTA
    let item = document.createElement("li");

    // NOME DO CONVIDADO
    let texto = document.createElement("span");

    texto.innerHTML = nome;

    // ÁREA DOS BOTÕES
    let areaBotoes = document.createElement("div");

    areaBotoes.classList.add("botoes");

    // BOTÃO CONCLUIR
    let btnConcluir = document.createElement("button");

    btnConcluir.innerHTML = "Concluir";

    btnConcluir.classList.add("btn-concluir");

    btnConcluir.addEventListener("click", function(){

        texto.classList.toggle("riscado");
    });

    // BOTÃO EDITAR
    let btnEditar = document.createElement("button");

    btnEditar.innerHTML = "Editar";

    btnEditar.classList.add("btn-editar");

    btnEditar.addEventListener("click", function(){

        let novoNome = prompt("Digite o novo nome:");

        if(novoNome !== null && novoNome.trim() !== ""){

            texto.innerHTML = novoNome;
        }
    });

    // BOTÃO EXCLUIR
    let btnExcluir = document.createElement("button");

    btnExcluir.innerHTML = "Excluir";

    btnExcluir.classList.add("btn-excluir");

    btnExcluir.addEventListener("click", function(){

        item.remove();
    });

    // ADICIONA BOTÕES
    areaBotoes.appendChild(btnConcluir);

    areaBotoes.appendChild(btnEditar);

    areaBotoes.appendChild(btnExcluir);

    // MONTA ITEM
    item.appendChild(texto);

    item.appendChild(areaBotoes);

    // ADICIONA NA LISTA
    lista.appendChild(item);

    // LIMPA INPUT
    inputNome.value = "";
});
