/**
 * @title Comparer Deux Tableaux Aléatoires jusqu'à Identité
 * @description
 * Ce script génère deux tableaux aléatoires de longueur 5 et compare leurs éléments.
 * Il continue à générer de nouveaux tableaux jusqu'à ce qu'ils soient identiques.
 *
 * @details
 * - Deux tableaux aléatoires sont générés à chaque itération.
 * - Les tableaux sont stockés lors de la première itération pour référence.
 * - Les tableaux sont comparés élément par élément pour vérifier s'ils sont identiques.
 * - Si les tableaux sont identiques, le script affiche les tableaux générés lors de la première et de la dernière boucle,
 *   ainsi que le nombre de boucles nécessaires pour obtenir des tableaux identiques.
 *
 * @example
 * Les sorties possibles peuvent être :
 *   - Tableaux générés lors de la première boucle :
 *     Tableau 1 : [3, 7, 1, 4, 2]
 *     Tableau 2 : [5, 6, 2, 4, 1]
 *   - Tableaux générés lors de la dernière boucle :
 *     Tableau 1 : [2, 4, 5, 7, 8]
 *     Tableau 2 : [2, 4, 5, 7, 8]
 *   - Les tableaux sont identiques après 7 boucles.
 */

let compteur = 0;
let tableauEgaux = false;
let tableau1 = [];
let tableau2 = [];
let i;

// Boucle pour comparer les tableaux jusqu'à ce qu'ils soient identiques
while (!tableauEgaux) {
  // Réinitialiser les tableaux à chaque itération
  tableau1 = [];
  tableau2 = [];

  // Générer deux tableaux aléatoires de longueur 5
  for (i = 0; i < 5; i++) {
    tableau1[i] = Math.floor(Math.random() * 10);
    tableau2[i] = Math.floor(Math.random() * 10);
  }
  // Stocker les tableaux de la première boucle
  if (compteur === 0) {
    tableau1PremiereBoucle = [...tableau1];
    tableau2PremiereBoucle = [...tableau2];
  }

  // Comparer les deux tableaux
  tableauEgaux = true;
  for (i = 0; i < 5; i++) {
    if (tableau1[i] !== tableau2[i]) {
      tableauEgaux = false;
      break; // Sortir de la boucle dès qu'une différence est trouvée
    }
  }

  // Incrémenter le compteur de boucles
  compteur++;
}

console.log(`Tableaux générés lors de la première boucle.`);
console.log(`Tableau 1 lors de la première boucle : ${tableau1PremiereBoucle}`);
console.log(`Tableau 2 lors de la première boucle : ${tableau2PremiereBoucle}`);

console.log(`Tableaux générés lors de la dernière boucle.`);
console.log(`Tableau 1 lors de la dernière boucle : ${tableau1}`);
console.log(`Tableau 2 lors de la dernière boucle : ${tableau2}`);
console.log(`Les tableaux sont identiques après ${compteur} boucles.`);
