// Compteur interactif
const btn = document.getElementById('btn');
const counter = document.getElementById('counter');
let count = 0;

btn.addEventListener('click', () => {
    count++;
    counter.textContent = `Compteur : ${count}`;
});

// Mode Sombre/Clair
const themeSwitch = document.getElementById('theme-switch');
themeSwitch.addEventListener('change', () => {
    document.body.setAttribute('data-theme', themeSwitch.checked ? 'dark' : 'light');
});