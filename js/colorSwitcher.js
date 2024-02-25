document.addEventListener('DOMContentLoaded', function() {
    var colorSwitcher = document.getElementById('colorSwitcher');
    var currentStyleSheet = document.getElementById('currentStyleSheet');
    var isDarkThemeActive = false; // Indicateur du thème actif

    colorSwitcher.addEventListener('click', function() {
        if (!isDarkThemeActive) {
            currentStyleSheet.setAttribute('href', 'css/styleDark.css');
            colorSwitcher.classList.add('dark'); // Ajoute la classe 'dark' pour changer l'icône
            isDarkThemeActive = true; // Mettre à jour l'indicateur
        } else {
            currentStyleSheet.setAttribute('href', 'css/style.css');
            colorSwitcher.classList.remove('dark'); // Supprime la classe 'dark' pour changer l'icône
            isDarkThemeActive = false; // Mettre à jour l'indicateur
        }
    });
});
