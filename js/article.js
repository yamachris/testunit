
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

    function showLightboxProducts(index) {
        const existingLightboxProducts = document.querySelector('.lightbox-products');
        if (existingLightboxProducts) {
            document.body.removeChild(existingLightboxProducts);
        }
        const lightboxProducts = document.createElement('div');
        lightboxProducts.classList.add('lightbox-products');
        const lightboxProductsContent = document.createElement('div');
        lightboxProductsContent.classList.add('lightbox-products-content');

        const closeBtn = document.createElement('button');
        closeBtn.textContent = 'Fermer';
        closeBtn.classList.add('close-btn');
        closeBtn.onclick = function () {
            document.body.removeChild(lightboxProducts);
        };

        const arrowLeft = document.createElement('button');
        arrowLeft.textContent = '<';
        arrowLeft.classList.add('arrow-btn', 'left');
        arrowLeft.onclick = function () {
            currentProductIndex--;
            if (currentProductIndex < 0) currentProductIndex = images.length - 1;
            showLightboxProducts(currentProductIndex);
        };

        const arrowRight = document.createElement('button');
        arrowRight.textContent = '>';
        arrowRight.classList.add('arrow-btn', 'right');
        arrowRight.onclick = function () {
            currentProductIndex++;
            if (currentProductIndex >= images.length) currentProductIndex = 0;
            showLightboxProducts(currentProductIndex);
        };

        const img = document.createElement('img');
        img.src = images[index].src;
        const productInfo = products[images[index].dataset.productId];
        const infoDiv = document.createElement('div');
        infoDiv.classList.add('product-info');
        infoDiv.innerHTML = `<h2>${productInfo.nom}</h2><p>${productInfo.description}</p>`;

        lightboxProductsContent.appendChild(arrowLeft);
        lightboxProductsContent.appendChild(img);
        lightboxProductsContent.appendChild(infoDiv);
        lightboxProductsContent.appendChild(arrowRight);
        lightboxProductsContent.appendChild(closeBtn);
        lightboxProducts.appendChild(lightboxProductsContent);
        document.body.appendChild(lightboxProducts);
    }
    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            const lightbox = document.querySelector('.lightbox-products');
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
            showLightboxProducts(index);
        });
    });
});