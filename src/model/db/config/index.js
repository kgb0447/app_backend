import dotenv from 'dotenv';
import { createPool } from 'mysql2';
dotenv.config();

export const pool = createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
}).promise();


export const baseJoinQuery = `
SELECT DISTINCT *
FROM etap_app.user_details
JOIN etap_app.user_credentials 
ON etap_app.user_details.uuid = etap_app.user_credentials._uuid
`;


export const executeQuery = async (query, params) => {
    try {
        const [result] = await pool.query(query, params);
        return result;
    } catch (err) {
        console.log(err);
        throw err;
    }
}
