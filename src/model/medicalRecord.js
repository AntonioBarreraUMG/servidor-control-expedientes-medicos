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
  "MedicalRecord",
  new mongoose.Schema({
    patient_id: {
      type: String,
      unique: true,
      required: true,
    },
    appointment_date: {
      type: Date,
      required: true,
    },
    diagnosis: {
      type: String,
      required: true,
    },
    medications: [String],
    follow_up_date: Date,
    notes: String,
  })
);
