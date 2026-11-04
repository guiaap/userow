import FormTitle from "../components/ui/FormTitle.jsx";
import FormField from "../components/ui/FormField.jsx";
import Button from "../components/ui/Button.jsx";
import { Link } from "react-router-dom";

export default function Register() {

    return (
        <form className="flex flex-col gap-3">
            <FormTitle>Create Account</FormTitle>
            
            <FormField 
                id="name"
                label="Name"
                inputType="text"
            />

            <FormField 
                id="email"
                label="E-mail"
                inputType="email"
            />

            <FormField 
                id="password"
                label="Password"
                inputType="password"
            />

            <Button>
                Register
            </Button>

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