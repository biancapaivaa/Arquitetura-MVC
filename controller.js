// --- adicionar ---
document.getElementById("form-produto").addEventListener("submit", function(e) {
    e.preventDefault();

    const nome = document.getElementById("nome").value;
    const preco = document.getElementById("preco").value;

    const listaAtualizada = addProduto(nome, preco);
    renderizar(listaAtualizada);

    e.target.reset();
});

// --- excluir ---
function controllerExcluir(index) {
    const listaAtualizada = deleteProduto(index);
    renderizar(listaAtualizada);
}

// --- editar ---
function controllerEditar(index) {
    const produtos = getProdutos();
    const atual = produtos[index];

    const novoNome = prompt("Novo nome do produto:", atual.nome);
    if (novoNome === null || novoNome.trim() === "") return;

    const novoPreco = prompt("Novo preço:", atual.preco);
    if (novoPreco === null || novoPreco.trim() === "") return;

    const listaAtualizada = editProduto(index, novoNome, novoPreco);
    renderizar(listaAtualizada);
}

// render inicial
renderizar(getProdutos());
