const fs = require("fs").promises;
const path = require("path");

function writeToFile(path, content) {
  return fs
    .writeFile(path, content, "utf-8")
    .then(() => fs.stat(path))
    .then((stats) => stats.size / 1024)
    .catch(() => null);
}

const filePath = path.join(__dirname, "ex9Output_1.txt");
const content = "This is the content for the ex9 non-async version.";

writeToFile(filePath, content)
  .then((result) => {
    if (result === null) {
      console.log("Failed to write this file.");
    } else {
      console.log(`File writte succesfully. 
                Size: ${result.toFixed(2)} kB`);
    }
  })
  .catch((error) => {
    console.error("Unexpected error: ", error);
  });