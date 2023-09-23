const express = require("express");
const app = express();
const db = require("./models");

const routes = require("./routes");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(routes);

db.sequelize
  .sync()
  .then(() => {
    app.listen(3001, () => {
      console.clear();
      console.log("Server running on http://localhost:3001");
    });
  })
  .catch((err) => console.log(err));
