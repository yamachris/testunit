
document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.product');
    const imagesArray = Array.from(images);
    const products = {
        "10_de_carreau_x2": {
            "nom": "10 de Carreau",
            "description": "Le 10 de Carreau est un jeu de cartes de qualité supérieure."
        },
        "7_de_coeur_x2": {
            "nom": "7 de Coeur",
            "description": "Le 7 de Coeur est un jeu de cartes de qualité supérieure."
        },
        "Reine_de_pique_x2": {
            "nom": "Reine de pique",
            "description": "Le 7 de Coeur est un jeu de cartes de qualité supérieure."
        },
        "Joker_noir_x2": {
            "nom": "Joker noir",
            "description": "Le 7 de Coeur est un jeu de cartes de qualité supérieure."
        },
        "Reine_de_carreau_x2": {
            "nom": "Reine de carreau",
            "description": "Le 7 de Coeur est un jeu de cartes de qualité supérieure."
        },
        "Roi_de_trefle_x2": {
            "nom": "Roi de trèfle",
            "description": "Le 7 de Coeur est un jeu de cartes de qualité supérieure."
        }
    };

    let currentProductIndex = 0;

function showLightbox(index) {
        const existingLightbox = document.querySelector('.lightbox');
        if (existingLightbox) {
            document.body.removeChild(existingLightbox);
        }
        const lightbox = document.createElement('div');
        lightbox.classList.add('lightbox');
        const lightboxContent = document.createElement('div');
        lightboxContent.classList.add('lightbox-content');

        const closeBtn = document.createElement('button');
        closeBtn.textContent = 'Fermer';
        closeBtn.classList.add('close-btn');
        closeBtn.onclick = function () {
            document.body.removeChild(lightbox);
        };

        const arrowLeft = document.createElement('button');
        arrowLeft.textContent = '<';
        arrowLeft.classList.add('arrow-btn', 'left');
        arrowLeft.onclick = function () {
            currentProductIndex--;
            if (currentProductIndex < 0) currentProductIndex = images.length - 1;
            showLightbox(currentProductIndex);
        };

        const arrowRight = document.createElement('button');
        arrowRight.textContent = '>';
        arrowRight.classList.add('arrow-btn', 'right');
        arrowRight.onclick = function () {
            currentProductIndex++;
            if (currentProductIndex >= images.length) currentProductIndex = 0;
            showLightbox(currentProductIndex);
        };

        const img = document.createElement('img');
        img.src = images[index].src;
        const productInfo = products[images[index].dataset.productId];
        const infoDiv = document.createElement('div');
        infoDiv.classList.add('product-info');
        infoDiv.innerHTML = `<h2>${productInfo.nom}</h2><p>${productInfo.description}</p>`;

        lightboxContent.appendChild(arrowLeft);
        lightboxContent.appendChild(img);
        lightboxContent.appendChild(infoDiv);
        lightboxContent.appendChild(arrowRight);
        lightboxContent.appendChild(closeBtn);
        lightbox.appendChild(lightboxContent);
        document.body.appendChild(lightbox);
    }

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') { 
            const lightbox = document.querySelector('.lightbox');
            if (lightbox) {
                document.body.removeChild(lightbox);
            }
        } else {
            switch (event.key) {
                case 'ArrowLeft':
                    currentProductIndex--;
                    if (currentProductIndex < 0) currentProductIndex = images.length - 1;
                    showLightbox(currentProductIndex);
                    break;
                case 'ArrowRight':
                    currentProductIndex++;
                    if (currentProductIndex >= images.length) currentProductIndex = 0;
                    showLightbox(currentProductIndex);
                    break;
            }
        }
    });


    imagesArray.forEach((img, index) => {
        img.addEventListener('click', function () {
            showLightbox(index);
        });
    });
});