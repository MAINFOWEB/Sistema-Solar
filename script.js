function mostrarInfo(nome, descricao) {
    const painel = document.getElementById('painel-info');
    document.getElementById('titulo-astro').innerText = nome;
    document.getElementById('desc-astro').innerText = descricao;
    
    painel.classList.add('ativo');
}

function fecharPainel() {
    document.getElementById('painel-info').classList.remove('ativo');
}
