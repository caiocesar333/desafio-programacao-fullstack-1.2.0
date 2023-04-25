import { Sale } from "../../models/sale";
import { HttpRequest, HttpResponse } from "../protocols";
import { CreateSaleParams, ICreateSaleController, ICreateSaleRepository } from "./protocols";

export class CreateSaleController implements ICreateSaleController {
    constructor(private readonly createSaleRepository: ICreateSaleRepository) { }

    async handle(httpRequest: HttpRequest<CreateSaleParams>): Promise<HttpResponse<Sale>> {

        try {
            if (!httpRequest.body) {
                return {
                    statusCode: 400,
                    body: "Please specify a body"
                }
            }
            const sale = await this.createSaleRepository.createSale(httpRequest.body);
            return {
                statusCode: 201,
                body: sale
            }
        } catch (error) {
            return {
                statusCode: 500,
                body: "Something went wrong"
            }
        }
    }

}