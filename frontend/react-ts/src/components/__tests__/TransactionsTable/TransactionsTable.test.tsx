import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import TransactionsTable from '../../TransactionsTable';

describe("TransactionsTable", () => {

    const transactions = [{
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

    const dataTest = [transactions]
    test('should render a transaction row with correct data', () => {


        dataTest.map((item) => {
            for (let index = 0; index < item.length; index++) {
                const { queryAllByText } = render(
                    <table>
                        <TransactionsTable
                            type={item[index].type}
                            date={item[index].date}
                            value={item[index].value}
                            sellerName={item[index].sellerName}
                            productDescription={item[index].productDescription} />
                    </table>);

                expect(queryAllByText(item[index].type)).toEqual(expect.anything());
                expect(queryAllByText(item[index].date)).toEqual(expect.anything());
                expect(queryAllByText(item[index].value)).toEqual(expect.anything());
                expect(queryAllByText(item[index].sellerName)).toEqual(expect.anything());
                expect(queryAllByText(item[index].productDescription)).toEqual(expect.anything());

                console.log(index)
            }

        });
    });

})