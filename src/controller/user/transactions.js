import express from 'express'
import { LATEST_TRANSACTION, LIMITED_TRANSACTIONS } from '../../constants/services.js';
import { getLatestTransactions, getLimitedTransactions } from '../../model/db/userTransaction.js';

const transaction_router = express.Router();

transaction_router.post(LATEST_TRANSACTION, async(req, res) => {
    const transactions = await getLatestTransactions(req.body);
    res.send(transactions)
})

transaction_router.post(LIMITED_TRANSACTIONS, async (req, res) => {
    const transactions = await getLimitedTransactions(req.body);
    res.send(transactions)
})

export default transaction_router;