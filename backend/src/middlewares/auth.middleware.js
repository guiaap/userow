import jwt from "jsonwebtoken";
import "dotenv/config";

export default function authMiddleware(req, res, next) {

    const authorization = req.headers.authorization;

    if(!authorization) {
        return res.status(401).json({
            message: "Authorization token not provided."
        });
    }

    const [scheme, token] = authorization.split(" ");

    if(scheme !== "Bearer" || !token) {
        return res.status(401).json({
            message: "Invalid token format."
        });
    }

    try {

        const payload = jwt.verify(
            token,
            process.env.JWT_SECRET,
            {
                algorithms: ["HS256"],
                issuer: "userow",
                audience: "userow-api"
            }
        );

        req.auth = payload;

        next();
        
    } catch (error) {

        return res.status(401).json({
            message: "Invalid or expired token."
        });
    }

}