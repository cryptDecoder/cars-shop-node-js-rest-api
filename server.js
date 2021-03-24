/**
 * @desc This is simple car shop REST API
 * @author Pruthviraj pruthviraj2007@gmail.com
 * @required server.js
 */

const express = require("express");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 8080;

// create express app
const app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to Cars shop rest api",
  });
});

app.listen(PORT, () => {
  console.log("Server is running on PORT " + PORT);
});
