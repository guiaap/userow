import express from "express";
import "dotenv/config";
import cors from "cors";
import { checkDatabaseConnection } from "./utils/checkDatabaseConnection.js";
import usersRoutes from "./routes/users.routes.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

checkDatabaseConnection();

app.use("/users", usersRoutes);

app.use((error, req, res, next) => {

    if(error.code === "23505" && error.constraint === "users_email_key") {
        return res.status(409).json({
            message: "E-mail already registered."
        });
    }

    console.error(error);

    return res.status(500).json({
        message: "Internal server error",
    });
});

app.listen(PORT, () => {
    console.log(`\nServidor inicializado em http://localhost:${PORT}\n`);
});