const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

require("../models/Product");

const app = express();

app.use(bodyParser.json());

require("../endpoints/productRoutes")(app);

app.use(express.json());

var corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.send("route testing");
  console.log("got the /");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`);
});

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});
