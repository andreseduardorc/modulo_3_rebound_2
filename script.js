function getValue(buttonValue) {
  var key = document.getElementById("buttonValue").value
   var screen = document.getElementById("screen").value;
  document.getElementById("screen").value = screen + buttonValue;

}

function addDecimal() {
  var screen = document.getElementById("screen").value;
  document.getElementById("screen").value = screen + ".";
  console.log(screen);
}


function clearScreen() {
  var screen = (document.getElementById("screen").value = "");
}


function solve() {
  var screen = document.getElementById("screen").value;
  var operatorIndex = screen.indexOf("+");
  if (operatorIndex == -1) {
      operatorIndex = screen.indexOf("-");
  }
  if (operatorIndex == -1) {
      operatorIndex = screen.indexOf("*");
  }
  if (operatorIndex == -1) {
      operatorIndex = screen.indexOf("/");
  }
  if (operatorIndex == -1) {
      return;
  }
  var operand1 = parseFloat(screen.substring(0, operatorIndex));
  var operand2 = parseFloat(screen.substring(operatorIndex + 1));
  var operator = screen.charAt(operatorIndex);
  var result;
  switch (operator) {
      case "+":
          result = operand1 + operand2;
          break;
      case "-":
          result = operand1 - operand2;
          break;
      case "*":
          result = operand1 * operand2;
          break;
      case "/":
          result = operand1 / operand2;
          break;
      default:
          return;
  }
  document.getElementById("screen").value = result;
}
