import express from "express";
import { config } from "dotenv";
import { GetSalesControler } from "./controllers/getSales/getSales";
import { MongoGetSalesRepository } from "./repositories/getSales/mongoGetSales";
import { MongoClient } from "./database/mongo";




const main = async () => {

    config();
    const port = process.env.PORT || 8000;
    const app = express();
    await MongoClient.connect()

    app.get('/sales', async (req, res) => {
        const mongoGetSalesRepository = new MongoGetSalesRepository()
        const getSalesController = new GetSalesControler(mongoGetSalesRepository)

        const { body, statusCode } = await getSalesController.handle()

        res.send(body).status(statusCode)

    })

    app.listen(port, () => {
        console.log(` listening on ${port}`)
    })

}

main();