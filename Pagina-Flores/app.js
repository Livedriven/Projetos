const toggle = document.getElementById('menutoggle');
const nav = document.getElementById('navlist'); -

toggle.addEventListener('click', () => {
    nav.classList.toggle('active')
});