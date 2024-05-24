import SaldoComponent from "./saldo-component.js";
import Conta from "../types/conta.js";
import ExtratoComponent from "./extrato-components.js";
const elementoFormulario = document.querySelector(".block-nova-transacao form");
elementoFormulario.addEventListener("submit", function (event) {
    try {
        event.preventDefault();
        if (!elementoFormulario.checkValidity()) {
            alert("Por favor, preencha todos os campos da transação!");
            return;
        }
        const inputTipoTransacao = elementoFormulario.querySelector("#tipoTransacao");
        const inputData = elementoFormulario.querySelector("#data");
        const inputValorUber = elementoFormulario.querySelector("#valor");
        const inputQtdUber = elementoFormulario.querySelector("#qtdUber");
        const inputValor99 = elementoFormulario.querySelector("#valor99");
        const inputQtd99 = elementoFormulario.querySelector("#qtd99");
        const inputHrInicio = elementoFormulario.querySelector("#hrInicio");
        const inputHrFim = elementoFormulario.querySelector("#hrFim");


        let tipoTransacao = inputTipoTransacao.value;
        let data = new Date(inputData.value + " 00:00:00");
        let valorUber = inputValorUber.valueAsNumber;
        let qtdUber = inputQtdUber.valueAsNumber;
        let valor99 = inputValor99.valueAsNumber;
        let qtd99 = inputQtd99.valueAsNumber;
        let hrInicio = inputHrInicio.value;
        let hrFim = inputHrFim.value;


        const novaTransacao = {
            tipoTransacao: tipoTransacao,
            valor: valorUber,
            data: data,
            qtdUber: qtdUber,
            valor99: valor99,
            qtd99: qtd99,
            hrInicio: hrInicio,
            hrFim: hrFim
        };

        Conta.registrarTransacao(novaTransacao);
        SaldoComponent.atualizar();
        ExtratoComponent.atualizar();
        elementoFormulario.reset();

    }
    catch (erro) {
        alert(erro.message);
    }
});