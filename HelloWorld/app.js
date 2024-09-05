// Tableau contenant le titre "Bonjour le monde" dans différentes langues
const titres = [
  "Hello World", // Anglais
  "Bonjour le Monde", // Français
  "Hola Mundo", // Espagnol
  "Hallo Welt", // Allemand
  "Ciao Mondo", // Italien
  "Olá Mundo", // Portugais
  "こんにちは世界 (Konnichiwa Sekai)", // Japonais
  "你好，世界 (Nǐ hǎo, shìjiè)", // Chinois
  "안녕하세요 세계 (Annyeonghaseyo Segye)", // Coréen
  "Привет, мир (Privet, mir)", // Russe
];
console.log(`listes de titres : ${titres.join(", ")}`);

// Sélection d'un titre aléatoire
const titreAleatoire = titres[Math.floor(Math.random() * titres.length)];

// Sélectionne l'élément <h1> et injecte le titre aléatoire
const titre = document.querySelector("h1");
titre.textContent = titreAleatoire;
