/*
Write the evaluateScript function.
It should receive one argument that’s a string.
If the string contains a valid JavaScript code, return the return value of the given code.
Otherwise, return null.
Use eval in the evaluateScript function.
Never use the eval function in an actual application, though.
*/

function evaluateScript(userCode) {
    try {
        return eval(userCode);
    } catch (error) {
        return null;
    }
}

evaluateScript("1 + 5"); // 6

evaluateScript(`
  function subtract(number, numberToSubtract) {
    return number - numberToSubtract;
  }
  subtract(20, 10);
`); // 10

evaluateScript("const number = "); // null