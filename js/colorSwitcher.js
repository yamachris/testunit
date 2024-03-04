document.addEventListener('DOMContentLoaded', function() {
    var colorSwitcher = document.getElementById('dark-mode');
    var currentStyleSheet = document.getElementById('currentStyleSheet');
    var isDarkThemeActive = false; // Indicateur du thème actif

    (function() {
        var toggle_switch;
      
        toggle_switch = document.querySelector('#dark-mode');
      
        toggle_switch.addEventListener('input', function() {
          var body, label;
          label = this.labels[0];
          body = document.body;
          return body.dataset.darkMode = label.dataset.darkMode = this.checked;
        });
      
      }).call(this);

    // Fonction pour définir le thème
    function setTheme(theme) {
        if (theme === 'dark') {
            currentStyleSheet.setAttribute('href', 'css/styleDark.css');
            colorSwitcher.classList.add('dark'); // Ajoute la classe 'dark' pour changer l'icône
        } else {
            currentStyleSheet.setAttribute('href', 'css/style.css');
            colorSwitcher.classList.remove('dark'); // Supprime la classe 'dark' pour changer l'icône
        }
    }

    // Détection du thème du système de l'utilisateur
    const systemSettingDark = window.matchMedia("(prefers-color-scheme: dark)");

    // Vérifie si l'utilisateur a déjà choisi un thème
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        isDarkThemeActive = savedTheme === 'dark';
    } else {
        // Si l'utilisateur n'a pas choisi de thème, utilise les préférences du système
        isDarkThemeActive = systemSettingDark.matches;
    }

    // Appel initial pour définir le thème en fonction du système ou des préférences de l'utilisateur
    setTheme(isDarkThemeActive ? 'dark' : 'light');

    // Écouteur d'événements pour le bouton de commutation de thème
    colorSwitcher.addEventListener('click', function() {
        isDarkThemeActive = !isDarkThemeActive; // Inverse l'indicateur
        setTheme(isDarkThemeActive ? 'dark' : 'light'); // Appelle la fonction pour changer le thème
        localStorage.setItem('theme', isDarkThemeActive ? 'dark' : 'light'); // Enregistre la préférence de l'utilisateur
    });

    // Écouteur d'événements pour détecter les changements de thème du système
    systemSettingDark.addEventListener('change', function(e) {
        if (e.matches) {
            isDarkThemeActive = true; // Mettre à jour l'indicateur en fonction des préférences du système
        } else {
            isDarkThemeActive = false; // Mettre à jour l'indicateur en fonction des préférences du système
        }
        // Ne change pas le thème si l'utilisateur a choisi un thème
        if (!localStorage.getItem('theme')) {
            setTheme(isDarkThemeActive ? 'dark' : 'light'); // Appelle la fonction pour changer le thème en fonction de l'état actuel
        }
    });
});
