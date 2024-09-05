/**
 * @title Génération et Fusion de Tableaux Aléatoires
 * @description
 * Ce script génère deux tableaux aléatoires : un tableau de nombres et un tableau de lettres.
 * Les tailles de ces tableaux sont également aléatoires, et les tableaux sont ensuite fusionnés en alternant les éléments de chaque tableau.
 *
 * @details
 * - La taille des deux tableaux est générée aléatoirement, comprise entre 1 et 10.
 * - Le premier tableau est rempli avec des nombres aléatoires entre 0 et 99.
 * - Le deuxième tableau est rempli avec des lettres aléatoires de l'alphabet anglais.
 * - Les deux tableaux sont fusionnés en alternant les éléments de chaque tableau.
 * - La fusion est effectuée jusqu'à ce que le plus grand des deux tableaux soit entièrement parcouru.
 *
 * @example
 * Si le tableau de nombres est [12, 45, 78] et le tableau de lettres est ['a', 'b', 'c', 'd'],
 * la fusion pourrait être [12, 'a', 45, 'b', 78, 'c', 'd'].
 */

// Générer la taille aléatoire pour les tableaux
const taille1 = Math.floor(Math.random() * 11); // Taille entre 1 et 10
const taille2 = Math.floor(Math.random() * 11); // Taille entre 1 et 10

// Créer le tableau de nombres aléatoires
const nombres = [];
for (let i = 0; i < taille1; i++) {
  nombres.push(Math.floor(Math.random() * 100)); // Nombres aléatoires entre 0 et 99
}

// Créer le tableau de lettres aléatoires
const alphabet = "abcdefghijklmnopqrstuvwxyz";
const lettres = [];
for (let i = 0; i < taille2; i++) {
  lettres.push(alphabet.charAt(Math.floor(Math.random() * alphabet.length)));
}

// Fusionner les deux tableaux dans l'ordre alterné
const fusion = [];
const longueurMax = Math.max(taille1, taille2);

for (let i = 0; i < longueurMax; i++) {
  if (i < taille1) {
    fusion.push(nombres[i]);
  }
  if (i < taille2) {
    fusion.push(lettres[i]);
  }
}

// Afficher les résultats
console.log(`Tableau de nombres : ${nombres}`);
console.log(`Tableau de lettres : ${lettres}`);
console.log(`Fusion des tableaux : ${fusion}`);
