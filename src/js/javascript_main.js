document.addEventListener('DOMContentLoaded', () => {

    // Create the blob element
    const blob = document.createElement('div');
    blob.classList.add('blob');
    document.body.appendChild(blob);

    let mouseX = 0, mouseY = 0;
    let blobX = 0, blobY = 0;
    const speed = 0.78;
    let isHovering = false;

    // Update the mouse position on mouse move
    document.addEventListener('mousemove', (event) => {
        if (!isHovering) {
            mouseX = event.clientX;
            mouseY = event.clientY;
        }
    });

    // Animate the blob to follow the mouse with latency
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

    // Handle size transition of blob on hover over clickable elements
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
            blob.style.width = '30px';
            blob.style.height = '30px';
            blob.classList.remove('transition');
        });
    });

    // Scroll fade-in functionality
    const scrollFadeInElements = document.querySelectorAll('.scroll-fade-in');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    scrollFadeInElements.forEach(element => {
        observer.observe(element);
    });

    // NAVBAR change on scroll
    const containerFluid = document.querySelector('.container-fluid');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            containerFluid.classList.add('scrolled');
        } else {
            containerFluid.classList.remove('scrolled');
        }
    });
});

document.addEventListener("scroll", function () {
    var pageTop = window.scrollY;
    var pageBottom = pageTop + window.innerHeight;
    var tags = document.querySelectorAll(".scroll-fade-in");

    tags.forEach(function (tag) {
        if (tag.getBoundingClientRect().top + pageTop < pageBottom) {
            tag.classList.add("visible");
        } else {
            tag.classList.remove("visible");
        }
    });
});
