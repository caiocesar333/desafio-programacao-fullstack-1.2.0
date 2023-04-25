import { IGetSalesRepository } from "../../controllers/getSales/protocols";
import { MongoClient } from "../../database/mongo";
import { Sale } from "../../models/sale";

export class MongoGetSalesRepository implements IGetSalesRepository {
    async getSales(): Promise<Sale[]> {
        const sales = await MongoClient.db.collection<Sale>('sales').find({}).toArray();


        return sales
    }

}