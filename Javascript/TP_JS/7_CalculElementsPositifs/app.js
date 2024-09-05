/**
 * @title Calcul du Produit des Éléments Positifs d'un Tableau
 * @description
 * Ce script crée un tableau de 10 entiers aléatoires allant de -10 à 10, puis calcule le produit des éléments positifs présents dans ce tableau.
 * Il affiche le tableau généré ainsi que le produit des éléments positifs. Si aucun élément positif n'est trouvé, un message approprié est affiché.
 *
 * @details
 * - Un tableau de 10 entiers aléatoires est généré, avec des valeurs comprises entre -10 et 10.
 * - Le produit des éléments positifs est calculé en parcourant le tableau et en multipliant les valeurs positives.
 * - Si au moins un élément positif est trouvé, son produit est affiché. Sinon, un message indiquant l'absence d'éléments positifs est affiché.
 *
 * @example
 * Si le tableau généré est [-5, 3, -2, 8, -7], le produit des éléments positifs sera 24 (3 * 8).
 * Si le tableau généré est [-5, -3, -2, -8, -7], le message affiché sera "Aucun élément positif dans le tableau."
 */

// Créer un tableau de 10 entiers aléatoires
const nombres = [];
for (let i = 0; i < 10; i++) {
  nombres.push(Math.floor(Math.random() * 21) - 10); // Entiers aléatoires entre -10 et 10
}

// Calculer le produit des éléments positifs
let produit = 1;
let valeursPositives = false;

for (let i = 0; i < nombres.length; i++) {
  if (nombres[i] > 0) {
    produit *= nombres[i];
    valeursPositives = true;
  }
}

// Afficher les résultats
console.log(`Tableau : ${nombres}`);
console.log(
  `Le produit des éléments positifs est : ${
    valeursPositives ? produit : "Aucun élément positif dans le tableau."
  }`
);
