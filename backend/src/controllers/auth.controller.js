import { authenticateUser } from "../services/auth.service.js";

export async function login(req, res, next) {

    const { email, password } = req.body ?? {};

    if(
        typeof email !== "string" ||
        !email.trim() ||
        typeof password !== "String" ||
        !password
    ) {
        return res.status(400).json({
            message: "Email and password are required."
        });
    }

    try {

        const result = await authenticateUser({
            email: email.trim(),
            password
        });

        return res.status(200).json(result);
        
    } catch (error) {

        return next(error);
    }
}