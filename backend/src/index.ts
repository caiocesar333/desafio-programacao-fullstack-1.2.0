import express from "express";
import { config } from "dotenv";
import { GetSalesControler } from "./controllers/getSales/getSales";
import { MongoGetSalesRepository } from "./repositories/getSales/mongoGetSales";
import { MongoClient } from "./database/mongo";
import { MongoCreateSaleRepository } from "./repositories/createSales/mongoCreateSales";
import { CreateSaleController } from "./controllers/createSale/createSale";
import cors from "cors"
import { MongoDeleteSaleRepository } from "./repositories/deleteSales/mongoDeleteSales";
import { DeleteSaleController } from "./controllers/deleteSale/deleteSale";

const main = async () => {

    config();
    const port = process.env.PORT || 8000;
    const app = express();
    app.use(express.json())
    app.use(cors({ origin: ['http://localhost:8000', 'http://127.0.0.1:5173'] }));
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
        res.send(body).status(statusCode);
    });

    app.delete("/sales/:id", async (req, res) => {
        const mongoDeleteSaleRepository = new MongoDeleteSaleRepository()

        const deleteSaleController = new DeleteSaleController(mongoDeleteSaleRepository);

        const { body, statusCode } = await deleteSaleController.handle({
            params: req.params
        })
        res.send(body).status(statusCode);
    })

    app.listen(port, () => {
        console.log(` listening on ${port}`)
    })

}

main();