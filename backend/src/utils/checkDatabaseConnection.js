import pool from "../config/database.js";

export async function checkDatabaseConnection() {

    try {

        const result = await pool.query("SELECT NOW() AS time");

        console.log("Connected to PostgreSQL.");
        console.log("Time:", result.rows[0].time);

        return true;
        
    } catch (error) {

        console.error("Error connecting to PostgreSQL: ", error);

        return false;
    } 
}