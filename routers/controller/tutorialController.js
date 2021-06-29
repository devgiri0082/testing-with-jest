let tutorial = require("../model/tutorialModel");
let allTags = require("../model/tagsModel");

let getTutorial = async () => {
  try {
    let allTutorial = await tutorial.find();
    return { code: 201, message: allTutorial };
  } catch (err) {
    console.log(err);
    return { code: 401, message: err };
  }
};

let postTutorial = async ({ title, slug, desc, author, tags }) => {
  console.log("inside here");
  try {
    let availableTags = [];
    let tagsWithId = [];
    console.log("2", tags);
    for (let i = 0; i < tags.length; i++) {
      let givenTagValue = await allTags.findOne({ title: tags[i] });
      if (!givenTagValue) return { status: 400, message: "Invalid tags" };
      tagsWithId.push(givenTagValue["_id"]);
      availableTags.push(givenTagValue);
      console.log("Hello");
      console.log(givenTagValue);
    }
    console.log("3");
    let newTutorial = new tutorial({
      title: title,
      slug: slug,
      desc: desc,
      author: author,
      tags: tagsWithId,
    });
    console.log("4");
    await newTutorial.save();
    console.log("5");
    console.log("I saved successfully");
    availableTags.forEach(async (eachTag) => {
      await eachTag.update({ $push: { tutorials: newTutorial["_id"] } });
    });
    return { code: 201, message: newTutorial };
  } catch (err) {
    console.log(err);
    return { status: 400, message: err };
  }
};

module.exports = { getTutorial, postTutorial };
