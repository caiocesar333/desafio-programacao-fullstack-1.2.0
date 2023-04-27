import { ObjectId } from "mongodb";
import { IDeleteSaleRepository } from "../../controllers/deleteSale/protocols";
import { MongoClient } from "../../database/mongo";
import { Sale } from "../../models/sale";

export class MongoDeleteSaleRepository implements IDeleteSaleRepository {
    async deleteAllSales(): Promise<number> {
        const { deletedCount } = await MongoClient.db.collection("sales").deleteMany({});
        return deletedCount || 0;
    }
    async deleteSale(id: string): Promise<Sale> {
        const sale = await MongoClient.db
            .collection<Omit<Sale, "id">>('sales')
            .findOne({ _id: new ObjectId(id) });


        if (!sale) {
            throw new Error("User not found")
        }

        const { deletedCount } = await MongoClient.db.collection('sales').deleteOne({ _id: new ObjectId(id) });

        if (!deletedCount) {
            throw new Error("User not deleted")
        }


        const { _id, ...rest } = sale
        return { id: _id.toHexString(), ...rest }
    }
}

