const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

// IMPORT MODELS
require('../models/Product');

const app = express();

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || `mongodb://localhost:27017/kilmore_physio`);

app.use(bodyParser.json());

//IMPORT ROUTES
require('../endpoints/productRoutes')(app);

//app.use("/users", require("./routes/users")); 
//app.use("/groups", require("./routes/groups")); 
//app.use(express.static(__dirname + "/client/build")); 
//app("/*", (req, res) => { res.sendFile(path.join(__dirname, "client", "build", "index.html")); });


app.use(express.json()); 
app.use(cors());
app.get("/", (req, res) => {
    res.json({ message: "Welcome to 365 Physiotherapy." });
  }); 

if (process.env.NODE_ENV === 'production') {
    const path = require('path');
    //app.use(express.static('client/build'));
    //app.use(express.static(path.resolve(__dirname, '../client/build')));

    //app('/*', (req, res) => {
        //res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
        
    //app("/*", (req, res) => { console.log("i am in star");res.sendFile(path.join(__dirname, "client", "build", "index.html")); 

    //})

}
//var myroutes = require('./routes.js');
// ...
//app.use( myroutes);
//app.use('/', myroutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`app running24 on port ${PORT}`)

});