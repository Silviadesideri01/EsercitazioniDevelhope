document.addEventListener("DOMContentLoaded", function () {
  const display = document.querySelector("#display");
  const buttons = document.querySelectorAll(".square");

  let input = "";

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      let value = this.textContent;

      if (value === "C") {
        input = ""; // Cancella tutto
        display.value = "";
      } else if (value === "←") {
        input = input.slice(0, -1); // Cancella l'ultimo carattere
        display.value = input;
      } else if (value === "=") {
        try {
          input = eval(input).toString(); // Esegue il calcolo
          display.value = input;
        } catch (error) {
          display.value = "Errore";
        }
      } else {
        input += value; // Aggiunge i numeri e operatori al display
        display.value = input;
      }
    });
  });
});
