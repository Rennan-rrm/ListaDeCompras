const nome= document.getElementById('nome');
const quantidade= document.getElementById('quantidade');
const preco= document.getElementById('preco');
const form= document.getElementById('formulario');
const valorTotal= document.getElementById('valorTotal');
const container= document.getElementById('conteiner');
let valorGeral= 0;

form.addEventListener('submit', function(e){
    e.preventDefault();

    let quantidadeValor=parseInt(quantidade.value);
    let precoValor =parseFloat(preco.value);
    let total = quantidadeValor * precoValor;
    valorGeral += total;
    
    const textoAdd = document.createElement('li');
    const botaoExcluir = document.createElement('button');
    botaoExcluir.textContent='X';

    botaoExcluir.addEventListener('click',() =>{textoAdd.remove();
        valorGeral-=total;
        valorTotal.textContent=`Valor total: R$ ${valorGeral.toFixed(2)}`;
    })
    
    textoAdd.textContent=
    `Produto: ${nome.value} - Quantidade: ${quantidade.value} - Preço: R$ ${preco.value} total: R$ ${total.toFixed(2)} `;
    textoAdd.classList.add('lista');
    textoAdd.appendChild(botaoExcluir)
    // altera o texto do "id=valorTotal"
    valorTotal.textContent=`Valor total: R$ ${valorGeral.toFixed(2)}`;
    
    container.appendChild(textoAdd);
    
    //limpa campo
    nome.value ='';
    quantidade.value ='';
    preco.value ='';
});


