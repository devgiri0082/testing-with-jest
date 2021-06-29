let mongoose = require("mongoose");

let tagsSchema = new mongoose.Schema({
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
  tutorials: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "tutorial",
    required: false,
  },
});

let tagsModel = new mongoose.model("tag", tagsSchema);
module.exports = tagsModel;
