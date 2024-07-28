const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/LoginForm", {})
  .then(() => {
    console.log("mongodb connected");
  })
  .catch((err) => {
    console.log("failed to connect", err);
  });

const LoginSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const collection = mongoose.model("collection", LoginSchema);

module.exports = collection;
