const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

// IMPORT MODELS
require("../models/Product");

const app = express();

mongoose.Promise = global.Promise;
mongoose.connect(
  process.env.MONGODB_URI || `mongodb://localhost:27017/kilmore_physio`
);

app.use(bodyParser.json());

//IMPORT ROUTES
require("../endpoints/productRoutes")(app);

app.use(express.json());
app.use(cors());

if (process.env.NODE_ENV === "production") {
  console.log("production mode");
  const path = require("path");
  //app.use(express.static('client/build'));
  app.use(express.static(path.resolve(__dirname, "../client/build")));

  app.get("/home2", (req, res) => {
    console.log("got the route");
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("route testing");
    console.log("got the /");
  });
  console.log("local mode");
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`);
});

//app.use(function (err: any, req: express.Request, res: express.Response, next: express.NextFunction) {
// console.error(err);
// res.status(err.status || 500).json();
//});

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});
// app.use(function (req: express.Request, res: express.Response, next) {
//   next({ status: 404 });
//});
