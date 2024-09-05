/**
 * @title Inversion des Mots d'une Phrase
 * @description
 * Ce script demande à l'utilisateur de saisir une phrase, puis crée un tableau contenant chaque mot de cette phrase.
 * Ensuite, il inverse l'ordre des mots dans le tableau et affiche la phrase inversée.
 *
 * @details
 * - Une invite est affichée pour que l'utilisateur saisisse une phrase.
 * - La phrase saisie est ensuite divisée en mots, créant ainsi un tableau de mots.
 * - L'ordre des mots dans le tableau est inversé.
 * - La phrase inversée est ensuite affichée dans la console.
 *
 * @example
 * Si l'utilisateur saisit "Bonjour tout le monde", la sortie sera :
 *   - Phrase inversée : "monde le tout Bonjour"
 */

// Demander à l'utilisateur de saisir une phrase
const phrase = prompt("Saisissez une phrase : ");

// Créer un tableau contenant chaque mot de la phrase
const mots = phrase.split(" ");

// Inverser l'ordre des mots dans le tableau
const inverserMots = mots.reverse().join(" ");

// Afficher la phrase inversée dans la console
console.log(`Phrase inversée :${inverserMots}`);
