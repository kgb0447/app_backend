import { executeQuery } from "./config/index.js"

const baseQuery = `
    SELECT * FROM etap_app.transactions
    JOIN etap_app.user_wallet
    ON etap_app.transactions._uuid = etap_app.user_wallet.wallet_id
    WHERE wallet_id = ?
    ORDER BY date DESC`
export const getLatestTransactions = async({uuid}) => {
    try {
        const result = await executeQuery(`
            ${baseQuery}
            LIMIT 5 OFFSET 0;
        `,[uuid]);
        return result
    } catch (err) {
        console.log(err)
    }
}

export const getLimitedTransactions = async ({uuid}) => {
    try {
        const result = await executeQuery(`
        ${baseQuery}
            LIMIT 15 OFFSET 0
        `, [uuid])
        return result
    } catch (err) {
        console.log(err)
    }
}