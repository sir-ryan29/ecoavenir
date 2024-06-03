// Afficher une alerte lors du clic sur le bouton
document.getElementById('alertButton').addEventListener('click', function() {
    alert('Merci de votre intérêt pour EcoAvenir!');
});

// Changer la couleur de fond des événements au survol
document.querySelectorAll('.event').forEach(event => {
    event.addEventListener('mouseenter', function() {
        this.style.backgroundColor = '#e9f5e9';
    });

    event.addEventListener('mouseleave', function() {
        this.style.backgroundColor = '';
    });
});
