import express, { Router } from 'express'
import cors from 'cors'
import { PORT } from './src/constants/services.js';
import user_router from './src/controller/user/users.js'
import auth_router from './src/controller/user/auth.js';
import transaction_router from './src/controller/user/transactions.js';
import inbox_router from './src/controller/user/inbox.js';
import wallet_route from './src/controller/user/wallet.js';
import service_route from './src/controller/user/services.js';

const app = express();

app.use(express.json())
app.use(cors())
app.use(user_router)
app.use(auth_router)
app.use(transaction_router)
app.use(inbox_router)
app.use(wallet_route)
app.use(service_route)
app.listen(PORT, () => {
    console.log(`The server is running in port ${PORT}`);
})
