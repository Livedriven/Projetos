const toggle = document.getElementById('menuToggle');
const nav = document.getElementById('navLink');

toggle.addEventListener('click', () => {
    nav.classList.toggle('active');
})