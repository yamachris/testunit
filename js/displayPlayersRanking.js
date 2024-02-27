// Fonction pour charger le fichier JSON depuis le serveur
function loadJSON(category) {
    fetch('./assets/ranking/playersRank.json')
        .then(response => response.json())
        .then(data => {
            // Utilisation des données chargées pour la catégorie spécifiée
            var table = document.getElementById('playerTable');
            while (table.rows.length >   1) {
                table.deleteRow(1);
            }
            data[category].forEach(function (player) {
                var tr = document.createElement('tr');
                var fileName = player.Player.split('\\').pop().split('/').pop();
                var fileNameWithoutExtension = fileName.substring(0, fileName.lastIndexOf('.'));
                tr.innerHTML = '<td>' + player.Rank + '</td>' +
                    '<td><img src="' + player.Player + '" alt="avatar du joueur" title="' + fileNameWithoutExtension + '"></td>' +
                    '<td>' + player.Win_Rate + '</td>' +
                    '<td>' + player.Wins + '</td>' +
                    '<td>' + player.Losses + '</td>' +
                    '<td>' + player.Elo + '</td>' +
                    '<td>' + player.Steak + '</td>';
                table.appendChild(tr);
            });
        })
        .catch(error => console.error('Erreur lors du chargement du fichier JSON:', error));
}

// Fonction pour gérer le clic sur les éléments de navigation
function handleNavClick(event) {
    document.querySelectorAll('nav').forEach(nav => nav.classList.remove('nav-selected'));
    event.target.classList.add('nav-selected');
    var navId = event.target.id;
    loadJSON(navId); // Charger les données correspondantes en fonction de l'ID de l'élément de navigation
}

// Ajouter des écouteurs d'événements de clic sur chaque élément de navigation
document.querySelectorAll('nav').forEach(nav => nav.addEventListener('click', handleNavClick));

document.addEventListener('DOMContentLoaded', function () {
    // Chargement des données par défaut lors du chargement de la page
    loadJSON('allTime');
});
