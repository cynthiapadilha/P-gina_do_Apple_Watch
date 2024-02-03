const imagemVisualizacao = document.getElementById('imagem-visualizacao');

const tituloProduto = document.getElementById('titulo-produto');

const nomeCor = document.getElementById('nome-cor-selecionada');

const miniaturaImagem0 = document.getElementById('0-imagem-miniatura')

const miniaturaImagem1 = document.getElementById('1-imagem-miniatura')

const miniaturaImagem2 = document.getElementById('2-imagem-miniatura')

const verdeCipreste = {
    nome: 'Verde-Cipreste',
    pasta: 'imagens-verde-cipreste'
};

const azulInverno = {
    nome:'Azul-Inverno',
    pasta: 'imagens-azul-inverno'
};

const MeiaNoite = {
    nome:'Meia-Noite',
    pasta:'imagens-meia-noite'
};

const Estelar = {
    nome:'Estelar',
    pasta:'imagens-estelar'
};

const RosaClaro = {
    nome: 'Rosa-Claro',
    pasta: 'imagens-rosa-claro'
};

const opcoesCores = [verdeCipreste, azulInverno, MeiaNoite, Estelar, RosaClaro];

const opcoesTamanho = ['41mm', '45mm'];

let imagemSelecionada = 1;
let tamanhoSelecionado = 1;
let corSelecionada = 1;

function trocarImagem() {
    //atualizar a variável de controle do tamanho da caixa
    const idOpcaoSelecionada = document.querySelector('[name="opcao-imagem"]:checked').id;

    imagemSelecionada = idOpcaoSelecionada.charAt(0);

    //trocando a imagem de acordo com o que foi selecionado    
   imagemVisualizacao.src = './imagens/opcoes-cores/imagens-azul-inverno/imagem-' + imagemSelecionada + '.jpeg';

   imagemVisualizacao.src = './imagens/opcoes-cores/' + opcoesCores[corSelecionada].pasta + '/imagem-' + imagemSelecionada + '.jpeg'; 
   
   // imagemVisualizacao.src = './imagens/opcoes-cores' + opcoesCores[corSelecionada].pasta + '/imagem-' + imagemSelecionada + '.jpeg';//
}

function trocarTamanho() {
    //atualizar a variável de controle do tamanho da caixa
    const idOpcaoSelecionada = document.querySelector('[name="opcao-tamanho"]:checked').id;
    tamanhoSelecionado = idOpcaoSelecionada.charAt(0);

    //mudar titulo do produto
    tituloProduto.innerText = "Pulseira loop esportiva "+ opcoesCores[corSelecionada].nome +" para caixa de " + opcoesTamanho[tamanhoSelecionado];

    //mudar tamanho da imagem de acordo com a opção
    if (opcoesTamanho[tamanhoSelecionado] === '41mm'){
         imagemVisualizacao.classList.add('caixa-pequena');
    } else {
        imagemVisualizacao.classList.remove('caixa-pequena');
    }

}

function trocarCor (){
    //atualizar variável de controle
    const idOpcaoSelecionada = document.querySelector('[name="opcao-cor"]:checked').id;
    corSelecionada = idOpcaoSelecionada.charAt(0);

    //trocar titulo da página

    tituloProduto.innerText = "Pulseira loop esportiva "+ opcoesCores[corSelecionada].nome +" para caixa de " + opcoesTamanho[tamanhoSelecionado];
   
    //trocar titulo da cor
    nomeCor.innerText = "Cor - " + opcoesCores[corSelecionada].nome;

    //trocar miniatura
    miniaturaImagem0.src = './imagens/opcoes-cores/' + opcoesCores[corSelecionada].pasta + '/imagem-0.jpeg';

    miniaturaImagem1.src = './imagens/opcoes-cores/' + opcoesCores[corSelecionada].pasta + '/imagem-1.jpeg';

    miniaturaImagem2.src = './imagens/opcoes-cores/' + opcoesCores[corSelecionada].pasta + '/imagem-2.jpeg';

    //trocar visualização
    
    imagemVisualizacao.src = './imagens/opcoes-cores/' + opcoesCores[corSelecionada].pasta + '/imagem-' + imagemSelecionada + '.jpeg';

    // imagemVisualizacao.src = './imagens/opcoes-cores/imagens-azul-inverno/imagem-' + imagemSelecionada + '.jpeg';//
    
}