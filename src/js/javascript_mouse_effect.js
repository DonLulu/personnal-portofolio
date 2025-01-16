document.addEventListener('DOMContentLoaded', () => {
    const blob = document.createElement('div');
    blob.classList.add('blob');
    document.body.appendChild(blob);

    let mouseX = 0, mouseY = 0;
    let blobX = 0, blobY = 0;
    const speed = 0.78;
    let isHovering = false;

    document.addEventListener('mousemove', (event) => {
        if (!isHovering) {
            mouseX = event.clientX;
            mouseY = event.clientY;
        }
    });

    function animateBlob() {
        if (!isHovering) {
            blobX += (mouseX - blobX) * speed;
            blobY += (mouseY - blobY) * speed;

            blob.style.left = `${blobX}px`;
            blob.style.top = `${blobY}px`;
        }

        requestAnimationFrame(animateBlob);
    }

    animateBlob();

    const clickableElements = document.querySelectorAll('a, button, .clickable');
    clickableElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            isHovering = true;
            const rect = element.getBoundingClientRect();
            const maxDimension = Math.max(rect.width, rect.height) + 10;
            blob.style.width = `${maxDimension}px`;
            blob.style.height = `${maxDimension}px`;
            blob.style.left = `${rect.left + rect.width / 2}px`;
            blob.style.top = `${rect.top + rect.height / 2}px`;
            blob.classList.add('transition');
        });
        element.addEventListener('mouseleave', () => {
            isHovering = false;
            blob.style.width = '30px'; // Revert to initial small size
            blob.style.height = '30px'; // Revert to initial small size
            blob.classList.remove('transition');
        });
    });
});
