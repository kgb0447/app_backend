import { executeQuery } from "./config/index.js"


const baseQuery = `
    SELECT * FROM etap_app.franchise_wallets
    JOIN etap_app.user_wallet 
    ON etap_app.user_wallet.wallet_id = etap_app.franchise_wallets.wallet_owner_uuid
`

export const getAllWallet = async ({uuid,limit}) => {
    try {
        const res = await executeQuery(`
           ${baseQuery}
            WHERE wallet_id = ?
            ORDER BY franchise_name
            LIMIT ? OFFSET 0
        `,[uuid,limit])
        return res
    } catch(err) {
        console.log(err)
    }
}
