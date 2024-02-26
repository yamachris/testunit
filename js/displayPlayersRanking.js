function loadJSON(data) {
    var table = document.getElementById('playerTable');
    while (table.rows.length > 1) {
        table.deleteRow(1);
    }
    data.forEach(function (player) {
        var tr = document.createElement('tr');
        tr.innerHTML = '<td>' + player.Rank + '</td>' +
            '<td>' + player.Player + '</td>' +
            '<td>' + player.Win_Rate + '</td>' +
            '<td>' + player.Wins + '</td>' +
            '<td>' + player.Losses + '</td>' +
            '<td>' + player.Elo + '</td>' +
            '<td>' + player.Steak + '</td>';
        table.appendChild(tr);
    });
}

// Gestion des datas relatifs aux tableaux

var data = {
    allTime: [
        {
            "Rank": 1,
            "Player": "AppleUser",
            "Win_Rate": "80%",
            "Wins": 24,
            "Losses": 6,
            "Elo": 1200,
            "Steak": 3
        },
        {
            "Rank": 2,
            "Player": "Nausica",
            "Win_Rate": "70%",
            "Wins": 21,
            "Losses": 9,
            "Elo": 1180,
            "Steak": 1
        },
        {
            "Rank": 3,
            "Player": "Scientificus",
            "Win_Rate": "60%",
            "Wins": 18,
            "Losses": 12,
            "Elo": 1160,
            "Steak": 2
        },
        {
            "Rank": 4,
            "Player": "Yahia",
            "Win_Rate": "50%",
            "Wins": 15,
            "Losses": 15,
            "Elo": 1140,
            "Steak": 0
        },
        {
            "Rank": 5,
            "Player": "Teubé",
            "Win_Rate": "40%",
            "Wins": 12,
            "Losses": 18,
            "Elo": 1120,
            "Steak": -1
        },
        {
            "Rank": 6,
            "Player": "DEDE",
            "Win_Rate": "30%",
            "Wins": 9,
            "Losses": 21,
            "Elo": 1100,
            "Steak": -2
        },
        {
            "Rank": 7,
            "Player": "Clemzy",
            "Win_Rate": "20%",
            "Wins": 6,
            "Losses": 24,
            "Elo": 1180,
            "Steak": -3
        },
        {
            "Rank": 8,
            "Player": "Léa",
            "Win_Rate": "10%",
            "Wins": 3,
            "Losses": 27,
            "Elo": 1160,
            "Steak": -4
        }
    ],
    thisMonth: [
        {
            "Rank": 1,
            "Player": "Nausica",
            "Win_Rate": "80%",
            "Wins": 24,
            "Losses": 6,
            "Elo": 1200,
            "Steak": 3
        },
        {
            "Rank": 2,
            "Player": "Scientificus",
            "Win_Rate": "70%",
            "Wins": 21,
            "Losses": 9,
            "Elo": 1180,
            "Steak": 1
        },
        {
            "Rank": 3,
            "Player": "AppleUser",
            "Win_Rate": "60%",
            "Wins": 18,
            "Losses": 12,
            "Elo": 1160,
            "Steak": 2
        },
        {
            "Rank": 4,
            "Player": "Yahia",
            "Win_Rate": "50%",
            "Wins": 15,
            "Losses": 15,
            "Elo": 1140,
            "Steak": 0
        },
        {
            "Rank": 5,
            "Player": "Teubé",
            "Win_Rate": "40%",
            "Wins": 12,
            "Losses": 18,
            "Elo": 1120,
            "Steak": -1
        },
        {
            "Rank": 6,
            "Player": "DEDE",
            "Win_Rate": "30%",
            "Wins": 9,
            "Losses": 21,
            "Elo": 1100,
            "Steak": -2
        },
        {
            "Rank": 7,
            "Player": "Clemzy",
            "Win_Rate": "20%",
            "Wins": 6,
            "Losses": 24,
            "Elo": 1180,
            "Steak": -3
        },
        {
            "Rank": 8,
            "Player": "Léa",
            "Win_Rate": "10%",
            "Wins": 3,
            "Losses": 27,
            "Elo": 1160,
            "Steak": -4
        }
    ],
    lastMonth: [
        {
            "Rank": 1,
            "Player": "Yahia",
            "Win_Rate": "80%",
            "Wins": 24,
            "Losses": 6,
            "Elo": 1200,
            "Steak": 3
        },
        {
            "Rank": 2,
            "Player": "Teubé",
            "Win_Rate": "70%",
            "Wins": 21,
            "Losses": 9,
            "Elo": 1180,
            "Steak": 1
        },
        {
            "Rank": 3,
            "Player": "AppleUser",
            "Win_Rate": "60%",
            "Wins": 18,
            "Losses": 12,
            "Elo": 1160,
            "Steak": 2
        },
        {
            "Rank": 4,
            "Player": "Nausica",
            "Win_Rate": "50%",
            "Wins": 15,
            "Losses": 15,
            "Elo": 1140,
            "Steak": 0
        },
        {
            "Rank": 5,
            "Player": "Scientificus",
            "Win_Rate": "40%",
            "Wins": 12,
            "Losses": 18,
            "Elo": 1120,
            "Steak": -1
        },
        {
            "Rank": 6,
            "Player": "DEDE",
            "Win_Rate": "30%",
            "Wins": 9,
            "Losses": 21,
            "Elo": 1100,
            "Steak": -2
        },
        {
            "Rank": 7,
            "Player": "Clemzy",
            "Win_Rate": "20%",
            "Wins": 6,
            "Losses": 24,
            "Elo": 1180,
            "Steak": -3
        },
        {
            "Rank": 8,
            "Player": "Léa",
            "Win_Rate": "10%",
            "Wins": 3,
            "Losses": 27,
            "Elo": 1160,
            "Steak": -4
        }
    ],
    thisWeek: [
        {
            "Rank": 1,
            "Player": "AppleUser",
            "Win_Rate": "80%",
            "Wins": 24,
            "Losses": 6,
            "Elo": 1200,
            "Steak": 3
        },
        {
            "Rank": 2,
            "Player": "Scientificus",
            "Win_Rate": "70%",
            "Wins": 21,
            "Losses": 9,
            "Elo": 1180,
            "Steak": 1
        },
        {
            "Rank": 3,
            "Player": "Nausica",
            "Win_Rate": "60%",
            "Wins": 18,
            "Losses": 12,
            "Elo": 1160,
            "Steak": 2
        },
        {
            "Rank": 4,
            "Player": "Yahia",
            "Win_Rate": "50%",
            "Wins": 15,
            "Losses": 15,
            "Elo": 1140,
            "Steak": 0
        },
        {
            "Rank": 5,
            "Player": "Teubé",
            "Win_Rate": "40%",
            "Wins": 12,
            "Losses": 18,
            "Elo": 1120,
            "Steak": -1
        },
        {
            "Rank": 6,
            "Player": "DEDE",
            "Win_Rate": "30%",
            "Wins": 9,
            "Losses": 21,
            "Elo": 1100,
            "Steak": -2
        },
        {
            "Rank": 7,
            "Player": "Clemzy",
            "Win_Rate": "20%",
            "Wins": 6,
            "Losses": 24,
            "Elo": 1180,
            "Steak": -3
        },
        {
            "Rank": 8,
            "Player": "Léa",
            "Win_Rate": "10%",
            "Wins": 3,
            "Losses": 27,
            "Elo": 1160,
            "Steak": -4
        }
    ],
    lastWeek: [
        {
            "Rank": 1,
            "Player": "Yahia",
            "Win_Rate": "80%",
            "Wins": 24,
            "Losses": 6,
            "Elo": 1200,
            "Steak": 3
        },
        {
            "Rank": 2,
            "Player": "Teubé",
            "Win_Rate": "70%",
            "Wins": 21,
            "Losses": 9,
            "Elo": 1180,
            "Steak": 1
        },
        {
            "Rank": 3,
            "Player": "AppleUser",
            "Win_Rate": "60%",
            "Wins": 18,
            "Losses": 12,
            "Elo": 1160,
            "Steak": 2
        },
        {
            "Rank": 4,
            "Player": "Nausica",
            "Win_Rate": "50%",
            "Wins": 15,
            "Losses": 15,
            "Elo": 1140,
            "Steak": 0
        },
        {
            "Rank": 5,
            "Player": "Scientificus",
            "Win_Rate": "40%",
            "Wins": 12,
            "Losses": 18,
            "Elo": 1120,
            "Steak": -1
        },
        {
            "Rank": 6,
            "Player": "DEDE",
            "Win_Rate": "30%",
            "Wins": 9,
            "Losses": 21,
            "Elo": 1100,
            "Steak": -2
        },
        {
            "Rank": 7,
            "Player": "Clemzy",
            "Win_Rate": "20%",
            "Wins": 6,
            "Losses": 24,
            "Elo": 1180,
            "Steak": -3
        },
        {
            "Rank": 8,
            "Player": "Léa",
            "Win_Rate": "10%",
            "Wins": 3,
            "Losses": 27,
            "Elo": 1160,
            "Steak": -4
        }
    ]
};

// Fonction pour gérer le clic sur les éléments de navigation
function handleNavClick(event) {
    document.querySelectorAll('nav').forEach(nav => nav.classList.remove('nav-selected'));
    event.target.classList.add('nav-selected');
    var navId = event.target.id;
    loadJSON(data[navId]); // Charger les données correspondantes
}

// Ajouter des écouteurs d'événements de clic sur chaque élément de navigation
document.querySelectorAll('nav').forEach(nav => nav.addEventListener('click', handleNavClick));

document.addEventListener('DOMContentLoaded', function () {
    handleNavClick({ target: document.getElementById('allTime') });
});