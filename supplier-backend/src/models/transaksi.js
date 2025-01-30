const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
  type: { type: String, enum: ["purchase", "sale"], required: true },
  product: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
  supplier: { type: mongoose.Schema.Types.ObjectId, ref: "Supplier" },
  quantity: { type: Number, required: true },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Transaction", transactionSchema);
