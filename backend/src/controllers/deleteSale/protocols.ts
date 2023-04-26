import { Sale } from "../../models/sale";
import { HttpRequest, HttpResponse } from "../protocols";

export interface IDeleteSaleController {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    handle(httpRequest: HttpRequest<any>): Promise<HttpResponse<Sale>>
}


export interface IDeleteSaleRepository {
    deleteSale(id: string): Promise<Sale>
}