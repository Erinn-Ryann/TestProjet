// Carrousel automatique
//let currentIndex = 0;
//const items = document.querySelectorAll('.carousel-item');
//const totalItems = items.length;

//function showNextImage() {
  //  currentIndex = (currentIndex + 1) % totalItems;
   // updateCarousel();
//}

//function updateCarousel() {
  //  document.querySelector('.carousel-inner').style.transform = 
    //    `translateX(-${currentIndex * 100}%)`;
//}

// Navigation manuelle
//document.querySelector('.next').addEventListener('click', showNextImage);
//document.querySelector('.prev').addEventListener('click', () => {
  //  currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    //updateCarousel();
//});

// Auto-défilement toutes les 3 secondes
//setInterval(showNextImage, 3000);

// Formulaire
document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Message envoyé à la licorne postale ! 🦄');
    e.target.reset();
});

// Compteur magique
let count = 0;
document.getElementById('btn').addEventListener('click', () => {
    count++;
    document.getElementById('counter').textContent = `Compteur : ${count}`;
    
    // Petit effet visuel
    this.style.transform = 'scale(1.1)';
    setTimeout(() => this.style.transform = 'scale(1)', 200);
});

// Mode sombre/clair
document.getElementById('theme-switch').addEventListener('change', function() {
    document.body.setAttribute('data-theme', this.checked ? 'dark' : 'light');
});