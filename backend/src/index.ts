import express from "express";
import { config } from "dotenv";
import { GetSalesControler } from "./controllers/getSales/getSales";
import { MongoGetSalesRepository } from "./repositories/getSales/mongoGetSales";
import { MongoClient } from "./database/mongo";
import { MongoCreateSaleRepository } from "./repositories/createSales/mongoCreateSales";
import { CreateSaleController } from "./controllers/createSale/createSale";




const main = async () => {

    config();
    const port = process.env.PORT || 8000;
    const app = express();
    app.use(express.json())
    await MongoClient.connect()

    app.get('/sales', async (req, res) => {
        const mongoGetSalesRepository = new MongoGetSalesRepository()
        const getSalesController = new GetSalesControler(mongoGetSalesRepository)

        const { body, statusCode } = await getSalesController.handle()

        res.send(body).status(statusCode)

    })
    app.post('/sales', async (req, res) => {
        const mongoCreateSaleRepository = new MongoCreateSaleRepository();

        const createSaleController = new CreateSaleController(mongoCreateSaleRepository);

        const { body, statusCode } = await createSaleController.handle({ body: req.body });

        res.send(body).status(statusCode)
    })

    app.listen(port, () => {
        console.log(` listening on ${port}`)
    })

}

main();