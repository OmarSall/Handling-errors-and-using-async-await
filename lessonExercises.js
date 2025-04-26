// Exercise: Write the getLongerString function that returns
// the longer one of two strings. If they are equal, it should 
// return the first string. If one of the arguments is not a string, 
// throw an error. Make sure to catch the possible error when executing the function.

function getLongerString(firstString, secondString) {
    if (typeof firstString !== "string" || typeof secondString !== "string") {
        throw "All arguments should be strings";
    }

    return firstString > secondString ? firstString : secondString;
}

try {
    getLongerString('first', 'second'); // second
    // getLongerString(':)', ':('); // :) 
} catch (error) {
    console.log(error) // All arguments should be numbers
} 

// Exercise: define a class extending the Error class and use it in your getLongerString function.

class StringComparisonError extends Error {
    constructor(firstString, secondString) {
        super("All arguments should be strings");
        this.firstString = firstString;
        this.secondString = secondString;
    }
}

function getLongerString(firstString, secondString) {
    if (typeof firstString !== "string" || typeof secondString !== "string") {
        throw new StringComparisonError(firstString, secondString);
    }

    return firstString > secondString ? firstString : secondString;
}

try {
    getLongerString('first', 'second'); // second
    // getLongerString(':)', ':('); // :) 
} catch (error) {
    console.log(error) // All arguments should be numbers
}

// Exercise: Write the parseJsonSafely function.
// It should return the parsed JSON if the provided string is a valid JSON.
// Otherwise, it should return null.

function parseJsonSafely(jsonString) {
    try {
        return JSON.parse(jsonString);
    } catch (error) {
        return null;
    }
}

parseJsonSafely('{ "hello": "world" }');
// {
//   hello: 'world';
// }


parseJsonSafely('{'); // null

//////////////////////////////
try {
    JSON.parse('{');
  } catch (error) {
    console.log(error.name);
  } finally {
    console.log('Parsing is finished');
  }
/////////////////////////////////

try {
    try {
      JSON.parse('{');
    } catch (error) {
      console.log('An error occurred');  
    } finally {
      console.log('Finally');
    }
    console.log('Under the finally block');
  } catch {
    console.log('The last catch block');
  }
  
// An error occurred
// Finally
// Under the finally block

