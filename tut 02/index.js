const fs = require("fs");
const path = require("path");

fs.readFile(
  path.join(__dirname, "files", "starter.txt"),
  "utf-8",
  (err, data) => {
    if (err) {
      throw err;
    }
    console.log(data);
  }
);

fs.writeFile(
  path.join(__dirname, "files", "starter.txt"),
  "Nice to meet you",
  (err) => {
    if (err) {
      throw err;
    }
    console.log("Writing complete");
  }
);

// if file is not present first it will create a file then write over it
fs.writeFile(
  path.join(__dirname, "files", "tests.txt"),
  "Testing to create a file",
  (err) => {
    if (err) {
      throw err;
    }
    console.log("Writing complete");

    fs.appendFile(
      path.join(__dirname, "files", "tests.txt"),
      " Nice to meet you\n\n\n",
      (err) => {
        if (err) {
          throw err;
        }
        console.log("Writing complete");
      }
    );

    fs.rename(path.join(__dirname, "files", "tests.txt"), "ne", (err) => {
      if (err) {
        throw err;
      }
      console.log("Writing complete");
    });
  }
);

// exit on uncought error
process.on("uncaughtException", (err) => {
  console.error(`There was an uncought error: ${err}`);
  process.exit(1);
});
