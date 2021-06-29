let supertest = require("supertest");

let app = require("./index");
let mongoose = require("mongoose");
const request = supertest(app);

let initDB = async () => {
  await mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  });
};

let closeDBConnection = async () => await mongoose.disconnect();

module.exports = {
  request,
  initDB,
  closeDBConnection,
};
