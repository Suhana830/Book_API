import app from "./src/app"
import connectDB from "./src/db"
import { config } from "dotenv"

config();

const startServer = async () => {
    const port = process.env.PORT || 3000;

    await connectDB();
    app.listen(port, () => {
        console.log(`Listening on port : ${port}`);
    });
}

startServer();
