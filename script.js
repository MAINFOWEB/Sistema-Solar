let isDragging = false;
let startX, startY, currentX = 0, currentY = 0;

const universo = document.getElementById('universo');
const viewport = document.getElementById('viewport');

// Lógica para arrastar o universo
viewport.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.clientX - currentX;
    startY = e.clientY - currentY;
});

window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    currentX = e.clientX - startX;
    currentY = e.clientY - startY;
    // Move o universo baseado no arraste do mouse
    universo.style.transform = `translate(calc(-50% + ${currentX}px), calc(-50% + ${currentY}px)) scale(0.6)`;
});

window.addEventListener('mouseup', () => isDragging = false);

// Controle do Modal de Boas-vindas
function closeWelcome() {
    document.getElementById('welcome-modal').style.display = 'none';
}

// Controle do Painel de Informações
function mostrarInfo(nome, desc, img) {
    const p = document.getElementById('painel-info');
    document.getElementById('titulo-astro').innerText = nome;
    document.getElementById('desc-astro').innerText = desc;
    const i = document.getElementById('img-astro');
    if(img) { i.src = img; i.style.display = 'block'; }
    p.classList.add('ativo');
    document.querySelectorAll('[class^="orbita-"]').forEach(o => o.style.animationPlayState = 'paused');
}

function fecharPainel() {
    document.getElementById('painel-info').classList.remove('ativo');
    document.querySelectorAll('[class^="orbita-"]').forEach(o => o.style.animationPlayState = 'running');
}

document.addEventListener('keydown', (e) => { if(e.key === "Escape") fecharPainel(); });
