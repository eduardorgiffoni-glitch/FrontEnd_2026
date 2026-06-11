// ==========================================
// 1. MODELAGEM ORIENTADA A OBJETOS (POO)
// ==========================================
class Produto {
    constructor(idProduto, nome, preco, estoque) {
        this.idProduto = idProduto;
        this.nome = nome;
        this.preco = preco;
        this.estoque = estoque;
    }
}

class ItemVenda {
    constructor(produto, quantidade) {
        this.produto = produto;
        this.quantidade = quantidade;
        this.subTotal = produto.preco * quantidade;
    }
}

// ==========================================
// 2. ESTRUTURA DE DADOS: FILA (Queue - FIFO)
// ==========================================
class FilaPedidos {
    constructor() { 
        this.itens = []; 
    }
    
    enfileirar(pedido) { 
        this.itens.push(pedido); 
    } 
    
    desenfileirar() { 
        return this.itens.shift(); 
    }   
    
    estaVazia() { 
        return this.itens.length === 0; 
    }
    
    obterFila() { 
        return this.itens; 
    }
}

// ==========================================
// 3. ESTADO DA APLICAÇÃO (Dados em Memória)
// ==========================================
const produtosExistentes = [
    new Produto(1, "Mel Puro 500g", 25.00, 10),
    new Produto(2, "Saca de Café Artesanal", 45.00, 5),
    new Produto(3, "Queijo Meia Cura", 30.00, 8)
];

const filaDeVendas = new FilaPedidos();
let produtoSelecionadoId = 1;

// ==========================================
// 4. FUNÇÕES DE CONTROLE E INTERFACE (DOM)
// ==========================================

function renderizarVitrine() {
    const vitrine = document.getElementById('vitrine');
    vitrine.innerHTML = "";
    
    produtosExistentes.forEach(p => {
        vitrine.innerHTML += `
            <div class="item-produto" onclick="selecionarProduto(${p.idProduto})" id="prod-${p.idProduto}" style="cursor:pointer;">
                <strong>${p.nome}</strong><br>
                R$ ${p.preco.toFixed(2)}<br>
                <small>Estoque: ${p.estoque} un</small>
            </div>
        `;
    });
    selecionarProduto(produtoSelecionadoId);
}

function selecionarProduto(id) {
    produtoSelecionadoId = id;
    produtosExistentes.forEach(p => {
        const el = document.getElementById(`prod-${p.idProduto}`);
        if(el) {
            el.style.border = p.idProduto === id ? "2px solid #2e7d32" : "1px solid #ddd";
            el.style.backgroundColor = p.idProduto === id ? "#e8f5e9" : "#fafafa";
        }
    });
}

function cadastrarProdutoDoForm() {
    const nome = document.getElementById('prod-nome').value;
    const preco = parseFloat(document.getElementById('prod-preco').value);
    const estoque = parseInt(document.getElementById('prod-estoque').value);

    if(!nome || isNaN(preco) || isNaN(estoque)) {
        alert("Preencha todos os campos do produto!");
        return;
    }

    const novoId = produtosExistentes.length + 1;
    produtosExistentes.push(new Produto(novoId, nome, preco, estoque));
    
    renderizarVitrine();
    
    document.getElementById('prod-nome').value = "";
    document.getElementById('prod-preco').value = "";
    document.getElementById('prod-estoque').value = "";
}

function realizarCompra() {
    const qtd = parseInt(document.getElementById('compra-qtd').value);
    const produto = produtosExistentes.find(p => p.idProduto === produtoSelecionadoId);

    if(!produto) return;

    if(qtd > produto.estoque) {
        alert("Quantidade superior ao estoque disponível!");
        return;
    }

    produto.estoque -= qtd;
    
    const novoItem = new ItemVenda(produto, qtd);
    filaDeVendas.enfileirar(novoItem);

    renderizarVitrine();
    atualizarFilaInterface();
    alert(`Sucesso! Seu pedido de ${produto.nome} foi enviado para a fila.`);
}

function atualizarFilaInterface() {
    const containerFila = document.getElementById('fila-pedidos');
    containerFila.innerHTML = "";
    
    const pedidos = filaDeVendas.obterFila();
    
    if(pedidos.length === 0) {
        containerFila.innerHTML = "<p>Nenhum pedido na fila no momento.</p>";
        return;
    }

    pedidos.forEach((pedido, index) => {
        containerFila.innerHTML += `
            <div class="pedido-item">
                <strong>#${index + 1} - ${pedido.produto.nome}</strong><br>
                Quantidade: ${pedido.quantidade} | Total: R$ ${pedido.subTotal.toFixed(2)}
            </div>
        `;
    });
}

function processarProximoPedido() {
    if(filaDeVendas.estaVazia()) {
        alert("Não há pedidos pendentes para processar!");
        return;
    }
    
    const atendido = filaDeVendas.desenfileirar();
    
    atualizarFilaInterface();
    alert(`Pedido de "${atendido.produto.nome}" (Qtd: ${atendido.quantidade}) foi despachado para entrega!`);
}

// Inicialização do sistema
renderizarVitrine();
atualizarFilaInterface();
