const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONG_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: true,
    });

    console.log(`MongoDb connected ${conn.connection.host}`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};
