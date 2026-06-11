function analisarCartao(){

    let numero =
    document.getElementById("cartao").value;

    // REMOVE ESPAÇOS E PONTOS
    numero = numero.replace(/\D/g, "");

    let resultado =
    document.getElementById("resultado");

    // VALIDA TAMANHO
    if(numero.length < 13 || numero.length > 16){

        resultado.innerHTML = `
        <span class="invalido">
        ❌ Número de cartão inválido
        </span>
        `;

        return;
    }

    // ALGORITMO DE LUHN
    let soma = 0;

    let inverter = false;

    for(let i = numero.length - 1; i >= 0; i--){

        let digito = parseInt(numero[i]);

        if(inverter){

            digito *= 2;

            if(digito > 9){

                digito -= 9;
            }
        }

        soma += digito;

        inverter = !inverter;
    }

    let valido = (soma % 10 === 0);

    // IDENTIFICA BANDEIRA
    let bandeira = "Desconhecida";

    if(numero.startsWith("4")){

        bandeira = "Visa";
    }

    else if(
        numero.startsWith("51") ||
        numero.startsWith("52") ||
        numero.startsWith("53") ||
        numero.startsWith("54") ||
        numero.startsWith("55")
    ){

        bandeira = "MasterCard";
    }

    else if(numero.startsWith("34") ||
            numero.startsWith("37")){

        bandeira = "American Express";
    }

    // SETOR INDUSTRIAL
    let setor = "";

    switch(numero[0]){

        case "1":
            setor = "Companhias Aéreas";
        break;

        case "2":
            setor = "Financeiro e Bancário";
        break;

        case "3":
            setor = "Viagens e Entretenimento";
        break;

        case "4":
        case "5":
            setor = "Instituições Financeiras";
        break;

        case "6":
            setor = "Comércio e Bancos";
        break;

        default:
            setor = "Não identificado";
    }

    // BANCO EMISSOR
    let banco = "Banco não identificado";

    if(numero.startsWith("4")){

        banco = "Infinity Bank Visa";
    }

    else if(numero.startsWith("5")){

        banco = "Infinity Master";
    }

    else if(numero.startsWith("34") ||
            numero.startsWith("37")){

        banco = "Infinity American Express";
    }

    // STATUS
    let status = valido
    ? '<span class="valido">✅ Cartão Válido</span>'
    : '<span class="invalido">❌ Cartão Inválido</span>';

    // RESULTADO
    resultado.innerHTML = `

    <span class="destaque">📌 Status:</span>
    ${status} <br>

    <span class="destaque">💳 Bandeira:</span>
    ${bandeira} <br>

    <span class="destaque">🏢 Setor:</span>
    ${setor} <br>

    <span class="destaque">🏦 Banco Emissor:</span>
    ${banco}

    `;
}
