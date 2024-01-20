const form = document.getElementById('form-agenda');
const nomes = [];
const numeros = [];

var linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionarLinhas();
    atualizarTabela();
    totalContatos();
});

function adicionarLinhas(){
    const inputNome = document.getElementById('nome');
    const inputNumero = document.getElementById('numero');

    if (numeros.includes(inputNumero.value)){
        alert('Este contato já está Cadastrado.');
    }else{
        nomes.push(inputNome.value);
        numeros.push(inputNumero.value);

        var linha = '<tr>';
        linha += '<th>Nome:</th>';
        linha += `<td>${inputNome.value}</td>`;
        linha += '</tr>';
        linha += '<tr>';
        linha += '<th>Número:</th>';
        linha += `<td>${inputNumero.value}</td>`;
        linha += '</tr>';

        linhas += linha;
    };

    inputNome.value = '';
    inputNumero.value = '';
};

function atualizarTabela(){
    const listaContatos = document.querySelector('Table');
    listaContatos.innerHTML = linhas;
};

function totalContatos(){
    document.getElementById('totalContatos').innerHTML = `Contatos: ${nomes.length}`;
};