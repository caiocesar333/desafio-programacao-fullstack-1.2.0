import { Sale } from "../../models/sale";
import { HttpRequest, HttpResponse } from "../protocols";

export interface ICreateSaleController {
    handle(httpRequest: HttpRequest<CreateSaleParams>): Promise<HttpResponse<Sale>>
}

export interface CreateSaleParams {
    type: string;
    date: string;
    productDesc: string;
    value: number;
    selleName: string;
}

export interface ICreateSaleRepository {
    createSale(params: CreateSaleParams): Promise<Sale>
}