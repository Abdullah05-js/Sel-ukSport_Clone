 import mongoose from "mongoose";
 const connect = async () => {
  try {
    console.log("am in");
    await mongoose.connect(process.env.MONGO_URL);
    console.log("connected to mongodb");
  } catch (error) {
    console.log("error from mongo:------------",process.env.MONGO_URL ,error.message);
  }
}

export default  connect;