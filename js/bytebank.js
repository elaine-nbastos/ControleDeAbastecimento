let saldo = 1;

const elementoSaldo = document.querySelector('.saldo-valor .valor');
elementoSaldo.textContent = saldo;

const elementoFormulario = document.querySelector('.block-nova-transacao form');
elementoFormulario.addEventListener('submit', function(event){
    event.preventDefault();
    if(!elementoFormulario.checkValidity()){
        alert("Por favor, preencha todos os campos da transação!");
        return;
    }

    const inputTipoTransacao = elementoFormulario.querySelector('#tipoTransacao');
    const inputValor = elementoFormulario.querySelector('#valor');
    const inputData = elementoFormulario.querySelector('#data');

    let tipoTransacao = inputTipoTransacao.value;
    let valor = inputValor.value;
    let data = inputData.value;

    if (tipoTransacao == "Ganhos") {
        saldo += valor;
    }else if(tipoTransacao == "Abastecimento" || tipoTransacao == "Manutenção do veículo") {
        saldo -= valor;
    }else {
        alert("Tipo de transação é invalido!");
        return;
    }

    elementoSaldo.textContent = saldo;

    const novaTransacao = {
        tipoTransacao: tipoTransacao,
        valor: valor,
        data: data
    }

    console.log(novaTransacao);
    elementoFormulario.reset();
});