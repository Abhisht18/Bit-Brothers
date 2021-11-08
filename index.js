const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const _ = require("lodash");
const User = require("./models/user-model.js");
const createRoutes = require('./routes/createRoutes');
const getRoutes = require('./routes/getRoutes');
const updateRoutes = require('./routes/updateRoutes');
const deleteRoutes = require('./routes/deleteRoutes');

const app = express();

const dbURL = "mongodb://localhost:27017/userDB";

mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(3000))
    .catch(err => console.log(err));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/create", createRoutes); //MVC
app.use("/get", getRoutes); //MVC
app.use("/update", updateRoutes); //MVC
app.use("/delete", deleteRoutes); //MVC