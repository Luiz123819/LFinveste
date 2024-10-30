

function Calcular() {
    let ValorInicial = parseFloat(document.getElementById('ValorInicial').value);
    let ValorMensal = parseFloat(document.getElementById('ValorMensal').value);
    let JurosAnual = parseFloat(document.getElementById('JurosAnual').value);
    let TempoEmAno = parseInt(document.getElementById('TempoEmAno').value) * 12;

    JurosAnual = JurosAnual / 12 / 100;

    const TableBody = document.getElementById('investmentTableBody');
    TableBody.innerHTML = '';

    const monthNames = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

    for (let i = 1; i <= TempoEmAno; i++) {
        let ValorSemJuros = ValorInicial + ValorMensal;
        let ValorComJuros = ValorInicial * JurosAnual;
        ValorInicial = ValorSemJuros + ValorComJuros;

        const Row = document.createElement('tr');
        const monthIndex = (i - 1) % 12; // Para obter o índice do mês correto
        Row.innerHTML = `
            <td>${monthNames[monthIndex]}</td>
            <td>R$ ${ValorInicial.toFixed(2).replace('.', ',')}</td>
            <td>R$ ${ValorMensal.toFixed(2).replace('.', ',')}</td>
            <td>${(JurosAnual * 12 * 100).toFixed(2)} %</td>
            <td>R$ ${ValorSemJuros.toFixed(2).replace('.', ',')}</td>
            <td>R$ ${ValorComJuros.toFixed(2).replace('.', ',')}</td>
            <td>R$ ${(ValorSemJuros + ValorComJuros).toFixed(2).replace('.', ',')}</td>
        `;

        TableBody.appendChild(Row);
    }
    saveData(TableBody.innerHTML);
}

function Clear() {
    document.getElementById('investmentTableBody').innerHTML = '';
    localStorage.removeItem("DATE");
    document.getElementById('ValorInicial').value = "";
    document.getElementById('ValorMensal').value = "";
    document.getElementById('JurosAnual').value = "";
    document.getElementById('TempoEmAno').value = "";
}

function saveData(data) {
    localStorage.setItem("DATE", data);
}

function showTask() {
    const savedData = localStorage.getItem("DATE");
    if (savedData) {
        document.getElementById('investmentTableBody').innerHTML = savedData;
    }
}

// Chame showTask ao carregar a página para exibir os dados salvos
window.onload = showTask;
//Carrousel
let count = 1;
document.getElementById('RadioButton01').checked = true;


function NextImagem() {
    count++;
    //se count for maior que o numero de imagens 
    if (count>8) {
        count = 1;
    }

    document.getElementById("RadioButton0"+count).checked = true;
}
setInterval(function () {
    NextImagem();
}, 4000);