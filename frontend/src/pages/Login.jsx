import { useState } from "react";
import FormTitle from "../components/ui/FormTitle.jsx";
import FormField from "../components/ui/FormField.jsx";
import Button from "../components/ui/Button.jsx";
import { Link } from "react-router-dom";
import FormMessage from "../components/ui/FormMessage.jsx";

export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [message, setMessage] = useState("");
    const [isSubmiting, setIsSubmiting] = useState(false);

    return (
        <form className="flex flex-col gap-3">

            <FormTitle>Login</FormTitle>

            <FormField 
                id="email"
                label="E-mail"
                inputType="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
            />

            <FormField 
                id="password"
                label="Password"
                inputType="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
            />

            <Button type="submit" disabled={isSubmiting}>
                { isSubmiting ? "Logging" : "Login" }
            </Button>

            <FormMessage>
                {message}
            </FormMessage>

            <div className="
                flex flex-col gap-1 items-center
                text-(--color-text-secondary) text-[0.8rem] 
            ">
                <p>
                    Don't have an account yet?
                </p>
                <Link to="/register">
                    <strong>Register</strong>
                </Link>
            </div>

        </form>
    )
}