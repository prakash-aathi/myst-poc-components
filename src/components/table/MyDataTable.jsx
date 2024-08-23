import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Table from 'react-table-lite';

const MyDataTable = ({
    data,
    headers,
    sortBy,
    showActions,
    actionTypes,
    customRenderActions,
    customHeaders
}) => {
    const [serverData, setServerData] = useState([]);

    useEffect(() => {
        if (data) {
            setServerData(data);
        } else {
            makeApiCall();
        }
    }, [data]);

    const makeApiCall = () => {
        const HARD_CODED_DATA = [
            { id: 1, part_no: "12345678", part_qty: "2", price: '120.0' },
            { id: 2, part_no: "10202000", part_qty: "2", price: '130.0' },
            { id: 3, part_no: "03505051", part_qty: "3", price: '160.0' },
            { id: 4, part_no: "87902350", part_qty: "5", price: '150.0' },
            { id: 5, part_no: "78411202", part_qty: "2", price: '140.0' },
            { id: 6, part_no: "78945100", part_qty: "1", price: '180.0' },
        ];
        setServerData(HARD_CODED_DATA);
    };

    return (
        <Table
            data={serverData}
            headers={headers || ["id", "part_no", "part_qty", "price"]}
            sortBy={sortBy || ["part_no", "part_qty", "price"]}
            showActions={showActions}
            customRenderActions={customRenderActions}
            customHeaders={customHeaders || {
                "id": "Id",
                "part_no": "Part No.",
                "part_qty": "Part Qty",
                "price": "Price"
            }}
        />
    );
}

export default MyDataTable