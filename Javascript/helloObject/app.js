function submitLanguage() {
  const languageInput = document
    .getElementById("languageInput")
    .value.toLowerCase();

  const greetings = {
    french: "Bonjour",
    english: "Hello",
    german: "Guten tag",
    spanish: "Hola",
  };

  const greeting = greetings[languageInput] || "Langue non supportée";

  document.getElementById("result").innerText = greeting;
}
