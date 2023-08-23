import mongoose from "mongoose";

let isConnected = false; // track connection status

export const connectToDatabase = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("=> using existing database connection");
    return Promise.resolve();
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: 'share_prompt',
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    isConnected = true;
    console.log("=> mongoDb connected");
  } catch (error) {
    console.log("=> error connecting to database:", error);
  }
};
