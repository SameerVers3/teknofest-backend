import mongoose from 'mongoose';

const connectDB = async (type) => {
  try {
    let uri;

    switch (type) {
      case 'test':
        uri = process.env.MONGO_URI_TEST;
        break;
      default:
        uri = process.env.MONGO_URI;
    };

    await mongoose.connect(uri);
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    throw error;
  }
};

export default connectDB;
