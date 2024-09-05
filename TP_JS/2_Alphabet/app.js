/**
 * @title Afficher une Lettre de l'Alphabet Basée sur un Index Utilisateur
 * @description
 * Ce script demande à l'utilisateur de saisir un nombre entier entre 0 et 25.
 * Il vérifie si le nombre est valide et se trouve dans la plage acceptable.
 * Si la saisie est correcte, le script affiche la lettre correspondante de l'alphabet.
 *
 * @details
 * - Un tableau contenant les lettres de l'alphabet est créé.
 * - Le script demande à l'utilisateur de saisir un nombre entre 0 et 25.
 * - La saisie est validée pour s'assurer qu'elle est un nombre entier et dans la plage correcte.
 * - Les erreurs de saisie sont affichées si le nombre est invalide ou hors plage.
 * - Une fois une saisie valide fournie, la lettre correspondante est affichée.
 *
 * @example
 * Si l'utilisateur entre `4`, le script affichera :
 *   - La lettre correspondante est : e
 */

// Créer un tableau contenant les lettres de l'alphabet
const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

// Variable pour stocker l'index
let index;
let input;
let message;

// Tant que l'utilisateur n'a pas fourni un nombre valide entre 0 et 25
do {
  input = prompt("Entrez un nombre entre 0 et 25 : ");
  index = parseInt(input, 10); // Convertir la saisie de l'utilisateur en entier

  // Utiliser un opérateur ternaire pour gérer les messages d'erreur
  message = input === "" || isNaN(index)
    ? `Erreur : Vous devez entrer un nombre valide.`
    : index < 0
    ? `Erreur : Nombre invalide. Veuillez entrer un nombre supérieur ou égal à 0.`
    : index >= alphabet.length
    ? `Erreur : Nombre invalide. Veuillez entrer un nombre inférieur ou égal à 25.`
    : ""; // Aucun message d'erreur si tout est correct

  // Afficher le message d'erreur s'il y en a un
  if (message !== "") {
    console.log(`${message}`);
  }

} while (message !== ""); // Répéter la boucle tant qu'il y a une erreur

// Si tout est correct, afficher la lettre correspondante
console.log(`La lettre correspondante est : ${alphabet[index]}`);

