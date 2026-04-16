import mongoose from "mongoose";
import bcrypt from "bcrypt";
import Doctor from "./models/Doctor.js"; // adjust path if needed

const resetPassword = async () => {
  try {
    await mongoose.connect("your_mongodb_connection_string");

    const newPassword = "doctor123"; // new password you want
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    await Doctor.findOneAndUpdate(
      { email: "doctor@email.com" },
      { password: hashedPassword }
    );

    console.log("Password reset successful");

    process.exit();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

resetPassword();