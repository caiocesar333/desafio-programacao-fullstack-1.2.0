import { IGetSalesRepository } from "../../controllers/getSales/protocols";
import { MongoClient } from "../../database/mongo";
import { Sale } from "../../models/sale";

export class MongoGetSalesRepository implements IGetSalesRepository {
    async getSales(): Promise<Sale[]> {
        const sales = await MongoClient.db.collection<Omit<Sale, "id">>('sales').find({}).toArray();


        return sales.map(({ _id, ...rest }) => ({ ...rest, id: _id.toHexString() }))
    }

}