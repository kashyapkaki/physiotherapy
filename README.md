# Setup and Getting started with kilmore_physio setup

## Prerequisites

1. Install Node (Node server, npm)
2. Install Mongodb (DB)
3. Install Git bash (Terminal) for Windows

---

## Initialize a npm project

- mkdir kilmore_physio
- cd kilmore_physio
- npm init -y

Once the dependencies are saved in 'package.json'
--> npm install

##Creating our 'server' module

Install our backend dependencies:

npm install --save express body-parser mongoose

- In this project we use Express.js, a very popular framework for Node.js applications.
  - Body parser - Parses incoming REST API response
  - Mongoose - Mongodb object modeling framework

Installing devDep

- npm install --save-dev nodemon concurrently

Note: In 'npm install'

- '--save' --> this saves under 'dependencies' object
  - '--save-dev' --> this saves under 'devDependencies' object

## Creating Model & Routes

- mkdir models routes (Create model and routes directories)

## Create 'index.js' (also referred to as 'server.js')

- mkdir server
- touch server/index.js

Add code to the index.js

```bash
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || `mongodb://localhost:27017 node-react-starter`);

process --> Node js native method it is initialized once we start the nodjs project

.env -->  Emittor

Create '.env'
MONGODB_URI=mongodb://localhost:27017


app.use(bodyParser.json());

const PORT = process.env.PORT || 5000; -->  this is where our server app will run
app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`)
});


```

## Model --> Product.js

Schema --> {
\_id: 1221214566,
name: Prakash
description: Yes the service was good
}

## Routes

Enpoints
e.g.
module.exports = (app) => {
app.get(`/api/product/:id`, async (req, res) => {
const {id} = req.params;
let product = await Product.findById(id, req.body);
return res.status(202).send({
error: false,
product
})
});
}

- npm start

## Creating Client Module

### Note: These commands are run in the kilmore_physio directory

- npm install -g create-react-app

- create-react-app client

'dev' script from package.json --> 'npm run' dev

- npm install

## Create App Routing

-
