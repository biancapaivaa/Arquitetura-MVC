function renderizar(produtos) {
    const ul = document.getElementById("lista-produtos");

    if (produtos.length === 0) {
        ul.innerHTML = `<div class="empty">Nenhum produto cadastrado</div>`;
        return;
    }

    ul.innerHTML = produtos
        .map((p, i) => `
            <li>
                <span class="prod-nome">${p.nome}</span>
                <span class="prod-preco">R$ ${p.preco}</span>

                <div class="actions">
                    <button class="btn-ghost" onclick="controllerEditar(${i})">✏️</button>
                    <button class="btn-ghost btn-delete" onclick="controllerExcluir(${i})">🗑️</button>
                </div>
            </li>
        `)
        .join("");
}
