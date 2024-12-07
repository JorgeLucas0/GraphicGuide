document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll('.tab');

    tabs.forEach(tab => {
        const toggleButton = tab.querySelector('.tab-toggle');
        const content = tab.querySelector('.tab-content');

        toggleButton.addEventListener('click', () => {
            const isOpen = content.style.display === 'block';

            
            tabs.forEach(otherTab => {
                const otherContent = otherTab.querySelector('.tab-content');
                const otherButton = otherTab.querySelector('.tab-toggle');
                if (otherTab !== tab) {
                    otherContent.style.display = 'none';
                    otherButton.classList.remove('open');
                }
            });

            
            content.style.display = isOpen ? 'none' : 'block';
            toggleButton.classList.toggle('open', !isOpen);
        });
    });
});

