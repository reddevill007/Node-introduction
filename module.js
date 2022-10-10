// Npm module
const color = require("cli-color");
// import color from "cli-color"; --> using mjs extension
// const auth = require("./auth");
// immideate invoke function
// (function (name) {
//   console.log(name);
// })("Saurabh");

// console.log(color.green("Hello world"));
// auth.register("Code inertia");
// auth.login("Code inertia", "abc@123");

const path = require("path");

// dirname
// console.log(color.green("Folder name: "), color.blue(path.dirname(__filename)));

// filename
// console.log(color.green("File name: "), color.blue(path.basename(__filename)));

// Extension
// console.log(
//   color.green("Extension name: "),
//   color.blue(path.extname(__filename))
// );

// parse
// console.log("Parse: ", path.parse(__filename));

// Join
// console.log(
//   "Join: ",
//   path.join(__dirname, "ram", "shyam", "sita", "hanuman.js")
// );

// File system
const fs = require("fs");

// Make a directory
// fs.mkdir(path.join(__dirname, "/test"), (err) => {
//   if (err) {
//     console.log("Something Went wrong...", err);
//     return;
//   }

//   console.log("folder created");
// });

// Create a file
// fs.writeFile(
//   path.join(__dirname, "test", "test.txt"),
//   "Hello i created this file using nodejs",
//   (err) => {
//     if (err) {
//       console.log("Something Went wrong...", err);
//       return;
//     }

//     // Appending  the data
//     fs.appendFile(
//       path.join(__dirname, "test", "test.txt"),
//       "More Data",
//       (err) => {
//         if (err) {
//           console.log("Something Went wrong...", err);
//           return;
//         }
//         console.log("data added");
//       }
//     );

//     console.log("file created");
//   }
// );

// Reading a file
// fs.readFile(path.join(__dirname, "test", "test.txt"), "utf-8", (err, data) => {
//   if (err) {
//     throw err;
//   }
//   //   const content = Buffer.from(data);
//   //   console.log(content.toString());
//   console.log(data);
// });

// Os module --> used for server monitoring
const os = require("os");

// console.log("Os type: ", os.type());
// console.log("Os platform: ", os.platform());
// console.log("Cpu architecture: ", os.arch());
// console.log("Cpu details: ", os.cpus());
// console.log("Free memory: ", os.freemem());
// console.log("Total memory: ", os.totalmem());
// console.log("Uptime: ", os.uptime());

// Events Module
const Emiter = require("events");

// const myEmitter = new Emiter();

// myEmitter.on("somename", (data) => {
//   console.log(data);
// });

// myEmitter.emit("somename", {
//   name: "Saurabh",
// });

// Real life project example
// class Auth extends Emiter {
//   register(userName) {
//     console.log("Registered successfully...");
//     this.emit("registered", userName);
//   }
// }

// const auth = new Auth();

// // Listen -> varify email
// auth.on("registered", (data) => {
//   console.log(`Sending email to ${data}`);
// });

// // Listen -> welcome email
// auth.on("registered", (data) => {
//   console.log(`Sending welcome email to ${data}`);
// });

// auth.register("Saurabh");
