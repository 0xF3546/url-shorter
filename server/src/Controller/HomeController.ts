import { Router } from "express";
import { database } from "../index.js";

const getUrl = async (identifier: string) => {
    const result: any = await database.query("SELECT url FROM urls WHERE identifier = ?", identifier);
    if (result.length === 0) {
        return null;
    }
    return result[0].url;
};

const router: Router = Router();

router.get('/url/:identifier', async (req, res) => {
    const url = await getUrl(req.params.identifier);
    if (url) {
       return res.json({url});
    }
    return res.status(404).json({message: 'URL not found'});
});

export const HomeRouter: Router = router;
