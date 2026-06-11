function calcular(){

    let bandeira = document.getElementById("bandeira").value;

    let valor = Number(document.getElementById("valor").value);

    let parcelas = Number(document.getElementById("parcelas").value);

    let taxa = 0;

    switch(bandeira){

        case "visa":
            taxa = valor * 0.02;
        break;

        case "master":
            taxa = valor * 0.0185;
        break;

        case "elo":
            taxa = valor * 0.03;
        break;
    }

    let juros = valor * (0.0035 * parcelas);

    let taxaMensal = parcelas * 12.50;

    let total = valor + taxa + juros + taxaMensal;

    let valorParcela = total / parcelas;

    document.getElementById("resultado").innerHTML = `

    <span class="destaque">💰 Taxa da Bandeira:</span>
    R$ ${taxa.toFixed(2)} <br>

    <span class="destaque">📈 Juros:</span>
    R$ ${juros.toFixed(2)} <br>

    <span class="destaque">🏦 Taxa Mensal:</span>
    R$ ${taxaMensal.toFixed(2)} <br>

    <span class="destaque">💳 Valor Total:</span>
    R$ ${total.toFixed(2)} <br>

    <span class="destaque">📅 Valor por Parcela:</span>
    R$ ${valorParcela.toFixed(2)}
    `;
}
