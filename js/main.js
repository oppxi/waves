document.addEventListener('DOMContentLoaded', () => {
    // Simple click logger for demonstration
    const cards = document.querySelectorAll('.wave-card');
    
    cards.forEach(card => {
        card.addEventListener('click', () => {
            const title = card.querySelector('h3').textContent;
            console.log(`Clicked on: ${title}`);
        });
    });
});