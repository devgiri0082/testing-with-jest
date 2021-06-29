let mongoose = require("mongoose");

let tutorialSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      unique: false,
      required: true,
    },
    slug: {
      type: String,
      unique: true,
      required: true,
    },
    desc: {
      type: String,
      unique: false,
      required: true,
    },
    author: {
      type: String,
      unique: false,
      required: true,
    },
    tags: {
      type: [mongoose.Schema.ObjectID],
      ref: "tag",
      required: false,
    },
  },
  { timestamps: true }
);

let tutorialModel = new mongoose.model("tutorial", tutorialSchema);
module.exports = tutorialModel;
