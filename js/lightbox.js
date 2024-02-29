export function createLightbox(content, currentIndex, images) {
    const lightbox = document.createElement('div');
    lightbox.classList.add('lightbox-rules');
    const lightboxContent = document.createElement('div');
    lightboxContent.classList.add('lightbox-content');
    lightboxContent.innerHTML = content;

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
        currentIndex--;
        if (currentIndex < 0) currentIndex = images.length - 1;
        createLightbox(content, currentIndex, images); // Appel récursif avec l'index mis à jour
    };

    const arrowRightRules = document.createElement('button');
    arrowRightRules.textContent = '>';
    arrowRightRules.classList.add('arrow-rules-btn', 'right');
    arrowRightRules.onclick = function () {
        currentIndex++;
        if (currentIndex >= images.length) currentIndex = 0;
        createLightbox(content, currentIndex, images); // Appel récursif avec l'index mis à jour
    };

    const img = document.createElement('img');
    img.src = images[currentIndex].src;
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
export function updateLightboxContent(content) {
    const lightboxContent = document.querySelector('.lightbox-content');
    if (lightboxContent) {
        lightboxContent.innerHTML = content;
    }

}
document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') { 
        removeLightbox();
    } else {
        let newIndex = currentRulesIndex;
        switch (event.key) {
            case 'ArrowLeft':
                newIndex--;
                if (newIndex < 0) newIndex = images.length - 1;
                break;
            case 'ArrowRight':
                newIndex++;
                if (newIndex >= images.length) newIndex = 0;
                break;
            default:
                return; // Ne rien faire pour d'autres touches
        }
        // Mettre à jour le contenu de la lightbox
        const ruleInfo = getRuleInfo(images[newIndex].dataset.rulesId);
        const content = `<h2>${ruleInfo.nom}</h2><p>${ruleInfo.description}</p>`;
        updateLightboxContent(content); // Cette fonction doit être définie pour mettre à jour le contenu de la lightbox
        currentRulesIndex = newIndex;
    }
});
export function removeLightbox() {
    const lightbox = document.querySelector('.lightbox-rules');
    if (lightbox) {
        document.body.removeChild(lightbox);
    }
}