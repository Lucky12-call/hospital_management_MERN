import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";
import Jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({
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
  password: {
    type: String,
    minLength: [8, "Password Must Contain At Least 8 Characters!"],
    require: true,
    select: false,
  },
  role: {
    type: String,
    require: true,
    enum: ["Admin", "Patient", "Doctor"],
  },
  doctorDepartment: {
    type: String,
  },
  docAvatar: {
    public_id: String,
    url: String,
  },
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  this.password = await bcrypt.hash(this.password, 10);
});

userSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.methods.generatedJsonWebToken = function () {
  return Jwt.sign({ id: this._id }, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.JWT_EXPIRES,
  });
};

export const User = mongoose.model("User", userSchema);
