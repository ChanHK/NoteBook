const mongoose = require("mongoose");
const { title } = require("process");

const notesSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  notes: [
    {
      title: {
        type: String,
        default: "",
      },
      description: {
        type: String,
        default: "",
      },
      effort: {
        type: Number,
        default: 10,
      },
    },
  ],
});

module.exports = mongoose.model("Notes", notesSchema);
