import { useState } from "react";
import FormTitle from "../components/ui/FormTitle.jsx";
import FormField from "../components/ui/FormField.jsx";
import Button from "../components/ui/Button.jsx";
import FormMessage from "../components/ui/FormMessage.jsx";
import { Link } from "react-router-dom";

export default function Register() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [message, setMessage] = useState("");
    const [isSubmiting, setIsSubmiting] = useState(false);

    async function handleSubmit(event) {

        event.preventDefault();

        setMessage("");
        setIsSubmiting(true);

        try {

            const response = await fetch("http://localhost:3000/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name, email, password }),
            });

            const data = await response.json().catch(() => null);

            if(!response.ok) {
                throw new Error(
                    data?.message || "Unable to register the user."
                );
            }

            setMessage("User registered successfully");

            setName("");
            setEmail("");
            setPassword("");
            
        } catch (error) {
            setMessage(error.message);
        } finally {
            setIsSubmiting(false);
        }
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <FormTitle>Create Account</FormTitle>
            
            <FormField 
                id="name"
                label="Name"
                inputType="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
            />

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
                { isSubmiting ? "Registering..." : "Register" }
            </Button>

            <FormMessage>
                {message}
            </FormMessage>

            <div className="
                flex flex-col gap-1 items-center
                text-(--color-text-secondary) text-[0.8rem] 
            ">
                <p>
                    Already have an account?
                </p>
                <Link to="/login">
                    <strong>Login</strong>
                </Link>
            </div>

        </form>
    );
}