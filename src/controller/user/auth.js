import express from 'express'
import { SIGN_IN, SIGN_UP } from '../../constants/services.js';
import { validateUser } from '../../model/db/userCredentials.js';
import { addUserDetails } from '../../model/db/userCredentials.js';

const auth_router = express.Router();

auth_router.post(SIGN_IN, async(req, res) => {
    const [user] =  await validateUser(req.body);
    res.send(user)
});

auth_router.post(SIGN_UP, async(req, res) => {
    const user = await addUserDetails(req.body)
    res.send(user)
})

export default auth_router;