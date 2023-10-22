const mongoose = require("mongoose");

const MONGO_DB_CONNECTION_STRING = `mongodb://mongo:${process.env.MONGO_DB_PORT}/${process.env.MONGO_DB_DATABASE_NAME}`;

mongoose
  .connect(MONGO_DB_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Conexión exitosa a MongoDB");
  })
  .catch((err) => {
    console.error(err);
  });

module.exports = mongoose.model(
  "User",
  new mongoose.Schema({
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  })
);
