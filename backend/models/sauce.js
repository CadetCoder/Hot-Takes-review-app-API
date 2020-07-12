//creating a data schema which contains the fields we want for each Sauce, their type, and whether or not they are a required field

const mongoose = require("mongoose");

const sauceSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  name: { type: String, required: true },
  manufacturer: { type: String, required: true },
  description: { type: String, required: true },
  mainPepper: { type: String, required: true },
  imageUrl: { type: String, required: true },
  heat: { type: Number, min: 1, max: 10, required: true },
  likes: { type: Number, required: true },
  dislikes: { type: Number, required: true },
  usersLiked: [String],
  usersDisliked: [String],
});

module.exports = mongoose.model("Sauce", sauceSchema);