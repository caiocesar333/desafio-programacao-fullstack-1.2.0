/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect } from "react";

type Props = {
    data: string;
};

const LineSeparator: React.FC<Props> = ({ data }) => {
    const lines = data.split("\n");

    useEffect(() => {
        const salesData: any = [];
        console.log(lines)

        lines.forEach(async (line) => {
            const typeSubstring = line.charAt(0);
            const dateSubString = line.slice(1, 26);
            const productSubstring = line.slice(26, 50);
            const valueSubstring = Number(line.slice(51, 66));
            const sellerNameSubstring = line.slice(66);

            const sale = {
                transactionType: typeSubstring,
                transactionDate: dateSubString,
                productDesc: productSubstring,
                transactionValue: valueSubstring,
                seller: sellerNameSubstring,
            };

            salesData.push(sale);

        });
        try {
            fetch("http://localhost:8000/sales", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(salesData),
            });
        } catch (error) {
            console.log(error);
        }
    }, [data, lines]);

    return <div></div>;
};

export default LineSeparator;