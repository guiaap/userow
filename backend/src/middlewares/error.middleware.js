export function errorHandler(err, req, res, next) {

    if(res.headersSent) {
        return next(err);
    }

    console.error(err);

    if(
        err.code === "23505" && 
        err.constraint === "uq_users_email_lower"
    ) {
        return res.status(409).json({
            emailMessage: "User already exists. Sign in."
        });
    }

    const statusCode = err.statusCode || 500;
    const message = statusCode === 500 ? "Internal server error." : err.message;

    res.status(statusCode).json({
        error: message,
    });
}