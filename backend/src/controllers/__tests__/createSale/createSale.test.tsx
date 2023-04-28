import { Sale } from "../../../models/sale";
import { HttpRequest } from "../../protocols";
import { CreateSaleParams, ICreateSaleRepository } from "../../createSale/protocols";
import { CreateSaleController } from "../../createSale/createSale";

describe('CreateSaleController', () => {

    const mockSale = [{
        type: '1',
        date: '122-01-15T19:1:30',
        productDescription: 'CURSO DE BEM-ESTAR',
        value: 12750,
        sellerName: 'JOSE CARLOS'
    },
    {
        type: '2',
        date: '122-01-16T14:13:54',
        productDescription: 'CURSO DE BEM-ESTAR',
        value: 12750,
        sellerName: 'THIAGO OLIVEIRA'
    },
    {
        type: '4',
        date: '122-01-16T14:13:54',
        productDescription: 'CURSO DE BEM-ESTAR',
        value: 4500,
        sellerName: 'THIAGO OLIVEIRA'
    },
    {
        type: '3',
        date: '122-01-16T14:13:54',
        productDescription: 'CURSO DE BEM-ESTAR',
        value: 4500,
        sellerName: 'JOSE CARLOS'
    },
    {
        type: '1',
        date: '122-01-22T08:59:13',
        productDescription: 'DOMINANDO INVESTIMENTOS',
        value: 50000,
        sellerName: 'MARIA CANDIDA'
    },
    {
        type: '1',
        date: '122-02-01T23:35:43',
        productDescription: 'DESENVOLVEDOR FULL STACK',
        value: 155000,
        sellerName: 'ELIANA NOGUEIRA'
    },

    {
        type: '2',
        date: '122-02-03T17:23:37',
        productDescription: 'DESENVOLVEDOR FULL STACK',
        value: 155000,
        sellerName: 'CARLOS BATISTA'
    },

    {
        type: '2',
        date: '122-02-03T1:51:59',
        productDescription: 'DESENVOLVEDOR FULL STACK',
        value: 155000,
        sellerName: 'CAROLINA MACHADO'
    },
    {
        type: '2',
        date: '122-02-04T07:42:12',
        productDescription: 'DESENVOLVEDOR FULL STACK',
        value: 155000,
        sellerName: 'CELSO DE MELO'
    },
    {
        type: '4',
        date: '122-02-03T17:23:37',
        productDescription: 'DESENVOLVEDOR FULL STACK',
        value: 50000,
        sellerName: 'CARLOS BATISTA'
    },
    {
        type: '4',
        date: '122-02-03T1:51:59',
        productDescription: 'DESENVOLVEDOR FULL STACK',
        value: 50000,
        sellerName: 'CAROLINA MACHADO'
    },
    {
        type: '4',
        date: '122-02-04T07:42:12',
        productDescription: 'DESENVOLVEDOR FULL STACK',
        value: 50000,
        sellerName: 'CELSO DE MELO'
    },
    {
        type: '3',
        date: '122-02-03T17:23:37',
        productDescription: 'DESENVOLVEDOR FULL STACK',
        value: 50000,
        sellerName: 'ELIANA NOGUEIRA'
    },
    {
        type: '3',
        date: '122-02-03T1:51:59',
        productDescription: 'DESENVOLVEDOR FULL STACK',
        value: 50000,
        sellerName: 'ELIANA NOGUEIRA'
    },
    {
        type: '3',
        date: '122-02-04T07:42:12',
        productDescription: 'DESENVOLVEDOR FULL STACK',
        value: 50000,
        sellerName: 'ELIANA NOGUEIRA'
    },
    {
        type: '1',
        date: '122-02-19T05:33:07',
        productDescription: 'DOMINANDO INVESTIMENTOS',
        value: 50000,
        sellerName: 'MARIA CANDIDA'
    },
    {
        type: '1',
        date: '122-03-01T02:09:54',
        productDescription: 'CURSO DE BEM-ESTAR',
        value: 12750,
        sellerName: 'JOSE CARLOS'
    },
    {
        type: '1',
        date: '122-03-03T09:07:35',
        productDescription: 'DESENVOLVEDOR FULL STACK',
        value: 155000,
        sellerName: 'ELIANA NOGUEIRA'
    },
    {
        type: '1',
        date: '122-03-03T13:12:16',
        productDescription: 'DESENVOLVEDOR FULL STACK',
        value: 155000,
        sellerName: 'ELIANA NOGUEIRA'
    },
    ];

    mockSale.map((transactions, index) => {

        const mockSaleTransaction: Sale = {
            id: undefined,
            type: mockSale[index].type,
            date: mockSale[index].date,
            productDesc: mockSale[index].productDescription,
            value: mockSale[index].value,
            selleName: mockSale[index].sellerName,
        };
        const mockRequest: HttpRequest<CreateSaleParams> = {
            body: {
                type: mockSale[index].type,
                date: mockSale[index].date,
                productDesc: mockSale[index].productDescription,
                value: mockSale[index].value,
                selleName: mockSale[index].sellerName,
            }
        };

        test('should call createSaleRepository with correct params', async () => {
            const createSaleController = new CreateSaleController(mockCreateSaleRepository);
            await createSaleController.handle(mockRequest);
            expect(mockCreateSaleRepository.createSale).toHaveBeenCalledWith(mockSaleTransaction);
        });


        const mockResponse = {
            statusCode: 201,
            body: undefined
        };
        const mockCreateSaleRepository: ICreateSaleRepository = {
            createSale: jest.fn().mockResolvedValueOnce(mockSale)
        };



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

    })
});