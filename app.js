const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const routes = require("./routes/routes");

app.use(bodyParser.urlencoded({ extended: false }));
app.set("view engine", "pug");

app.use(routes);

app.listen(3000, () => console.log("App is running on port 3000"));
