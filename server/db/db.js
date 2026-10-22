import mongoose from 'mongoose';
const connetDB = async()=>{
  try {
    if (!process.env.MONGODB_URI) {
      throw new Error('MONGODB_URI is not set. Add it to server/.env.');
    }

    await mongoose.connect(`${process.env.MONGODB_URI}/bg-removal`)
    console.log('Database connected!');
  } catch (error) {
    console.error('Database connection failed:', error);
    throw error;
  }
}

export default connetDB;
