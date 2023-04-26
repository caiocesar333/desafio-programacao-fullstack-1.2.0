import { Sale } from "../../models/sale";
import { HttpRequest, HttpResponse } from "../protocols";
import { IDeleteSaleController, IDeleteSaleRepository } from "./protocols";

export class DeleteSaleController implements IDeleteSaleController {
    constructor(private readonly deleteSaleRepository: IDeleteSaleRepository) { }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async handle(httpRequest: HttpRequest<any>): Promise<HttpResponse<Sale>> {
        try {
            const id = httpRequest?.params?.id
            if (!id) {
                return {
                    statusCode: 400,
                    body: "Missing Id",
                }
            }
            const sale = await this.deleteSaleRepository.deleteSale(id)
            return {
                statusCode: 200,
                body: sale,
            }
        } catch (error) {
            return {
                statusCode: 500,
                body: "Something went wrong",
            }
        }
    }


}