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
    
    let totalDoLitro = valor / litros;
    let totalKmPorLitro = kmRodado / litros;
    let totalValorPorKm = valor / kmRodado;
    let totalLucroDoDia = feitoNoDia - valor;

    document.getElementById('valorDoLitro').innerHTML = totalDoLitro;
    document.getElementById('kmPorLitro').innerHTML = totalKmPorLitro;
    document.getElementById('valorDoKm').innerHTML = totalValorPorKm;
    document.getElementById('lucroDoDia').innerHTML = totalLucroDoDia;
  
    // Salvando os dados no localStorage
    localStorage.setItem('litros', litros);
    localStorage.setItem('valor', valor);
    localStorage.setItem('kmRodado', kmRodado);
    localStorage.setItem('feitoNoDia', feitoNoDia);

  }
  
  // Carregando os valores salvos no localStorage ao carregar a página
  window.onload = function() {
    let litros = localStorage.getItem('litros');
    let valor = localStorage.getItem('valor');
    let kmRodado = localStorage.getItem('kmRodado');
    let feitoNoDia = localStorage.getItem('feitoNoDia');
  
    if (litros && valor && kmRodado) {
      document.getElementById('litros').value = litros;
      document.getElementById('valor').value = valor;
      document.getElementById('kmRodado').value = kmRodado;
      document.getElementById('feitoNoDia').value = feitoNoDia;
    }
  };
  