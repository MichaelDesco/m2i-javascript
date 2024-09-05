function calculateSquare() {
  const number = parseFloat(document.getElementById("numberInput").value);

  if (isNaN(number)) {
    document.getElementById("result").innerText =
      "Veuillez entrer un nombre valide.";
    return;
  }

  const square = Math.pow(number, 2);
  document.getElementById(
    "result"
  ).innerText = `Le carré de ${number} est ${square}.`;
}
