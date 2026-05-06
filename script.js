let isDragging = false;
let startX, startY, currentX = 0, currentY = 0;
const universo = document.getElementById('universo');
const viewport = document.getElementById('viewport');

viewport.onmousedown = (e) => {
    isDragging = true;
    startX = e.clientX - currentX;
    startY = e.clientY - currentY;
};

window.onmousemove = (e) => {
    if (!isDragging) return;
    currentX = e.clientX - startX;
    currentY = e.clientY - startY;
    universo.style.transform = `translate(calc(-50% + ${currentX}px), calc(-50% + ${currentY}px)) scale(0.5)`;
};

window.onmouseup = () => isDragging = false;

function closeWelcome() { document.getElementById('welcome-modal').style.display = 'none'; }

function mostrarInfo(nome, desc, img) {
    document.getElementById('titulo-astro').innerText = nome;
    document.getElementById('desc-astro').innerText = desc;
    const i = document.getElementById('img-astro');
    i.src = img || "";
    i.style.display = img ? 'block' : 'none';
    document.getElementById('painel-info').classList.add('ativo');
    document.querySelectorAll('.orbita').forEach(o => o.style.animationPlayState = 'paused');
}

function fecharPainel() {
    document.getElementById('painel-info').classList.remove('ativo');
    document.querySelectorAll('.orbita').forEach(o => o.style.animationPlayState = 'running');
}
