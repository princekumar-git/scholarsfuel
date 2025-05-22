document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const navList = document.getElementById('navList');

    // Toggle navigation menu on hamburger click
    if (menuToggle && navList) {
        menuToggle.addEventListener('click', function() {
            navList.classList.toggle('active');
        });

        // Close menu when a navigation link is clicked (for smooth scrolling)
        navList.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function() {
                if (navList.classList.contains('active')) {
                    navList.classList.remove('active');
                }
            });
        });
    }
});