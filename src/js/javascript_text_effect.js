document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.color-change');
    const colors = ['#ff6f85', '#fca85f', '#8080fe', '#fef178', '#fc95fc', '#c26ffd', '#96ff9e', '#6ffde5'];

    elements.forEach(element => {
        const letters = element.textContent.split('');
        element.innerHTML = '';

        letters.forEach((letter) => {
            const span = document.createElement('span');
            span.textContent = letter;
            span.style.transition = 'color 0.5s ease';
            element.appendChild(span);
        });

        function changeColor(span) {
            const usedColors = new Set(Array.from(element.querySelectorAll('span')).map(span => span.style.color));
            let color;
            do {
                color = colors[Math.floor(Math.random() * colors.length)];
            } while (usedColors.has(color));
            span.style.color = color;

            // Schedule the next color change
            const randomDelay = Math.random() * (1000 - 200) + 200;
            setTimeout(() => changeColor(span), randomDelay);
        }

        // Initialize color changes for each letter
        element.querySelectorAll('span').forEach(span => {
            changeColor(span);
        });
    });
});