import { Router } from "express"
import { ALL_SERVICES, SERVICE_CATEGORIES, SERVICE_CATEGORY_BILLERS } from "../../constants/services.js";
import { getBillers, getActiveServiceCategories, getServices } from "../../model/db/servicesCategories.js";

const service_route = Router();

service_route.post(ALL_SERVICES, async (req, res) => {
    try {
        const result = await getServices(req.body);
        res.send(result)
    } catch (err) {
        console.log(err)
    }
})

service_route.post(SERVICE_CATEGORIES, async (req, res) => {
    try {
        const result = await getActiveServiceCategories(req.body);
        res.send(result)
    } catch (err) {
        console.log(err)
    }
})

service_route.post(SERVICE_CATEGORY_BILLERS, async (req, res) => {
    try {
        const result = await getBillers(req.body);
        res.send(result)
    } catch (err) {
        console.log(err)
    }
})


export default service_route;