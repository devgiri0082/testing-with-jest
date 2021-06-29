// const { getTags } = require("./controller/tagsController");
// const { getTutorial } = require("./controller/tutorialController");

// let app = require("../index");
// // (async () => {
// //   await mongoose.connect("mongodb://127.0.0.1:27017/tutorials", {
// //     useNewUrlParser: true,
// //     useUnifiedTopology: true,
// //     useFindAndModify: false,
// //     useCreateIndex: true,
// //   });
// // })();
// app.get("/tutorials", async (req, res) => {
//   let response = await getTutorial();
//   console.log(response);
//   res.status(response.code).send(response.message);
// });
// app.get("/tags", async (req, res) => {
//   let response = await getTags();
//   console.log(response, "tags");
//   res.status(response.code).send(response.message);
// });
// const PORT = 3300;
// app.listen(3300, () => console.log(`listening in the port ${3300}`));
