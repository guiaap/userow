import bcrypt from "bcrypt";
import "dotenv/config";
import { findUserByEmail } from "../repositories/users.repository.js";

export async function authenticateUser({ email, password }) {

    const user = await findUserByEmail(email);

    if(!user) {
        const error = new Error("Invalid email or password.");
        error.statusCode = 401;
        throw error;
    }

    const isPasswordValid = await bcrypt.compare(
        password,
        user.password_hash
    );

    if(!isPasswordValid) {
        const error = new Error("Invalid email or password.");
        error.statusCode = 401;
        throw error;
    }

    const token = jwt.sign(
        { role: user.role },
        JWT_SECRET,
        {
            algorithm: "HS256",
            subject: String(user.id),
            expiresIn: "1h",
            issuer: "userow",
            audience: "userow-api"
        }
    );

    return {
        token,
        user: {
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role
        }
    };  
}