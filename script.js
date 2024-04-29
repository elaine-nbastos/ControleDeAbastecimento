const inputCheck = document.querySelector('#modo-noturno');
const elemento = document.querySelector('body');

inputCheck.addEventListener('click', ()=>{
    const modo = inputCheck.checked ? 'dark' : 'light';
    elemento.setAttribute('data-bs-theme', modo)
})

function calcular() {
    let litros = parseFloat(document.getElementById('litros').value);
    let valor = parseFloat(document.getElementById('valor').value);
    let kmRodado = parseFloat(document.getElementById('kmRodado').value);
    let feitoNoDia = parseFloat(document.getElementById('feitoNoDia').value);
    let corridasFeitasNoDi = parseFloat(document.getElementById('corridasFeitasNoDi').value);
    
    let totalDoLitro = valor / litros;
    let totalKmPorLitro = kmRodado / litros;
    let totalValorPorKm = valor / kmRodado;
    let totalLucroDoDia = feitoNoDia - valor;
    let totalValorDaCorrida = feitoNoDia / corridasFeitasNoDi

    document.getElementById('valorDoLitro').innerHTML = `R$ ${totalDoLitro}`;
    document.getElementById('kmPorLitro').innerHTML = `${totalKmPorLitro}km`;
    document.getElementById('valorDoKm').innerHTML = `R$${totalValorPorKm} centavos`;
    document.getElementById('lucroDoDia').innerHTML = `R$${totalLucroDoDia}`;
    document.getElementById('valorDaCorrida').innerHTML = `R$${totalValorDaCorrida}`;
  
    // Salvando os dados no localStorage
    localStorage.setItem('litros', litros);
    localStorage.setItem('valor', valor);
    localStorage.setItem('kmRodado', kmRodado);
    localStorage.setItem('feitoNoDia', feitoNoDia);
    localStorage.setItem('corridasFeitasNoDia', corridasFeitasNoDia);

  }
  // Carregando os valores salvos no localStorage ao carregar a página
  window.onload = function() {
    let litros = localStorage.getItem('litros');
    let valor = localStorage.getItem('valor');
    let kmRodado = localStorage.getItem('kmRodado');
    let feitoNoDia = localStorage.getItem('feitoNoDia');
    let corridasFeitasNoDia = localStorage.getItem('corridasFeitasNoDia');
  
    if (litros && valor && kmRodado && feitoNoDia && corridasFeitasNoDia) {
      document.getElementById('litros').value = litros;
      document.getElementById('valor').value = valor;
      document.getElementById('kmRodado').value = kmRodado;
      document.getElementById('feitoNoDia').value = feitoNoDia;
      document.getElementById('corridasFeitasNoDia').value = corridasFeitasNoDia;
      
    }
  };
  