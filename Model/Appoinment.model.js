const { default: mongoose } = require("mongoose");

const AppointmentSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    image: { type: String, required: true },
    specialization: { type: String, required: true },
    experience: { type: Number, required: true },
    location: { type: String, required: true },
    date: { type: Date, default: new Date().toDateString() },
    slots: { type: Number, required: true },
    fee: { type: Number, required: true },
  },
  {
    versionKey: false,
  }
);

const AppointmentModel = mongoose.model("/appointments", AppointmentSchema);

module.exports = {
  AppointmentModel,
};
