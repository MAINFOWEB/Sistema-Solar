/**
 * Função para exibir as informações dos astros no painel inferior.
 */
function mostrarInfo(nome, descricao, caminhoImagem) {
    const painel = document.getElementById('painel-info');
    const titulo = document.getElementById('titulo-astro');
    const desc = document.getElementById('desc-astro');
    const imagem = document.getElementById('img-astro');
    const universo = document.querySelector('.universo');

    // 1. Atualiza os textos
    titulo.innerText = nome;
    desc.innerText = descricao;

    // 2. Lógica da imagem com tratamento de erro
    if (caminhoImagem) {
        imagem.src = caminhoImagem;
        imagem.style.display = "block";
        
        // Se a imagem falhar (não existir na pasta), ela se esconde automaticamente
        imagem.onerror = function() {
            this.style.display = "none";
        };
    } else {
        imagem.style.display = "none";
    }
    
    // 3. Abre o painel
    painel.classList.add('ativo');

    // 4. [OPCIONAL] Pausa as órbitas para leitura (efeito "freeze")
    // Para isso funcionar, adicione no CSS: .pausado { animation-play-state: paused !important; }
    const orbitas = document.querySelectorAll('[class^="orbita-"]');
    orbitas.forEach(orb => orb.style.animationPlayState = 'paused');
}

/**
 * Função para fechar o painel e retomar o movimento
 */
function fecharPainel() {
    const painel = document.getElementById('painel-info');
    painel.classList.remove('ativo');

    // Retoma as órbitas
    const orbitas = document.querySelectorAll('[class^="orbita-"]');
    orbitas.forEach(orb => orb.style.animationPlayState = 'running');
}

/**
 * Melhoria de Usabilidade: Fechar o painel ao apertar a tecla "Esc"
 */
document.addEventListener('keydown', (event) => {
    if (event.key === "Escape") {
        fecharPainel();
    }
});

/**
 * Melhoria de UX: Fechar ao clicar fora do painel (no "espaço")
 */
document.addEventListener('click', (event) => {
    const painel = document.getElementById('painel-info');
    // Se o painel estiver aberto e o clique for no fundo (universo), ele fecha
    if (painel.classList.contains('ativo') && event.target.classList.contains('universo')) {
        fecharPainel();
    }
});
