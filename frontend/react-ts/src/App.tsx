
import * as React from 'react';
import { useEffect, useState } from 'react';
import TransactionsTable from './components/TransactionsTable';
import ParseData from './scripts/ParseData';

const App = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [data, setData] = useState<any[]>([]);
    const [fileContent, setFileContent] = useState('');

    const [producerAmount, setProducerAmount] = useState(0)
    const [afilliateAmount, setAffiliateAmount] = useState(0)


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
        let producerTotal = 0;
        let affiliateTotal = 0;

        {
            data.filter((item) => item.sale).map((item) => {
                if (item.sale[0].transactionType == "1" || item.type == "4") {
                    producerTotal += item.sale[0].transactionValue;
                } else if (item.sale[0].transactionType == "2") {
                    affiliateTotal += item.sale[0].transactionValue;
                } else if (item.sale[0].transactionType == "3") {
                    producerTotal -= item.sale[0].transactionValue;
                }
            })
        }


        setProducerAmount(producerTotal);
        setAffiliateAmount(affiliateTotal);

    }, [data])

    return (
        <div className='flex'>
            <div className='flex items-center justify-center flex-col w-full  h-full gap-11 '>
                <div className="flex flex-col">
                    <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                            <div className="overflow-hidden">
                                <table className="min-w-full text-left text-sm font-light border mt-4">
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
            <div className='flex flex-col gap-7'>
                <div className='w-full border h-fit ml-5 mt-6'>
                    <label className='ml-3 font-bold'>In cents</label>
                    <table>
                        <thead>
                            <tr>
                                <th className='px-3 py-3 font-semibold'>Affiliate Amount:</th>
                                <th className='px-3 py-3 font-semibold'>Producer Amount:</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='px-3 py-3'>{producerAmount}</td>
                                <td className='px-3 py-3'>{afilliateAmount}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='ml-5 gap-3'>
                    <label className='ml-3 font-bold'> Choose a file to be imported</label>
                    <form >
                        <input className='ml-3' type="file" onChange={handleFileChange} />
                        {
                            fileContent ? <ParseData data={fileContent} /> : <></>
                        }
                    </form>
                </div>
            </div>
        </div >

    );
};

export default App
