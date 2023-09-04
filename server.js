const mongoose = require("mongoose");
const app = require("./app");
require("dotenv").config();

const PORT = process.env.PORT || 8000;
const DB = process.env.DATABASE;

mongoose
  .connect(DB)
  .then(() => {
    console.log("Mongo Connected for Task Manager API");
  })
  .catch((error) => {
    console.log(error);
  });

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
