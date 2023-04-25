import express from "express";
import { config } from "dotenv";
import { GetSalesControler } from "./controllers/getSales/getSales";
import { MongoGetSalesRepository } from "./repositories/getSales/mongoGetSales";

config();
const app = express();

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(` listening on ${port}`)
})

app.get('/sales', async (req, res) => {
    const mongoGetSalesRepository = new MongoGetSalesRepository()
    const getSalesController = new GetSalesControler(mongoGetSalesRepository)

    const { body, statusCode } = await getSalesController.handle()

    res.send(body).status(statusCode)

})