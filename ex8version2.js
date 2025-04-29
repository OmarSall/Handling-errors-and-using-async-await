const fs = require("fs").promises;
const path = require("path");

async function readTextFile(path) {
  try {
    return fs.readFile(path, "utf-8");
  } catch (error) {
    if (error.code === "ENOENT") {
      return null;
    } else {
      throw error;
    }
  }
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