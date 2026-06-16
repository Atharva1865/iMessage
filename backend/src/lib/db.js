import mongoose from "mongoose"

export async function connectDB() {
    try {
        const mongoUri = process.env.MONGO_URI

        if(!mongoUri){
            throw new Error("MONGO_URI is Required")
        }

        const conn = await mongoose.connect(mongoUri)
        console.log("MongoDB connected Successfully", conn.connection.host)
    } catch (error) {
        console.error("MongoDB Connection Error:",error.message)
        process.exit(1)   // 1 means Failed, 0 means Succedded
    }
}