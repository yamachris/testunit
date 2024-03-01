document.addEventListener('DOMContentLoaded', function() {
    // Sélection des éléments
    const loginSection = document.querySelector('#login');
    const submitBtn = document.querySelector('button[type="submit"]');
    const form = document.querySelector('form');

    // Écouteur d'événement pour le survol de la section
    loginSection.addEventListener('mouseover', function() {
        form.classList.add('animate-form');
    });

    // Écouteur d'événement pour le clic sur le bouton de soumission
    submitBtn.addEventListener('click', function(event) {
        event.preventDefault(); // Empêche le comportement par défaut du formulaire
        form.classList.add('animate-submit');
    });
});