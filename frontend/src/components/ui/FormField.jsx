import { useState } from "react";
import Icon from "./Icon.jsx";

export default function FormField({
    id,
    label,
    inputType="text",
    required=true
}) {

    const [isPasswordVisible, setIsPasswordVisible] = useState(true);
    const isPassword = inputType === "password";
    const type = isPassword && isPasswordVisible ? "text" : inputType;

    return (
        <fieldset className="flex flex-col gap-1 text-[0.9rem]">

            <label 
                htmlFor={id}
                className="font-bold px-1"
            >
                {label}
             </label>

             <div className="relative">
                 <input
                    type={type}
                    id={id}
                    name={id}
                    required={required}
                    className="
                        w-[300px]
                        px-2 py-1
                        bg-(--color-bg-secondary)
                        border border-(--color-border)
                        outline-none
                        rounded-md
                        transition-colors duration-300
                        focus:border-(--color-accent-hover)
                    "
                 />
                { isPassword  && (
                    <button
                        type="button"
                        onClick={() => setIsPasswordVisible(prev => !prev)}
                        aria-label={
                            isPasswordVisible ? "Hide password" : "Show password"
                        }
                        className="
                            absolute right-2 top-1/2 -translate-y-1/2
                            cursor-pointer
                        "
                    >
                        <Icon
                            name={ isPasswordVisible ? "visibilityOff" : "visibility" }
                        />
                    </button>
                )}
             </div>
        </fieldset>
    );
}