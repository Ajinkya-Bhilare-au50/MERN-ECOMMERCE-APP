import mongoose from "mongoose";

const connectDB = async () => {
  try {mongoose.set("strictQuery", true);
    const conn = await mongoose.connect(
      `mongodb+srv://admin:admin@mernmycluster.grn1iwy.mongodb.net/MERNDB`,
      {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        
      }
    );
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
export default connectDB;
