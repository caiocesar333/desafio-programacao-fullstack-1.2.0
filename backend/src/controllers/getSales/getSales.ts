import { IGetSalesController, IGetSalesRepository } from "./protocols";

export class GetSalesControler implements IGetSalesController {
    constructor(private readonly getSalesRepository: IGetSalesRepository) { }

    async handle() {
        try {
            const sales = await this.getSalesRepository.getSales();
            return {
                statusCode: 200,
                body: sales,
            }
        } catch (error) {
            return {
                statusCode: 500,
                body: "Something went wrong",
            }
        }

    }

}
