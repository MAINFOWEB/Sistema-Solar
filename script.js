function mostrarInfo(nome, descricao, caminhoImagem) {
    const painel = document.getElementById('painel-info');
    const titulo = document.getElementById('titulo-astro');
    const desc = document.getElementById('desc-astro');
    const imagem = document.getElementById('img-astro');
    
    // Pausa as órbitas para o usuário conseguir ver o planeta
    const orbitas = document.querySelectorAll('[class^="orbita-"]');
    orbitas.forEach(o => o.style.animationPlayState = 'paused');

    titulo.innerText = nome;
    desc.innerText = descricao;

    if (caminhoImagem) {
        imagem.src = caminhoImagem;
        imagem.style.display = "block";
        imagem.onerror = () => imagem.style.display = "none";
    } else {
        imagem.style.display = "none";
    }

    painel.classList.add('ativo');
}

function fecharPainel() {
    const painel = document.getElementById('painel-info');
    painel.classList.remove('ativo');
    
    // Retoma o movimento
    const orbitas = document.querySelectorAll('[class^="orbita-"]');
    orbitas.forEach(o => o.style.animationPlayState = 'running');
}
