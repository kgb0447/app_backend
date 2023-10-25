import { executeQuery } from "./config/index.js"

export const getUserInbox = async({uuid}) => {
    try {
        const res = executeQuery(`
            SELECT * 
            FROM etap_app.user_inbox
            WHERE _uuid = ?
        `,[uuid])
        return res;
    } catch (err) {
        console.log(err)
    }
}