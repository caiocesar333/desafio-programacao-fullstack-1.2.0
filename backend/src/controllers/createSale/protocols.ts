import { Sale } from "../../models/sale";

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