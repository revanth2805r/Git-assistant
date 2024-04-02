import mongoose from "mongoose";

export default async function connectMongoDB() {
	try {
		await mongoose.connect("mongodb+srv://mailtorevanth28:EnJWktGIbCzxXn7A@cluster0.uxz5jws.mongodb.net/GIT-DB?retryWrites=true&w=majority&appName=Cluster0");
		console.log("MONGODB connected");
	} catch (error) {
		console.log("Error connecting to MongoDB: ", error.message);
	}
}
