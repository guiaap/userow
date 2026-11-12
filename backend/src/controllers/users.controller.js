import { registerUser } from "../services/users.service.js";
import { 
    validateName, 
    validateEmail, 
    validatePassword 
} from "../validators/users.validators.js";

export async function register(req, res, next) {

    try {

        const { name, email, password } = req.body;

        const { isNameValid, nameMessage } = validateName(name);
        const { isEmailValid, emailMessage } = validateEmail(email);
        const { isPasswordValid, passwordMessage } = validatePassword(password);

        if(!isNameValid || !isEmailValid || !isPasswordValid) {
            return res.status(400).json({
                isNameValid,
                isEmailValid,
                isPasswordValid,
                nameMessage,
                emailMessage,
                passwordMessage,
            });
        }

        const normalizedName = name.trim();
        const normalizedEmail = email.trim().toLowerCase();

        const user = await registerUser(
            normalizedName, 
            normalizedEmail, 
            password
        );

        res.status(201).json({
            message: "User created successfully",
            user,
        });

    } catch(err) {
        next(err);
    }
}