var saldo = 1;
var elementoSaldo = document.querySelector('.saldo-valor .valor');
if (elementoSaldo !== null) {
    elementoSaldo.textContent = saldo.toString();
}
var elementoFormulario = document.querySelector('.block-nova-transacao form');
elementoFormulario.addEventListener('submit', function (event) {
    event.preventDefault();
    if (!elementoFormulario.checkValidity()) {
        alert("Por favor, preencha todos os campos da transação!");
        return;
    }
    var inputTipoTransacao = elementoFormulario.querySelector('#tipoTransacao');
    var inputValor = elementoFormulario.querySelector('#valor');
    var inputData = elementoFormulario.querySelector('#data');
    var tipoTransacao = inputTipoTransacao.value;
    var valor = inputValor.valueAsNumber;
    var data = new Date(inputData.value);
    if (tipoTransacao == "Ganhos") {
        saldo += valor;
    }
    else if (tipoTransacao == "Abastecimento" || tipoTransacao == "Manutenção do veículo") {
        saldo -= valor;
    }
    else {
        alert("Tipo de transação é invalido!");
        return;
    }
    elementoSaldo.textContent = saldo.toString();
    var novaTransacao = {
        tipoTransacao: tipoTransacao,
        valor: valor,
        data: data
    };
    console.log(novaTransacao);
    elementoFormulario.reset();
});
