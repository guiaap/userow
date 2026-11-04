import { registerUser } from "../services/users.service.js";

export async function register(req, res, next) {

    try {

        const { name, email, password } = req.body ?? {};

        if(
            typeof name !== "string" ||
            typeof email !== "string" ||
            typeof password !== "string" ||
            !name.trim() || 
            !email.trim() ||
            !password.trim()
        ) {
            return res.status(400).json({
                message: "Name, email and password are required.",
            });
        }

        const user = await registerUser({
            name: name.trim(),
            email: email.trim().toLocaleLowerCase(),
            password,
        });

        return res.status(201).json(user);
        
    } catch (error) {

        next(error);
    }
}