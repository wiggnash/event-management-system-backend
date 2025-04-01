import connectDB from "./config/db.js";
import dotenv from "dotenv";
import app from "./app/app.js";
dotenv.config();

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

startServer();

export default startServer;
