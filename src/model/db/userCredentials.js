import { baseJoinQuery, executeQuery } from "./config/index.js";

export const validateUser = async({username, password}) => {
    const result = await executeQuery(`${baseJoinQuery} WHERE username = ? AND password = ?`,[username, password])
    return result
};

export const addUserDetails = async ({
    uuid,
    first_name, 
    last_name, 
    age, 
    phone_number, 
    email_address, 
    address, 
    verification_level
}) => {
    try {
        const [result] = await executeQuery(`
            INSERT INTO etap_app.user_details (uuid, first_name, last_name, age, phone_number, email_address, address, verification_level)
            VALUES (?,?,?,?,?,?,?,?)
        `,[uuid, first_name, last_name, age, phone_number, email_address, address, verification_level])
        return result;
    } catch (err) {
        console.log(err)
    }
}