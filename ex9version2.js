const fs = require("fs").promises;
const path = require("path");

async function writeToFile(path, content) {
  try {
    await fs.writeFile(path, content, "utf-8");
    const stats = await fs.stat(path);
    const sizeInkB = stats.size / 1024;
    return sizeInkB;
  } catch (error) {
    return null;
  }
}

const filePath = path.join(__dirname, "ex9Output_2.txt");
const content = "This is the content for the ex9 async version.";

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