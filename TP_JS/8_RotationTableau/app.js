/**
 * @title Rotation d'un Tableau de Nombres Aléatoires
 * @description
 * Ce script crée un tableau de 10 nombres aléatoires, puis effectue une rotation de ce tableau basée sur une valeur aléatoire `r`.
 * La rotation est réalisée en déplaçant les éléments du tableau vers la droite de `k` positions.
 * Le tableau d'origine, la valeur de `r`, et le tableau après la rotation sont affichés.
 *
 * @details
 * - Un tableau de 10 nombres aléatoires entre 0 et 99 est généré.
 * - `r` est défini comme un nombre aléatoire compris entre 0 et la longueur du tableau.
 * - La longueur du tableau est calculée.
 * - Le nombre effectif de rotations est déterminé en prenant le reste de la division de `r` par la longueur du tableau.
 * - Les éléments du tableau sont déplacés vers la droite par `rotations` positions.
 * - Le tableau d'origine, la valeur de `r`, et le tableau après rotation sont affichés.
 *
 * @example
 * Si le tableau original est [15, 22, 37, 44, 58, 61, 73, 85, 92, 99] et `r` est 3,
 * le tableau après rotation sera [73, 85, 92, 99, 15, 22, 37, 44, 58, 61].
 */

// Créer un tableau de nombres aléatoires
const nombres = [];
for (let i = 0; i < 10; i++) {
  nombres.push(Math.floor(Math.random() * 100)); // Nombres aléatoires entre 0 et 99
}

// Définir r comme un nombre aléatoire entre 0 et la longueur du tableau de nombres
const r = Math.floor(Math.random() * nombres.length);

// Calculer la longueur du tableau
const longueur = nombres.length;

// Afficher la longueur du tableau et la valeur de r
console.log(`Longueur du tableau : ${longueur}`);
console.log(`Nombre de rotation : ${r}`);

// Calculer le nombre effectif de rotations
const rotations = r % longueur;

// Créer un tableau pour stocker le résultat de la rotation
const tableauRotatif = [];

// Copier les derniers éléments du tableau d'origine
for (let i = 0; i < rotations; i++) {
  tableauRotatif[i] = nombres[longueur - rotations + i];
}

console.log(
  rotations === 0
    ? "Pas de rotation."
    : rotations === 1
    ? `1 élément du tableau récupéré : ${tableauRotatif}`
    : `${rotations} éléments du tableau récupérés : ${tableauRotatif}`
);

// Copier les éléments restants du tableau d'origine
for (let i = 0; i < longueur - rotations; i++) {
  tableauRotatif[rotations + i] = nombres[i];
}

// Afficher le tableau original, et le tableau après rotation
console.log(`Tableau original : ${nombres}`);
console.log(`Tableau après rotation : ${tableauRotatif}`);
