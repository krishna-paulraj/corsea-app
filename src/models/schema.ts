import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    unique: true,
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  forgotPasswordToken: String,
  forgotPasswordTokenExpiry: Date,
  verifyUserToken: String,
  verifyUserTokenExpiry: Date,
});

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  decription: {
    type: String,
    required: true,
  },
  banner: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
  },
  published: {
    type: Boolean,
  },
});

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;
