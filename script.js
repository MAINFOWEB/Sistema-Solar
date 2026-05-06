let isDragging = false;
let startX, startY, scrollX, scrollY;
const universo = document.getElementById('universo');
const viewport = document.getElementById('viewport');

viewport.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.pageX - universo.offsetLeft;
    startY = e.pageY - universo.offsetTop;
});

viewport.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - startX;
    const y = e.pageY - startY;
    universo.style.left = x + 'px';
    universo.style.top = y + 'px';
});

window.addEventListener('mouseup', () => isDragging = false);

function mostrarInfo(nome, descricao, img) {
    const p = document.getElementById('painel-info');
    document.getElementById('titulo-astro').innerText = nome;
    document.getElementById('desc-astro').innerText = descricao;
    const i = document.getElementById('img-astro');
    if(img) { i.src = img; i.style.display = 'block'; }
    p.classList.add('ativo');
    document.querySelectorAll('[class^="orbita-"]').forEach(o => o.style.animationPlayState = 'paused');
}

function fecharPainel() {
    document.getElementById('painel-info').classList.remove('ativo');
    document.querySelectorAll('[class^="orbita-"]').forEach(o => o.style.animationPlayState = 'running');
}

function closeWelcome() {
    document.getElementById('welcome-modal').style.display = 'none';
}

document.addEventListener('keydown', (e) => { if(e.key === "Escape") fecharPainel(); });
