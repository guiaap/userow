import express from "express";
import "dotenv/config";
import { checkDatabaseConnection } from "./utils/database.js";
import { errorHandler } from "./middlewares/error.middleware.js";
import usersRoutes from "./routes/users.routes.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

checkDatabaseConnection();

app.get("/health", (_req, res) => {
    res.json({ status: "ok" });
});

app.use("/users", usersRoutes);

app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`\nServer running on http://localhost:${PORT}`);
});