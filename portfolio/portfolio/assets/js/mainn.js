const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId);

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show');
        });
    }
}

showMenu('nav_toggle', 'nav_menu');

// ------------------ACTIVE & Deactivate Menu
const navLink = document.querySelectorAll('.nav_link');

function linkAction() {
    //  Activate Menu Link
    navLink.forEach(menu => menu.classList.remove('active'));
    this.classList.add('active');

    // Remove Your Mobile Menu
    const navMenu = document.getElementById('nav_menu');
    navMenu.classList.remove('show');
}

navLink.forEach(menu => menu.addEventListener('click', linkAction))