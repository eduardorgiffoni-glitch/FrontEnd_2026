function validarCPF() {

    let cpf = document.getElementById("cpf").value;

    cpf = cpf.replace(/\D/g, '');

    let resultado = document.getElementById("resultado");

    if (cpf.length != 11) {

        resultado.innerHTML = "CPF Inválido ❌";
        resultado.style.color = "red";
        return;
    }

    if (/^(\d)\1+$/.test(cpf)) {

        resultado.innerHTML = "CPF Inválido ❌";
        resultado.style.color = "red";
        return;
    }

    let soma = 0;
    let resto;

    // Primeiro dígito
    for (let i = 0; i < 9; i++) {

        soma += parseInt(cpf[i]) * (10 - i);
    }

    resto = (soma * 10) % 11;

    if (resto == 10) {
        resto = 0;
    }

    if (resto != parseInt(cpf[9])) {

        resultado.innerHTML = "CPF Inválido ❌";
        resultado.style.color = "red";
        return;
    }

    soma = 0;

    // Segundo dígito
    for (let i = 0; i < 10; i++) {

        soma += parseInt(cpf[i]) * (11 - i);
    }

    resto = (soma * 10) % 11;

    if (resto == 10) {
        resto = 0;
    }

    if (resto != parseInt(cpf[10])) {

        resultado.innerHTML = "CPF Inválido ❌";
        resultado.style.color = "red";
        return;
    }

    resultado.innerHTML = "CPF Válido ✅";
    resultado.style.color = "green";
}
