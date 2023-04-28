import { Sale } from "../../../models/sale";
import { HttpRequest } from "../../protocols";
import { CreateSaleParams, ICreateSaleRepository } from "../../createSale/protocols";
import { CreateSaleController } from "../../createSale/createSale";

describe('CreateSaleController', () => {
    const mockSale: Sale = {
        id: undefined,
        type: 'Sale',
        date: '2022-04-28T10:30:00Z',
        productDesc: 'Example product',
        value: 25.0,
        selleName: 'John Doe',
    };
    const mockRequest: HttpRequest<CreateSaleParams> = {
        body: {
            type: mockSale.type,
            date: mockSale.date,
            productDesc: mockSale.productDesc,
            value: mockSale.value,
            selleName: mockSale.selleName,
        }
    };
    const mockResponse = {
        statusCode: 201,
        body: undefined
    };
    const mockCreateSaleRepository: ICreateSaleRepository = {
        createSale: jest.fn().mockResolvedValueOnce(mockSale)
    };

    test('should call createSaleRepository with correct params', async () => {
        const createSaleController = new CreateSaleController(mockCreateSaleRepository);
        await createSaleController.handle(mockRequest);
        expect(mockCreateSaleRepository.createSale).toHaveBeenCalledWith(mockSale);
    });

    test('should return a Sale object with status code 201 if creation succeeds', async () => {
        const createSaleController = new CreateSaleController(mockCreateSaleRepository);
        const response = await createSaleController.handle(mockRequest);
        expect(response).toMatchObject(mockResponse);
    });

    test('should return an error message with status code 500 if creation fails', async () => {
        const mockError = new Error('Something went wrong');
        const mockCreateSaleRepository: ICreateSaleRepository = {
            createSale: jest.fn().mockRejectedValueOnce(mockError)
        };
        const createSaleController = new CreateSaleController(mockCreateSaleRepository);
        const response = await createSaleController.handle(mockRequest);
        expect(response).toEqual({
            statusCode: 500,
            body: 'Something went wrong'
        });
    });
});