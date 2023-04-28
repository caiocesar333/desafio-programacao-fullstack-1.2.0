import { IGetSalesController, IGetSalesRepository } from "../../getSales/protocols";
import { GetSalesControler } from "../../getSales/getSales";

describe('GetSalesController', () => {
    let getSalesRepository: IGetSalesRepository;
    let getSalesController: IGetSalesController;

    beforeEach(() => {
        getSalesRepository = {
            async getSales() {
                return [];
            }
        };

        getSalesController = new GetSalesControler(getSalesRepository)
    });

    it('should return 200 status code and sales array on success', async () => {
        const sales = [{ id: '1', type: 'Sale', date: '2022-04-28T10:30:00Z', productDesc: 'Example product', value: 25, selleName: 'John Doe' }];

        jest.spyOn(getSalesRepository, 'getSales').mockResolvedValueOnce(sales);

        const response = await getSalesController.handle();

        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual(sales);
    });

    it('should return 500 status code and error message on failure', async () => {
        jest.spyOn(getSalesRepository, 'getSales').mockRejectedValueOnce(new Error('Database connection failed'));

        const response = await getSalesController.handle();

        expect(response.statusCode).toBe(500);
        expect(response.body).toEqual('Something went wrong');
    });
});
