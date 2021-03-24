// Owner Schema
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OwnerSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    cars: [{ type: Schema.Types.ObjectId, ref: "Car" }],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Owner", OwnerSchema);
