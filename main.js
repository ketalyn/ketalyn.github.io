document.addEventListener('DOMContentLoaded', function () {
    const fixedTitle = document.getElementById('maintitle');
    const menuIcon = document.getElementById('menu-icon');
    const sidebar = document.querySelector('.navbar .dropdown-content');

    window.addEventListener('scroll', function () {
        // Show the fixed title when scrolled past a certain point
        fixedTitle.style.top = (window.scrollY > 900) ? '-300px' : '50px';
    });

    menuIcon.addEventListener('click', function () {
        if (sidebar.style.display === 'block') {
            sidebar.style.display = 'none';
        } else {
            sidebar.style.display = 'block';
        }
    });

    document.addEventListener('click', function (event) {
        // Close the sidebar if a click is outside of the sidebar and menu icon
        if (!event.target.matches('#menu-icon') && !event.target.closest('.navbar')) {
            sidebar.style.display = 'none';
        }
    });
});
