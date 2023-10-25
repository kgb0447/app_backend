import express from 'express'
import { ALL_CUSTOMERS, CUSTOMER_WITH_CREDENTIALS, CUSTOMER_WITH_ID } from '../../constants/services.js';
import { getAllData, getUserByID, joinDetailsAndCredentials } from '../../model/db/userDetails.js';

const user_router = express.Router();

user_router.get(ALL_CUSTOMERS, async (req, res) => {
        try {
            const data = await getAllData();
            res.send(data)
        } catch (err) {
            console.log(err)
        }
})

user_router.get(CUSTOMER_WITH_CREDENTIALS, async (req, res) => {
    try {
        const data = await joinDetailsAndCredentials();
        res.send(data)
    } catch (err) { 
        console.log(err)
    }
})

user_router.post(CUSTOMER_WITH_ID, async(req, res) => {
    const user = await getUserByID(req.body);
    res.send(user)
})
export default user_router;