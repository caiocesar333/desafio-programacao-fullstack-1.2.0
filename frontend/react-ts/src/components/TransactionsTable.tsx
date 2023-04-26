

export default TransactionsTable

type Transaction = {
    type: string;
    date: string;
    productDescription: string;
    value: number;
    sellerName: string;
};

function TransactionsTable({ type, date, productDescription, value, sellerName }: Transaction) {

    return (

        <tbody>
            <tr
                className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                <td className="whitespace-nowrap px-6 py-4 font-medium">{type}</td>
                <td className="whitespace-nowrap px-6 py-4">{date?.slice(0, 10).replaceAll("-", "/") + " " + date?.slice(12, 19) + " " + date?.slice(21, 25)}</td>
                <td className="whitespace-nowrap px-6 py-4">{productDescription}</td>
                <td className="whitespace-nowrap px-6 py-4">{value}</td>
                <td className="whitespace-nowrap px-6 py-4">{sellerName}</td>
            </tr>

        </tbody>
    )

}

