const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CarSchema = new Schema(
  {
    brand: {
      type: String,
      required: true,
    },
    model: {
      type: String,
      required: true,
    },
    seats: {
      type: String,
      required: true,
    },
    Owner: {
      type: Schema.Types.ObjectId,
      ref: "Owner",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Car", CarSchema);
