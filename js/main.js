import { createLightbox, removeLightbox, updateLightboxContent } from './js/lightbox.js';
import { getRuleInfo } from './js/regles.js';

document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.rules');
    const imagesArray = Array.from(images);
    let currentRulesIndex = 0;

    function showLightbox(index) {
        removeLightbox(); // Ferme la lightbox précédente si elle existe
        const ruleInfo = getRuleInfo(images[index].dataset.rulesId);
        const content = `<h2>${ruleInfo.nom}</h2><p>${ruleInfo.description}</p>`;
        createLightbox(content);
    }

    // Gestion des touches fléchées et autres interactions...

    imagesArray.forEach((img, index) => {
        img.addEventListener('click', function () {
            showLightbox(index);
        });
    });
});