import { IGetSalesRepository } from "../../controllers/getSales/protocols";
import { Sale } from "../../models/sale";

export class MongoGetSalesRepository implements IGetSalesRepository {
    async getSales(): Promise<Sale[]> {
        return [{
            type: "string",
            date: "string",
            productDesc: "string",
            value: 1,
            selleName: "string",
        },]
    }

}