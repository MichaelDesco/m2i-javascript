/**
 * @title Rotation d'un Tableau de Nombres Aléatoires
 * @description
 * Ce script crée un tableau de 10 nombres aléatoires, puis effectue une rotation de ce tableau basée sur une valeur aléatoire `k`.
 * La rotation est réalisée en déplaçant les éléments du tableau vers la droite de `k` positions.
 * Le tableau d'origine, la valeur de `k`, et le tableau après la rotation sont affichés.
 *
 * @details
 * - Un tableau de 10 nombres aléatoires entre 0 et 99 est généré.
 * - `k` est défini comme un nombre aléatoire compris entre 0 et la longueur du tableau.
 * - La longueur du tableau est calculée.
 * - Le nombre effectif de rotations est déterminé en prenant le reste de la division de `k` par la longueur du tableau.
 * - Les éléments du tableau sont déplacés vers la droite par `rotations` positions.
 * - Le tableau d'origine, la valeur de `k`, et le tableau après rotation sont affichés.
 *
 * @example
 * Si le tableau original est [15, 22, 37, 44, 58, 61, 73, 85, 92, 99] et `k` est 3,
 * le tableau après rotation sera [73, 85, 92, 99, 15, 22, 37, 44, 58, 61].
 */

// Créer un tableau de nombres aléatoires
const nombres = [];
for (let i = 0; i < 10; i++) {
  nombres.push(Math.floor(Math.random() * 100)); // Nombres aléatoires entre 0 et 99
}

// Définir k comme un nombre aléatoire entre 0 et la longueur du tableau de nombres
const k = Math.floor(Math.random() * nombres.length);

// Calculer la longueur du tableau
const longueur = nombres.length;

// Calculer le nombre effectif de rotations
const rotations = k % longueur;

// Créer un tableau pour stocker le résultat de la rotation
const tableauRotatif = [];

// Copier les derniers éléments du tableau d'origine
for (let i = 0; i < rotations; i++) {
  tableauRotatif[i] = nombres[longueur - rotations + i];
}

// Copier les éléments restants du tableau d'origine
for (let i = 0; i < longueur - rotations; i++) {
  tableauRotatif[rotations + i] = nombres[i];
}

// Afficher le tableau original, la valeur de k, et le tableau après rotation
console.log(`Tableau original : ${nombres}`);
console.log(`Longueur du tableau : ${longueur}`);
console.log(`Valeur de k (rotation) : ${k}`);
console.log(`Tableau après rotation : ${tableauRotatif}`);
