import { MongoClient } from "../../database/mongo";
import { Sale } from "../../models/sale";
import { CreateSaleParams, ICreateSaleRepository } from "./protocols";

export class MongoCreateSale implements ICreateSaleRepository {
    async createSale(params: CreateSaleParams): Promise<Sale> {
        const { insertedId } = await MongoClient.db.collection('sales').insertOne(params)


        const sale = await MongoClient.db.collection<Omit<Sale, 'id'>>('sales').findOne({ _id: insertedId })

        if (!sale) {
            throw new Error('Sale was not created')
        }

        const { _id, ...rest } = sale

        return { id: _id.toHexString(), ...rest }
    }
}