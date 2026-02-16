// Toggle Menu
function menutoggle() {
    const menuItems = document.getElementById('MenuItems');
    menuItems.style.maxHeight = menuItems.style.maxHeight === '0px' ? '200px' : '0px';
}

// Add active class to current nav item
document.addEventListener('DOMContentLoaded', function() {
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        const menu = document.getElementById('MenuItems');
        const menuIcon = document.querySelector('.menu-icon');
        if (!menu.contains(event.target) && event.target !== menuIcon) {
            menu.style.maxHeight = '0px';
        }
    });
});
