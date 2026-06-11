document.getElementById("calcular")
.addEventListener("click", function(){

    let selectPacote =
    document.getElementById("pacote");

    let valorPacote =
    Number(selectPacote.value);

    let pacoteNome =
    selectPacote.options[selectPacote.selectedIndex].text;

    let pessoas =
    Number(document.getElementById("pessoas").value);

    // VALOR BASE
    let valorBase = valorPacote * pessoas;

    // TAXA DE SERVIÇO
    let taxaServico = valorBase * 0.10;

    // TOTAL COM TAXA
    let totalComTaxa = valorBase + taxaServico;

    // DESCONTO
    let desconto = 0;

    // PREMIUM = 5% DE DESCONTO
    if(valorPacote == 80){

        desconto = totalComTaxa * 0.05;
    }

    // INFINITY DELUXE = 10% DE DESCONTO
    else if(valorPacote == 120){

        desconto = totalComTaxa * 0.10;
    }

    // DESCONTO EXTRA PARA MAIS DE 100 PESSOAS
    if(pessoas > 100){

        desconto += totalComTaxa * 0.05;
    }

    // TOTAL FINAL
    let totalFinal = totalComTaxa - desconto;

    document.getElementById("resultado").innerHTML = `

    <span class="destaque">🎉 Pacote:</span>
    ${pacoteNome} <br>

    <span class="destaque">💰 Valor Base:</span>
    R$ ${valorBase.toFixed(2)} <br>

    <span class="destaque">📈 Taxa de Serviço:</span>
    R$ ${taxaServico.toFixed(2)} <br>

    <span class="destaque">🎁 Desconto Aplicado:</span>
    R$ ${desconto.toFixed(2)} <br>

    <span class="destaque">🏆 Total Final:</span>
    R$ ${totalFinal.toFixed(2)}

    `;
});
