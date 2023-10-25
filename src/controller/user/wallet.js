import { Router} from 'express';
import { FRANCHISE_WALLETS } from '../../constants/services.js';
import { getAllWallet } from '../../model/db/userWallet.js';

const wallet_route = Router();

wallet_route.post(FRANCHISE_WALLETS, async (req, res) => {
    try {   
        const result = await getAllWallet(req.body);
        res.send(result);
    } catch (err) {
        console.log(err)
    }
})

export default wallet_route;