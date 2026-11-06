import bcrypt from "bcrypt";
import "dotenv/config";
import { createUser } from "../repositories/users.repository.js";

const JWT_SECRET = process.env.JWT_SECRET;

if (!JWT_SECRET) {
    throw new Error("JWT_SECRET is not configured.");
}

export async function registerUser({ name, email, password }) {

    const passwordHash = await bcrypt.hash(password, 12);

    return createUser({ name, email, passwordHash, role: "user" });
}
