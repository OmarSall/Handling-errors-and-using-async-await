// Write the readTextFile function in Node.js
// Write two versions:
// one without async/await
// and one with async/await
// It should receive the path to the file as an argument.
// It needs to return a promise that resolves to the contents of the text file.
// It should return a promise that resolves to null if a file with this path cannot be found.
// Use promised-based functions built into Node.js.
// const fs = require('fs').promises;

// The most straightforward way to run JavaScript in Node.js is to create a JavaScript file and run it in the terminal.
// node ./fileName.js

const fs = require("fs").promises;
const path = require("path");

function readTextFile(path) {
  return fs
    .readFile(path, "utf-8")
    .then((data) => data)
    .catch((error) => {
      if (error.code === "ENOENT") {
        return null;
      } else {
        throw error;
      }
    });
}

const fileToRead = path.join(__dirname, "exampleEx8.txt");

readTextFile(fileToRead)
  .then((data) => {
    if (data === null) {
      console.log("File not found.");
    } else {
      console.log("File content: \n", data);
    }
  })
  .catch((error) => {
    console.error("An unexpected error occurred: ", error);
  });