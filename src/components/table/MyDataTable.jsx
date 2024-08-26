import { useEffect, useState } from 'react';
import Table from 'react-table-lite';

const MyDataTable = ({
    data,
    headers,
    sortBy,
    customRenderCell,
    customHeaders,
    search,
    CustomSearchForm,
    onSearch 
}) => {
    const [serverData, setServerData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        setServerData(data);
        setFilteredData(data);
    }, [data]);

    const handleSearch = (query) => {
        if (query) {
            const lowerCaseQuery = query.toLowerCase();
            const filtered = serverData.filter(row => {
                return headers.some(header => 
                    String(row[header]).toLowerCase().includes(lowerCaseQuery)
                );
            });
            setFilteredData(filtered);
        } else {
            setFilteredData(serverData);
        }
    };

    useEffect(() => {
        if (onSearch) {
            onSearch(handleSearch);
        }
    }, [serverData]);

    return (
        <div>
            {CustomSearchForm}
            <Table
                data={filteredData}
                headers={headers}
                sortBy={sortBy}
                customHeaders={customHeaders}
                customRenderCell={customRenderCell}
                searchable={search}
                noDataMessage={"No data found"}
                tableClass=""
                headerClass=""
                cellClass=""
            />
        </div>
    );
}

export default MyDataTable;