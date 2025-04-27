/*
Write the divideIfNotZero function.
It should handle two arguments.
It should throw an error if the second argument is 0.
Otherwise, it should return the result of dividing the numbers
*/

async function divideIfNotZero(firstArgument, secondArgument) {
  try {
    if (secondArgument === 0) {
      throw new Error("Cannot divide by zero");
    }
    console.log(firstArgument / secondArgument);
    return firstArgument / secondArgument;
  } catch (error) {
    console.error(error.message);
    throw error;
  }
}

divideIfNotZero(10, 2); // 5
