import { baseJoinQuery, executeQuery, pool } from "./config/index.js"

export const getAllData = async () => {
    try {
        const [result] = await pool.query(`
            SELECT * FROM etap_app.user_details
        `)
        return result;
    } catch (err) {
        console.log(err)
    }
}

export const getUserByID = async({uuid}) => {
    try {
        const [result] = await executeQuery(`
            SELECT DISTINCT *
            FROM etap_app.user_details
            JOIN etap_app.user_wallet 
            ON etap_app.user_details.uuid = etap_app.user_wallet.wallet_id
            WHERE uuid = ?;
            `
        ,[uuid])
        return result
    } catch (err) {
        console.log(err)
    }
}



export const joinDetailsAndCredentials = () => executeQuery(baseJoinQuery);

