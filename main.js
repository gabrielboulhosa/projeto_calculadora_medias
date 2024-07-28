const form = document.getElementById('form_atividade');
const imgAprovado = '<img src="./images/aprovado.png" alt="emoji celebrando"/>';
const imgReprovado = '<img src="./images/reprovado.png" alt="emoji triste"/>';
const atividades = [];
const notas = [];
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>';
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>';
const notaMinima = parseFloat(prompt('Digite a nota minima: '))
let linhas = '';

form.addEventListener('submit', function (e) {
    e.preventDefault();

   adicionarLinhas();
   atualizarTabela();
    atualizaMediaFinal();

})

function adicionarLinhas() {
     const inputNomeAtividade = document.getElementById('nome_Atividade');
    const inputNotaAtividade = document.getElementById('nota_Atividade');

    if (atividades.includes(inputNomeAtividade.value)) {  // o includes é utilizado para determinar se um array contém um determinado valor

        alert(`A tividade ${inputNomeAtividade.value} já foi inserida`);

    } else {

        atividades.push(inputNomeAtividade.value);
        notas.push(parseFloat(inputNotaAtividade.value));


    let linha = '<tr>';
        linha += `<td>${inputNomeAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}</td>`;
    linha += '</tr>';

    linhas += linha;

    }

    inputNomeAtividade.value = '';
    inputNotaAtividade.value = '';
}

function atualizarTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function atualizaMediaFinal() {

    const mediaFinal = calculaMediaFinal()

    document.getElementById('media_final_valor').innerHTML = mediaFinal;
    document.getElementById('media_final_resultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado;
}

function calculaMediaFinal() {

     let somaDasNotas = 0;

    for (let i = 0; i < notas.length; i++) {
        somaDasNotas += notas[i];
    }

    return somaDasNotas / notas.length;
}