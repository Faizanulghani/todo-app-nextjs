const { default: mongoose } = require("mongoose");

let isConnected = false;

export const connectDb = async () => {
  if (isConnected) return;
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    isConnected = true;
    console.log("Database connected....");
  } catch (error) {
    console.log(error);
  }
};
