import pool from "../config/database.js";

export async function checkDatabaseConnection() {

    try {

        const result = await pool.query("SELECT NOW() AS time");

        console.log("\nSuccessfully connected to PostgreSQL.");
        console.log(`Time: ${result.rows[0].time}`);
        
    } catch (error) {

        console.error("Failed to connect to PostgreSQL:", error);
    }
}