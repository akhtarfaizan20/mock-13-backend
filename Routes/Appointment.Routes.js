const express = require("express");
const {
  createAppointment,
  getAppoinments,
  updateAppoinments,
} = require("../Controller/Appointment.controlller");

const appoinmentRouter = express.Router();

appoinmentRouter.post("/", createAppointment);

appoinmentRouter.get("/", getAppoinments);
appoinmentRouter.patch("/:_id", updateAppoinments);

module.exports = {
  appoinmentRouter,
};
