
import * as React from 'react';

type Transaction = {
    type: string;
    date: string;
    productDescription: string;
    value: number;
    sellerName: string;
};

interface Props {
    transactions: Transaction[];
}

function TransactionsTable({ transactions }: Props) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Type of Transaction</th>
                    <th>Date</th>
                    <th>Product Description</th>
                    <th>Value of Transaction</th>
                    <th>Seller Name</th>
                </tr>
            </thead>
            <tbody>
                {transactions.map((transaction) => (
                    <tr key={transaction.date}>
                        <td>{transaction.type}</td>
                        <td>{transaction.date}</td>
                        <td>{transaction.productDescription}</td>
                        <td>{transaction.value}</td>
                        <td>{transaction.sellerName}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
