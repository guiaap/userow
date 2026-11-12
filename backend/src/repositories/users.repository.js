import pool from "../config/database.js";

export async function createUser(name, email, passwordHash, role) {

    const result = await pool.query(`
        INSERT INTO users (name, email, password_hash, role)
        VALUES ($1, $2, $3, $4)
        RETURNING id, name, email, role
    `, [name, email, passwordHash, role]);

    return result.rows[0];
}
