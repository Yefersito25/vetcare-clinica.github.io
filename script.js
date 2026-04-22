// DARK MODE TOGGLE con guardado en localStorage
const toggleBtn = document.getElementById('darkModeToggle');
const body = document.body;

// Revisar preferencia guardada
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark');
    toggleBtn.innerHTML = '<i class="fas fa-sun"></i> <span>Modo claro</span>';
}

toggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark');
    
    if (body.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark');
        toggleBtn.innerHTML = '<i class="fas fa-sun"></i> <span>Modo claro</span>';
    } else {
        localStorage.setItem('theme', 'light');
        toggleBtn.innerHTML = '<i class="fas fa-moon"></i> <span>Modo oscuro</span>';
    }
});