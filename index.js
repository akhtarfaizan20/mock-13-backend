const express = require("express");
const cors = require("cors");
require("dotenv").config();

const { connectDB } = require("./Config/db");
const { userRouter } = require("./Routes/User.routes");
const { appoinmentRouter } = require("./Routes/Appointment.Routes");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/users", userRouter);

app.use("/appointments", appoinmentRouter);

app.get("/", (req, res) => {
  res.send("Home Route");
});

app.listen(process.env.PORT, async () => {
  try {
    await connectDB;
  } catch (error) {
    console.log(error);
  }
  console.log("server is live at: http://localhost:8080");
});
