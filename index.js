require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const { getTags } = require("./routers/controller/tagsController");
const {
  getTutorial,
  postTutorial,
} = require("./routers/controller/tutorialController");

const app = express();

// middlewares
app.use(morgan("tiny"));
app.use(express.json());

(async () => {
  await mongoose.connect("mongodb://127.0.0.1:27017/tutorials", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  });
})();
app.get("/tutorials", async (req, res) => {
  let response = await getTutorial();
  //   console.log(response);
  res.status(response.code).send(response.message);
});
app.post("/tutorials", async (req, res) => {
  console.log(req.body);
  let response = await postTutorial(req.body);
  console.log(response);
  res.status(response.code).send(response.message);
});
app.get("/tags", async (req, res) => {
  let response = await getTags();
  console.log(response, "tags");
  res.status(response.code).send(response.message);
});
const PORT = 3300;
app.listen(3300, () => console.log(`listening in the port ${3300}`));

module.exports = app;
