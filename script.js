document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const mainNav = document.getElementById('mainNav');

    // Toggle para mostrar/ocultar el menú en móviles
    menuToggle.addEventListener('click', function() {
        mainNav.classList.toggle('active');
    });

    // Ocultar el menú después de hacer clic en un enlace (para navegación interna)
    mainNav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (mainNav.classList.contains('active')) {
                mainNav.classList.remove('active');
            }
        });
    });
});