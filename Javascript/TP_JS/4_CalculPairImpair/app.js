/**
 * @title Création et Calcul des Sommes des Éléments aux Indices Pair et Impair
 * @description
 * Ce script crée un tableau de 10 entiers aléatoires et calcule la somme des éléments situés aux indices pairs et impairs du tableau.
 * Il utilise des boucles pour remplir le tableau avec des nombres aléatoires, puis calcule et affiche les sommes séparées des éléments aux indices pairs et impairs.
 *
 * @details
 * - Un tableau de 10 entiers aléatoires est généré. Chaque entier est compris entre 1 et 100.
 * - La somme des éléments situés aux indices pairs est calculée en parcourant le tableau et en ajoutant les valeurs aux indices pairs.
 * - La somme des éléments situés aux indices impairs est calculée de manière similaire en ajoutant les valeurs aux indices impairs.
 * - Les résultats sont affichés dans la console, montrant le tableau généré ainsi que les deux sommes calculées.
 *
 * @example
 * Les sorties possibles peuvent être :
 *   - Tableau généré : [23, 45, 12, 67, 89, 34, 56, 78, 90, 12]
 *   - Somme des éléments aux indices pairs : 135
 *   - Somme des éléments aux indices impairs : 246
 */

// Créer un tableau de 10 entiers aléatoires
const tableau = [];
for (let i = 0; i < 10; i++) {
  tableau[i] = Math.floor(Math.random() * 100) + 1;
}

// Calculer la somme des éléments aux indices pairs et impairs
let sommePairs = 0;
let sommeImpairs = 0;

for (let i = 0; i < tableau.length; i++) {
  if (i % 2 === 0) {
    sommePairs += tableau[i];
  } else {
    sommeImpairs += tableau[i];
  }
}

console.log(`Tableau: ${tableau}`);
console.log(`Somme des éléments aux indices pairs : ${sommePairs}`);
console.log(`Somme des éléments aux indices impairs : ${sommeImpairs}`);
