import mongoose from 'mongoose'
import { config } from 'dotenv'

config();

const connectDB = async () => {

    try {

        mongoose.connection.on("connected", () => {

            console.log("connected successfully");
        });

        mongoose.connection.on('error', () => {
            console.log("connection fail")
        })


        await mongoose.connect(process.env.DB_URL as string);

    }
    catch (err) {
        console.log("connection failed : ", err);
    }

}

export default connectDB


