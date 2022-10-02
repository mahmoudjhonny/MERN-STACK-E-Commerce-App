const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRouter = require("./routes/user");

const app = express();

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("DB connection established successfully");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(express.json());
app.use("/api/user", userRouter);

app.listen(process.env.PORT || 3000, () => {
  console.log("App listening in port 3000");
});
