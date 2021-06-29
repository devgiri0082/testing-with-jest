let tutorials = require("../model/tutorialModel");
let tags = require("../model/tagsModel");

let getTags = async () => {
  try {
    let data = await tags.find();
    return { code: 201, message: data };
  } catch (err) {
    console.log(err);
    return { code: 400, message: err };
  }
};

let postTags = async ({ title, slug }) => {
  try {
    let newTag = new tags({ title: title, slug: slug, tutorials: [] });
    await newTag.save();
    return { code: 201, message: err };
  } catch (err) {
    console.log(err);
    return { code: 4000, message: err };
  }
};

module.exports = { getTags, postTags };
