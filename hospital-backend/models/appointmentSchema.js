import mongoose from "mongoose";
import validator from "validator";

const appointmentSchema = new mongoose.Schema({
  firstName: {
    type: String,
    require: true,
    minLength: [3, "First Name Must Contain Ar Least 3 Characters!"],
  },
  lastName: {
    type: String,
    require: true,
    minLength: [3, "Last Name Must Contain Ar Least 3 Characters!"],
  },
  email: {
    type: String,
    require: true,
    validate: [validator.isEmail, "please Provide A Valid Email!"],
  },
  phone: {
    type: String,
    require: true,
    minLength: [10, "Message Must Contain Exact 11 Digits!"],
  },
  nic: {
    type: String,
    require: true,
    minLength: [13, "NIC Must Contain Exact 13 Digits!"],
    maxLength: [13, "NIC Must Contain Exact 13 Digits!"],
  },
  dob: {
    type: Date,
    require: [true, "DOB is required!"],
  },
  gender: {
    type: String,
    require: true,
    enum: ["Male", "Female"],
  },
  appointment_date: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  doctor: {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
  },
  hasVisited: {
    type: Boolean,
    default: false
  },
  doctorId: {
    type: mongoose.Schema.ObjectId,
    required: true,
  },
  patientId: {
    type: mongoose.Schema.ObjectId,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["Pending", "Accepted", "Rejected"],
    default: "pending",
  },
});

export const Appointment = mongoose.model("Appointment", appointmentSchema);
