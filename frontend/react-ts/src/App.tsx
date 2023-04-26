
import * as React from 'react';
import { useEffect, useState } from 'react';
import TransactionsTable from './components/TransactionsTable';
import ParseData from './scripts/ParseData';

const App = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [data, setData] = useState<any[]>([]);

    const [fileContent, setFileContent] = useState('');

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault()
        const file = event.target.files && event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setFileContent(e.target?.result as string);
            };
            reader.readAsText(file);
        }
    };

    useEffect(() => {
        fetch('http://localhost:8000/sales')
            .then((res) => res.json())
            .then((data) => setData(data))

    }, [])

    return (
        <div className='flex items-center justify-center flex-col w-full  h-full gap-11 '>
            <div className="flex flex-col">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                        <div className="overflow-hidden">
                            <table className="min-w-full text-left text-sm font-light">
                                <thead className="border-b font-medium dark:border-neutral-500">
                                    <tr>
                                        <th scope="col" className="px-6 py-4">Type</th>
                                        <th scope="col" className="px-6 py-4">Date</th>
                                        <th scope="col" className="px-6 py-4">Product Description</th>
                                        <th scope="col" className="px-6 py-4">Value </th>
                                        <th scope="col" className="px-6 py-4">Seller </th>
                                    </tr>
                                </thead>
                                {data.filter((item) => item.sale).map((item, index) => {
                                    console.log(item);
                                    return <TransactionsTable
                                        key={index}
                                        date={item.sale[0].transactionDate}
                                        sellerName={item.sale[0].seller}
                                        productDescription={item.sale[0].productDesc}
                                        value={item.sale[0].transactionValue}
                                        type={item.sale[0].transactionType}
                                    />
                                })}</table>
                        </div>
                    </div>
                </div>
            </div>

            <form className='mb-10'>
                <input type="file" onChange={handleFileChange} />
                {
                    fileContent ? <ParseData data={fileContent} /> : <></>
                }
            </form>
        </div>

    );
};

export default App
