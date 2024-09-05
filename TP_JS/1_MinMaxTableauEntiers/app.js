/**
 * @title Trouver le Minimum et le Maximum dans un Tableau d'Entiers
 * @description
 * Ce script crée un tableau de 10 entiers aléatoires compris entre 1 et 100,
 * puis détermine le plus grand et le plus petit élément du tableau.
 *
 * @details
 * - Un tableau de 10 entiers aléatoires est généré.
 * - Les variables `min` et `max` sont initialisées avec le premier élément du tableau.
 * - Le tableau est parcouru pour mettre à jour `min` et `max` en fonction des valeurs rencontrées.
 * - Les résultats sont affichés à la fin.
 *
 * @example
 * Si le tableau généré est [45, 32, 77, 23, 98, 12, 64, 35, 87, 50],
 * le script affichera :
 *   - Le plus petit élément est : 12
 *   - Le plus grand élément est : 98
 */

// Créer un tableau de 10 entiers aléatoires entre 1 et 100
const nombres = [];
for (let i = 0; i < 10; i++) {
  nombres[i] = Math.floor(Math.random() * 100) + 1; // Nombres aléatoires entre 1 et 100
}

// Trouver le plus grand et le plus petit élément avec Math.max() et Math.min()
// const min = Math.min(...nombres); // Utilise l'opérateur de décomposition "..."
// const max = Math.max(...nombres);

// Initialiser min et max avec le premier élément du tableau
let min = nombres[0];
let max = nombres[0];
// Trouver le plus grand et le plus petit élément en parcourant le tableau
for (let i = 1; i < nombres.length; i++) {
  if (nombres[i] < min) {
    min = nombres[i];
  }
  if (nombres[i] > max) {
    max = nombres[i];
  }
}

// Afficher les résultats
console.log(`Tableau : ${nombres}`);
console.log(`Le plus petit élément est : ${min}`);
console.log(`Le plus grand élément est : ${max}`);
