const http = require('http');
const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose");

const app = express()
const httpServer = http.createServer(app);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());                               
app.use(cors());

   //   teacher
const classRouter = require("./source/api/student/studentRouter");
app.use("/api/student",classRouter);

   //   student
const classrouter = require("./source/api/teacher/teacherRouter");
app.use("/api/teacher",classrouter);


app.use("/", (req, res, next) => {
  res.send("Ready to Serve!!!");
});


//if something wrong with the server
app.use((req, res, next) => {
  res.status(500).json({
    message: "Something went wrong",
  });
});


const port = 3000;

mongoose.connect("mongodb+srv://kalpataru:kalpataru123@cluster0.q8rdkt7.mongodb.net/?retryWrites=true&w=majority",{
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function callback() {
  console.log("MongoDB connected !!");
  httpServer.listen(port, () => {
    console.log("Serving!!!");
  });
});