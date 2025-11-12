const { Schema, model } = require("mongoose");

const todoSchema = new Schema({
  title: { type: String, required: true },
  completed: { type: Boolean, default: false },
});

export const todo = model("Todo", todoSchema);
