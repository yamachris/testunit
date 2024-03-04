document.addEventListener('DOMContentLoaded', function() {
  // Sélection de l'élément représentant la langue actuellement sélectionnée
    const selectedLang = document.querySelector('.selected-lang');
    // Sélection de l'élément représentant les options de langue
    const languageOptions = document.querySelector('.language-options');
    // Ajout d'un écouteur d'événements pour détecter les clics sur l'élément de langue sélectionnée
    selectedLang.addEventListener('click', function() {
      // Bascule l'affichage des options de langue entre visible et caché à chaque clic
      languageOptions.style.display = languageOptions.style.display === 'block' ? 'none' : 'block';
    });
  
    document.querySelectorAll('.option').forEach(option => {
      option.addEventListener('mouseenter', function() {
        let popover = this.querySelector('.popover');
        if (!popover) {
          popover = document.createElement('div');
          popover.textContent = this.getAttribute('data-lang');
          popover.className = 'popover';
          this.appendChild(popover);
        }
        popover.style.display = 'block';
      });
  
      option.addEventListener('mouseleave', function() {
        const popover = this.querySelector('.popover');
        if (popover) {
          popover.style.display = 'none';
        }
      });
  
      option.addEventListener('click', function() {
        const newFlagSrc = this.querySelector('img').src;
        selectedLang.querySelector('img').src = newFlagSrc;
        languageOptions.style.display = 'none';
      });
    });
  
    // Fermer les options si on clique en dehors
    document.addEventListener('click', function(e) {
      if (!selectedLang.contains(e.target) && !languageOptions.contains(e.target)) {
        languageOptions.style.display = 'none';
      }
    });
  });
  