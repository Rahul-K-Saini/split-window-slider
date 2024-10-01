const slider = document.getElementById('slider');
const leftPane = document.getElementById('A');
const rightPane = document.getElementById('B');

let isResizing = false;

slider.addEventListener('mousedown', startResizing);
document.addEventListener('mousemove', resize);
document.addEventListener('mouseup', stopResizing);

slider.addEventListener('touchstart', startResizing);
document.addEventListener('touchmove', resize);
document.addEventListener('touchend', stopResizing);

function startResizing(e) {
    isResizing = true;
}

function stopResizing(e) {
    isResizing = false;
}

function resize(e) {
    if (!isResizing) return;

    let clientX;
    if (e.type === 'touchmove') {
        clientX = e.touches[0].clientX;
    } else {
        clientX = e.clientX;
    }

    const containerWidth = document.body.clientWidth;
    const newPosition = (clientX / containerWidth) * 100;

    if (newPosition > 10 && newPosition < 90) {
        leftPane.style.width = `${newPosition}%`;
        slider.style.left = `${newPosition}%`;
        rightPane.style.width = `${100 - newPosition}%`;
    }
}

slider.style.position = 'absolute';
slider.style.left = '50%';
slider.style.transform = 'translateX(-50%)';
slider.style.cursor = 'col-resize';