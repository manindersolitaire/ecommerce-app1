import mongoose from 'mongoose'
import dns from 'dns'

dns.setServers(["8.8.8.8", "0.0.0.0"])
export const connectDB  = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("MONGODB Connected Successfully")
    } catch (error) {
        console.log("MongoDB connection falied", error.message)
        process.exit(1)
    }
}