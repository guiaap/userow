import bcrypt from "bcrypt";
import { createUser } from "../repositories/users.repository.js";

export async function registerUser({ name, email, password }) {

    const passwordHash = await bcrypt.hash(password, 12);

    return createUser({ name, email, passwordHash, role: "user" });
}