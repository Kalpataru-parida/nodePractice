const http = require('http');
const express = require('express');
const cors = require('cors');

const app = express()

const httpServer = http.createServer(app);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());                               //encode url
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

