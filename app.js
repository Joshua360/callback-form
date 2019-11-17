
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false}));
app.use(cookieParser());
app.use('/static', express.static('public'));

app.set('view engine', 'pug');

const mainRoute = require("./routes/index");
const profileRoute = require("./routes/profile");

app.use("/", mainRoute);
app.use("/profile", profileRoute);

app.listen(3000,()=>{
  console.log("App is running on localhost:3000");
});

