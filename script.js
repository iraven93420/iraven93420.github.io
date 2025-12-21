// Theme toggle
const themeToggle = document.querySelector('.theme-toggle');
const html = document.documentElement;

// Charger le thème sauvegardé
const savedTheme = localStorage.getItem('theme') || 'dark';
if (savedTheme === 'light') {
    html.classList.add('light');
    updateThemeIcon();
}

themeToggle?.addEventListener('click', () => {
    html.classList.toggle('light');
    const isLight = html.classList.contains('light');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
    updateThemeIcon();
});

function updateThemeIcon() {
    const icon = themeToggle.querySelector('i');
    const isLight = html.classList.contains('light');
    icon.classList.remove(isLight ? 'fa-moon' : 'fa-sun');
    icon.classList.add(isLight ? 'fa-sun' : 'fa-moon');
}

// Project filtering (sur la page projects.html)
const filterBtns = document.querySelectorAll('.filter-btn');
const projectItems = document.querySelectorAll('.project-item');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Mettre à jour le bouton actif
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filterValue = btn.getAttribute('data-filter');

        // Filtrer les projets
        projectItems.forEach(item => {
            if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                item.style.display = 'block';
                setTimeout(() => item.classList.add('show'), 10);
            } else {
                item.classList.remove('show');
                setTimeout(() => item.style.display = 'none', 300);
            }
        });
    });
});

// Initialiser l'affichage des projets
projectItems.forEach(item => item.classList.add('show'));
