const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

require("../models/Product");

const app = express();

var whitelist = [
  "http://localhost:3000",
  "http://365physiotherapy.ie",
  "https://365physiotherapy.ie",
  "https://www.365physiotherapy.ie"
];
var corsOptions = {
  origin: function (origin, callback) {
    console.log(origin);
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

require("../endpoints/productRoutes")(app);

app.use(express.json());

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
