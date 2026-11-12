export function validateName(name) {

    if(typeof name !== "string") {
        return { 
            isNameValid: false, 
            nameMessage: "Invalid name format (not a string)"
        };
    }

    let normalizedName = name.trim();

    if(!normalizedName) {
        return { 
            isNameValid: false, 
            nameMessage: "Name not provided"
        };
    }

    if(normalizedName.length < 2) {
        return { 
            isNameValid: false, 
            nameMessage: "Ivalid name (less than 2 characters)"
        };
    }

    return { 
        isNameValid: true, 
        nameMessage: null
    };
}

export function validateEmail(email) {

    if(typeof email !== "string") {
        return { 
            isEmailValid: false, 
            emailMessage: "Invalid email format (not a string)"
        };
    }

    const normalizedEmail = email.trim();

    if(!normalizedEmail) {
        return { 
            isEmailValid: false, 
            emailMessage: "Email not provided"
        };
    }

    if(normalizedEmail.length > 254) {
        return { 
            isEmailValid: false, 
            emailMessage: "Invalid email (larger than 254 characters)"
        };
    }

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!regex.test(normalizedEmail)) {
        return { 
            isEmailValid: false,
            emailMessage: "Invalid email format"
        };
    }

    return { 
        isEmailValid: true, 
        emailMessage: null
     };
}

export function validatePassword(password) {

    if(typeof password !== "string") {
        return { 
            isPasswordValid: false, 
            passwordMessage: "Invalid email format (not a string)"
        };
    }

    if(password.length === 0) {
        return { 
            isPasswordValid: false, 
            passwordMessage: "Password not provided"
        };
    }

    if(password.length <= 7) {
        return { 
            isPasswordValid: false, 
            passwordMessage: "Password invalid (less than 8 characters)"
        };
    }

    return { 
        isPasswordValid: true, 
        passwordMessage: null
    };
}

