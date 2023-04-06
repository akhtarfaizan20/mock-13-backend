const { AppointmentModel } = require("../Model/Appoinment.model");

const createAppointment = async (req, res) => {
  const app = req.body;
  try {
    let newApp = new AppointmentModel(app);
    await newApp.save();
    res.send({ msg: "Appointment created successfully" });
  } catch (error) {
    console.log(error);
    res.status(400).send({ msg: error });
  }
};

const getAppoinments = async (req, res) => {
  try {
    let appointments = await AppointmentModel.find();
    res.send(appointments);
  } catch (error) {
    console.log(error);
    res.status(400).send({ msg: error });
  }
};

const updateAppoinments = async (req, res) => {
  let { _id } = req.params;
  try {
    await AppointmentModel.findByIdAndUpdate(_id, req.body);
    res.send({ msg: "Updated successfully" });
  } catch (error) {
    console.log(error);
    res.status(400).send({ msg: error });
  }
};

module.exports = {
  createAppointment,
  getAppoinments,
  updateAppoinments,
};
