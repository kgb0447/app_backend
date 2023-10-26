import { executeQuery } from "./config/index.js"


const baseQuery = `
    SELECT * 
    FROM etap_app.service_categories
    JOIN etap_app.services
    ON etap_app.service_categories.service_id = etap_app.services.id
`

export const getActiveServiceCategories = async ({service_id}) => {
    try {
        const res = await executeQuery(`
            SELECT * FROM etap_app.service_categories
            WHERE service_id = ?
            ORDER BY category_name
        `,[service_id])
        return res;
    } catch (err) {
        console.log(err)
    }
}

export const getServices = async ({limit}) => {
    try {
        const res = await executeQuery(`
            SELECT * 
            FROM etap_app.services
            ORDER BY name
            LIMIT ? OFFSET 0;
        `,[limit])
        return res
    } catch (err) {

    }
}

export const getBillers = async({service_id,category_id}) => {
    try {
        const res = await executeQuery(`
            SELECT DISTINCT * 
            FROM etap_app.billers
            JOIN etap_app.service_categories 
            ON etap_app.billers.biller_category_id = etap_app.service_categories.category_id
            WHERE biller_category_id = ? OR service_id = ?
        `,[service_id,category_id])
        return res
    } catch (err) {
        console.log(err)
    }
}


export const getBillerForService = async({service_id}) => {
    //Todo: add the other tables aside from game_credits
    try {
        const res = await executeQuery(`
        SELECT DISTINCT * 
        FROM etap_app.game_credits
        JOIN etap_app.services
        ON etap_app.services.id = etap_app.game_credits.service_id
        WHERE service_id = ?
        `,[service_id])
        return res
    } catch (err) {

    }
}