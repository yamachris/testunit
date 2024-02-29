
document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.rules');
    const imagesArray = Array.from(images);
    const rules = {
        "JokerBlack": {
            "nom": "Le Joker",
            "description": "Malgré les sacrifices que les joueurs peuvent faire, le Joker possède une priorité absolue sur les têtes de jeu pour les détruire immédiatement durant le tour de l'adversaire s'il possède un Joker dans la main ou sa réserve de deux cartes. Ensuite, le Joker retourne dans la fosse des cartes du joueur qui l'a joué et la tête de jeu qui a été jouée par l'adversaire retourne dans sa fosse des cartes."
        },
        "QDiamonds": {
            "nom": "La Dame",
            "description": "Une Dame peut être jouée sur le terrain de jeu en sacrifiant 2 des unités les plus hautes montées sur le terrain de jeu. Ces unités et la Dame sont alors envoyées dans la fosse des cartes, et la Dame accorde deux points de vie au joueur qui a effectué l'action."
        },
        "JSpider": {
            "nom": "Le Valet",
            "description": "Le Valet a une particularité lorsqu'il est joué avec le sacrifice d'une unité. Pour être placé sur le terrain de jeu, le joueur doit sacrifier une unité de 8 ou de 9. Cette unité est alors envoyée dans la fosse des cartes et le Valet passe immédiatement en position d'attaque (mode actif). Il peut alors attaquer directement les unités de sa propre enseigne dans le même tour de jeu. Cependant, si le Valet est joué sur le terrain de jeu avec un 7 de chance, il est en mode passif et doit attendre le prochain tour pour attaquer l'adversaire."
        },
        "7Diamonds": {
            "nom": "Le 7",
            "description": "Le 7 de chance 🍀 est une carte spéciale qui offre une protection unique aux unités montées jusqu'à l'unité 6. Il ne peut pas être détruit et joue un rôle crucial pour stopper les actions du Valet et même du Joker, à condition qu'ils appartiennent à la même enseigne que sa colonne. Par exemple, si le 7 de chance 🍀 est un trèfle ♣, il peut bloquer une attaque sur l'unité de 6, l'unité 8 ou l'unité 9."
        },
        "10Spades": {
            "nom": "Le 10",
            "description": "Dans UNIT, le 10 de la Révolution est une carte spéciale qui a le pouvoir de changer radicalement le cours du jeu. Si un joueur parvient à assembler une colonne complète de 10 cartes de la même enseigne (cœur ♥, carreau ♦, trèfle ♣, ou pique ♠), allant de l'As à la carte 10, il peut déclencher une Révolution. Lorsqu'une Révolution est déclenchée, le Roi adverse est automatiquement détruit et l'adversaire subit immédiatement 10 points de dégâts. Si un joueur parvient à réaliser une Révolution sans avoir préalablement attaqué son adversaire, on dit qu'il a réussi une Révolution parfaite"
        },
        "KClubs": {
            "nom": "Le Roi",
            "description": "Un Roi peut être joué sur le terrain de jeu en sacrifiant 3 des unités les plus hautes montées sur le terrain de jeu. Ces unités sont alors envoyées dans la fosse des cartes et le Roi est posé en jeu. Les Rois ont une position de défense face aux unités de leur propre enseigne pour bloquer leurs attaques"
        }
    };

    let currentRulesIndex = 0;

    function showLightboxRules(index) {
        const existingLightbox = document.querySelector('.lightbox-rules');
        if (existingLightbox) {
            document.body.removeChild(existingLightbox);
        }
        const lightbox = document.createElement('div');
        lightbox.classList.add('lightbox-rules');
        const lightboxContent = document.createElement('div');
        lightboxContent.classList.add('lightbox-rules-content');

        const closeBtn = document.createElement('button');
        closeBtn.textContent = 'Fermer';
        closeBtn.classList.add('close-btn');
        closeBtn.onclick = function () {
            document.body.removeChild(lightbox);
        };

        const arrowLeftRules = document.createElement('button');
        arrowLeftRules.textContent = '<';
        arrowLeftRules.classList.add('arrow-rules-btn', 'left');
        arrowLeftRules.onclick = function () {
            currentRulesIndex--;
            if (currentRulesIndex < 0) currentRulesIndex = images.length - 1;
            showLightboxRules(currentRulesIndex);
        };

        const arrowRightRules = document.createElement('button');
        arrowRightRules.textContent = '>';
        arrowRightRules.classList.add('arrow-rules-btn', 'right');
        arrowRightRules.onclick = function () {
            currentRulesIndex++;
            if (currentRulesIndex >= images.length) currentRulesIndex = 0;
            showLightboxRules(currentRulesIndex);
        };

        const img = document.createElement('img');
        img.src = images[index].src;
        const rulesInfo = rules[images[index].dataset.rulesId];
        const infoDiv = document.createElement('div');
        infoDiv.classList.add('rules-info');
        infoDiv.innerHTML = `<h2>${rulesInfo.nom}</h2><p>${rulesInfo.description}</p>`;

        lightboxContent.appendChild(arrowLeftRules);
        lightboxContent.appendChild(img);
        lightboxContent.appendChild(infoDiv);
        lightboxContent.appendChild(arrowRightRules);
        lightbox.appendChild(closeBtn);
        lightbox.appendChild(lightboxContent);
        document.body.appendChild(lightbox);
    }

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            const lightbox = document.querySelector('.lightbox-rules');
            if (lightbox) {
                document.body.removeChild(lightbox);
            }
        }
        
        const lightboxProducts = document.querySelector('.lightbox-products');
        const lightboxRules = document.querySelector('.lightbox-rules');
        
        if (lightboxProducts || lightboxRules) {
            switch (event.key) {
                case 'ArrowLeft':
                    if (lightboxProducts) {
                        currentProductIndex--;
                        if (currentProductIndex < 0) currentProductIndex = images.length - 1;
                        showLightboxProducts(currentProductIndex);
                    } else if (lightboxRules) {
                        currentRulesIndex--;
                    if (currentRulesIndex < 0) currentRulesIndex = images.length - 1;
                    showLightboxRules(currentRulesIndex);
                    }
                    break;
                case 'ArrowRight':
                    if (lightboxProducts) {
                        currentProductIndex++;
                        if (currentProductIndex >= images.length) currentProductIndex = 0;
                        showLightboxProducts(currentProductIndex);
                    } else if (lightboxRules) {
                        currentRulesIndex++;
                        if (currentRulesIndex >= images.length) currentRulesIndex = 0;
                        showLightboxRules(currentRulesIndex);
                    }
                    break;
            }
        }
    });

    imagesArray.forEach((img, index) => {
        img.addEventListener('click', function () {
            showLightboxRules(index);
        });
    });
});