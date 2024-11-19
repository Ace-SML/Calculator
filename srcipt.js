function appendValue(value) {
  const display = document.getElementById("display");
  display.value += value; // Append numbers or other values
}

function replaceSymbol(symbol) {
  const display = document.getElementById("display");
  const value = display.value;

  // Check if the last character is a symbol
  if (/[÷×+\-]/.test(value.slice(-1))) {
    // Replace the last character with the new symbol
    display.value = value.slice(0, -1) + symbol;
  } else {
    // If no symbol, just add the new symbol
    display.value += symbol;
  }
}

function calculateResult() {
  const display = document.getElementById("display");
  const expression = display.value;

  try {
    // Replace mathematical symbols with JavaScript operators
    const result = eval(expression.replace("÷", "/").replace("×", "*"));

    // Append the result on a new line
    display.value += `\n= ${result}\n`;
  } catch (error) {
    display.value += "\nError\n"; // Handle invalid inputs
  }
}
