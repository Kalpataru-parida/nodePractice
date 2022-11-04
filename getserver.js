const http = require('http');
const express = require('express');
const cors = require('cors');

const app = express()

const httpServer = http.createServer(app);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());                               // encode url
app.use(cors());

//default route
app.use("/", (req, res, next) => {                     // define root
  res.send("Ready to Serve!!!");
});

//if something wrong with the server
app.use((req, res, next) => {
  res.status(500).json({
    message: "Something went wrong",
  });
});

const port = 8000;

httpServer.listen(port, () => {
  console.log("serving!!!");
});



// const http = require('http');
// const express = require('express');
// const cors = require('cors');
// const mongoose = require("mongoose");


// const app = express()

// const httpServer = http.createServer(app);

// app.get(express.urlencoded({ extended: true }));
// app.get(express.json());                               
// app.get(cors());


// const arr = ["NASA", "ISRO", "CIA", "RAW"];

// app.get("/hi", (req, res, next) => {
//   console.log(req.query);
//   if (req.query.index) {
//     res.send(arr[req.query.index]);
//   } else {
//     res.send(arr);
//   }
// });

// app.post("/hi", (req, res, next) => {
//   console.log(req.body);
//   arr.push(req.body.name);
//   res.send(arr);
// });

// app.put("/hi", (req, res, next) => {
//   console.log(req.body);
//   const { name, index } = req.body;
//   arr[index] = name;
//   res.send(arr);
// });

// app.delete("/hi", (req, res, next) => {
//   arr.pop();
//   res.send(arr);
// });

// app.use("/", (req, res, next) => {
//   res.send("Ready to Serve!!!");
// });


// //if something wrong with the server
// app.use((req, res, next) => {
//   res.status(500).json({
//     message: "Something went wrong",
//   });
// });


// const port = 3000;

// mongoose.connect("mongodb+srv://kalpataru:kalpataru123@cluster0.q8rdkt7.mongodb.net/?retryWrites=true&w=majority",{
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });


// var db = mongoose.connection;
// db.on("error", console.error.bind(console, "connection error:"));
// db.once("open", function callback() {
//   console.log("MongoDB connected !!");
//   httpServer.listen(port, () => {
//     console.log("Serving!!!");
//   });
// });