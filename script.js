/**
 * Função para exibir as informações dos astros no painel inferior.
 * @param {string} nome - Nome do planeta ou lua.
 * @param {string} descricao - Texto explicativo sobre o astro.
 * @param {string} caminhoImagem - URL ou caminho local da imagem (assets/img/...).
 */
function mostrarInfo(nome, descricao, caminhoImagem) {
    const painel = document.getElementById('painel-info');
    const titulo = document.getElementById('titulo-astro');
    const desc = document.getElementById('desc-astro');
    const imagem = document.getElementById('img-astro');

    // Atualiza os textos do painel
    titulo.innerText = nome;
    desc.innerText = descricao;

    // Lógica para carregar e exibir a imagem se ela existir
    if (caminhoImagem) {
        imagem.src = caminhoImagem;
        imagem.style.display = "block"; // Mostra a tag img
    } else {
        imagem.style.display = "none";  // Esconde se não houver foto definida
    }
    
    // Adiciona a classe que faz o painel subir (conforme seu CSS)
    painel.classList.add('ativo');
}

/**
 * Função para fechar o painel de informações.
 */
function fecharPainel() {
    const painel = document.getElementById('painel-info');
    painel.classList.remove('ativo');
}
