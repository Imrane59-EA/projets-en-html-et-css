// Récupération des pièces depuis le fichier JSON
const reponse = await fetch('donnees.json');
const elements = await reponse.json();

article = elements[0]

elementImage = document.createElement("img")
elementImage.src = article.image

const sectionExempleGladiateurs = document.querySelector(".elements");
sectionExempleGladiateurs.appendChild(imageElement);
