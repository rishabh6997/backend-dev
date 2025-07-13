const fs = require("fs");

// Sync way of accessing file and updating contents (Blocking)
const fileContent = fs.readFileSync("./starter/txt/input.txt", "utf-8");
console.log(fileContent);
const newText = `${fileContent} updated at ${Date.now()}`;
fs.writeFileSync("./starter/txt/input.txt", newText);
console.log(fs.readFileSync("./starter/txt/input.txt", "utf-8"));

//Async way (Non-blocking)
const fileContent2 = fs.readFile(
  "./starter/txt/start.txt",
  "utf-8",
  (err, data) =>
    fs.readFile(`./starter/txt/${data}.txt`, "utf-8", (err, data2) =>
      fs.readFile("./starter/txt/append.txt", "utf-8", (err, data3) =>
        fs.writeFile(
          "./starter/txt/final.txt",
          `${data2}\n Updated at ${Date.now()}`,
          (err) =>
            fs.readFile("./starter/txt/final.txt", "utf-8", (err, data) =>
              console.log("File contents ", data)
            )
        )
      )
    )
);
console.log("Reading file");
