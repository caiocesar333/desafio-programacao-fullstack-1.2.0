/* eslint-disable react-hooks/exhaustive-deps */

import * as React from 'react';
import { useEffect, useState } from 'react';
import TransactionsTable from './components/TransactionsTable';
import ParseData from './scripts/ParseData';
import ErrorComponent from './components/ErrorComponent';

const App = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [data, setData] = useState<any[]>([]);
    const [fileContent, setFileContent] = useState('');
    const [fileIsEmpty, setFileIsEmpty] = useState(false);
    const [producerTotal, setProducerTotal] = useState(0)
    const [affiliateTotal, setAffiliateTotal] = useState(0)

    const [producerAmount, setProducerAmount] = useState(0)
    const [afilliateAmount, setAffiliateAmount] = useState(0)

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [dataValue, setDataValue] = useState<any[]>([])

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault()
        const file = event.target.files && event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                if (e.target?.result) {
                    setFileContent(e.target?.result as string);
                    window.location.reload();
                }
                else {
                    setFileIsEmpty(true)
                }
            };
            reader.readAsText(file);
        }
    };

    useEffect(() => {
        fetch('http://localhost:8000/sales')
            .then((res) => res.json())
            .then((data) => {
                setData(data);
                if (data.length > 0) {
                    const evenDataValues = data?.filter((_d, i) => i % 2 === 0);
                    setDataValue(evenDataValues);
                    console.log(dataValue)
                } else {
                    setDataValue([])
                }
            });
    }, [])

    useEffect(() => {

        if (dataValue.length > 0) {
            dataValue.forEach((item) => {
                for (let index = 0; index < item.sale.length; index++) {
                    if (item.sale[index].transactionType === "1" || item.sale[index].transactionType === "4") {
                        setProducerTotal(prevProducerTotal => prevProducerTotal + item.sale[index].transactionValue);
                    } else if (item.sale[index].transactionType === "2") {
                        setAffiliateTotal(prevAffiliateTotal => prevAffiliateTotal + item.sale[index].transactionValue);
                    } else if (item.sale[index].transactionType === "3") {
                        setProducerTotal(prevProducerTotal => prevProducerTotal - item.sale[index].transactionValue);
                    }
                }
            });
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
                                {
                                    fileIsEmpty ? <ErrorComponent message='The file that you provided is empty' /> : <></>
                                }
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

                                    {dataValue ?
                                        dataValue.map((item) => {
                                            const sales: React.ReactNode[] = [];
                                            for (let index = 0; index < item.sale.length; index++) {
                                                sales.push(
                                                    <TransactionsTable
                                                        key={index}
                                                        type={item.sale[index].transactionType}
                                                        date={item.sale[index].transactionDate}
                                                        productDescription={item.sale[index].productDesc}
                                                        value={item.sale[index].transactionValue}
                                                        sellerName={item.sale[index].seller}
                                                    />
                                                );
                                            }
                                            return <>{sales}</>;
                                        })
                                        : <></>}
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
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
}

export default App
