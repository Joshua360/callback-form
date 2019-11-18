
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

const port = process.env.PORT || 3000;

app.listen(port,()=>{
  console.log("App is running on localhost:3000");
});

