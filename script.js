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

function closeWelcome() {
    document.getElementById('welcome-modal').style.display = 'none';
}

function mostrarInfo(nome, desc, imgPath) {
    const painel = document.getElementById('painel-info');
    document.getElementById('titulo-astro').innerText = nome;
    document.getElementById('desc-astro').innerText = desc;
    
    const imgElement = document.getElementById('img-astro');
    if (imgPath) {
        imgElement.src = imgPath;
        imgElement.style.display = 'block';
        imgElement.onerror = function() { this.style.display = 'none'; };
    } else {
        imgElement.style.display = 'none';
    }

    painel.classList.add('ativo');
    document.querySelectorAll('.orbita, .container-lua').forEach(o => o.style.animationPlayState = 'paused');
}

function fecharPainel() {
    document.getElementById('painel-info').classList.remove('ativo');
    document.querySelectorAll('.orbita, .container-lua').forEach(o => o.style.animationPlayState = 'running');
}

document.addEventListener('keydown', (e) => {
    if (e.key === "Escape") fecharPainel();
});
