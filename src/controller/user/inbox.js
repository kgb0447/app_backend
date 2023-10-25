import express from 'express'
import { USER_INBOX } from '../../constants/services.js';
import { getUserInbox } from '../../model/db/userInbox.js';

const inbox_router = express.Router();

inbox_router.post(USER_INBOX, async(req, res) => {
    const result = await getUserInbox(req.body);
    res.send(result)
})

export default inbox_router;