import { Sale } from "../../models/sale";
import { HttpResponse } from "../protocols";

export interface IGetSalesController {
    handle(): Promise<HttpResponse<Sale[]>>;
}

export interface IGetSalesRepository {
    getSales(): Promise<Sale[]>
}
