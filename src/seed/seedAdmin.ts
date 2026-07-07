import dotenv from "dotenv";

dotenv.config();

import connectDatabase from "../config/database";
import User from "../models/User";
import { hashPassword } from "../utils/password";
import { Role } from "../types/roles";

const seedAdmin = async () => {
  try {
    await connectDatabase();

    const existingAdmin = await User.findOne({
      email: "admin@example.com",
    });

    if (existingAdmin) {
      console.log("Admin already exists");
      process.exit();
    }

    const hashedPassword = await hashPassword("Admin@123");

    await User.create({
      name: "System Admin",
      email: "admin@example.com",
      password: hashedPassword,
      role: Role.ADMIN,
    });

    console.log("Admin created successfully");

    process.exit();
  } catch (error) {
    console.error(error);

    process.exit(1);
  }
};

seedAdmin();