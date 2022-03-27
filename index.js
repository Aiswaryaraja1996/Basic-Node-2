//* http

// const http = require("http");

// const server = http.createServer((req, res) => {
//   try {
//     res.writeHead(200, { contentType: "application/json" });
//     res.end(JSON.stringify({ data: "Hello World!!" }));
//   } catch (err) {
//     res.writeHead(400, { contentType: "application/json" });
//     res.end(JSON.stringify({ data: "Error!!" }));
//   }
// });

// server.listen(3001, () => {
//   console.log("Listening to port 3001...");
// });

//* Events

// const EventEmitter = require("events");

// const emitter = new EventEmitter();
// let a = 1;

// emitter.on("message", (a) => {
//   if (a === 10) {
//     console.log("Exiting!!");
//     process.exit();
//   } else {
//     console.log("Message " + a);
//   }
// });

// setInterval(() => {
//   emitter.emit("message", a++);
// }, 1000);

//* Process
// Boiler Plate code of OJ

function runProgram(input) {
  input = input.trim().split("\n");
  console.log(input);
}

//In "old" streams mode the stdin stream is paused by default, so one must call process.stdin.resume()
process.stdin.resume();

//Setting the type of encoding
process.stdin.setEncoding("ascii");

let read = "";

//  listening to input by subscribing to ‘data’ event on standard input.
process.stdin.on("data", function (input) {
  read += input;
  console.log(read);
});

// to capture the end event
process.stdin.on("end", function () {
  read = read.replace(/\n$/, "");
  runProgram(read);
});

//to catch any signal interupts
process.on("SIGINT", function () {
  read = read.replace(/\n$/, "");
  runProgram(read);
  process.exit(0);
});
