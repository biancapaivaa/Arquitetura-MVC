// pega produtos do localStorage
function getProdutos() {
    return JSON.parse(localStorage.getItem("produtos")) || [];
}

// salva lista
function saveProdutos(lista) {
    localStorage.setItem("produtos", JSON.stringify(lista));
}

// adiciona
function addProduto(nome, preco) {
    const lista = getProdutos();
    lista.push({ nome, preco });
    saveProdutos(lista);
    return lista;
}

// remove produto por índice
function deleteProduto(index) {
    const lista = getProdutos();
    lista.splice(index, 1); 
    saveProdutos(lista);
    return lista;
}

// editar produto
function editProduto(index, novoNome, novoPreco) {
    const lista = getProdutos();
    lista[index].nome = novoNome;
    lista[index].preco = novoPreco;
    saveProdutos(lista);
    return lista;
}
