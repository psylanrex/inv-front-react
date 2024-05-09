import React, { useState, useCallback } from "react";
import { PencilSquare } from 'react-bootstrap-icons';
import { SearchForm, Pagination, Button, Checkbox } from "@/components/reactdash-ui";

export const PendingInvoiceTable = (props) => {
    // data text
    const action_text = {
        add: "Add New",
        status: "Status",
        complete: "Complete",
        processing: "Processing",
        shipped: "Shipped",
        cancelled: "Cancelled",
        pending: "Pending",
        refund: "Refund",
        apply: "Apply"
    }
    // data table
    const table_title = { id: "Invoice ID", code: 'Invoice #', date: "Date Created", po: 'PO #', status: "Status", action: "Action" }
    const data_table = [
        { id: '25', code: 'inv21', date: "27/05/2022", po: 'po21', img: "/img/avatar/avatar8.png", url: "/", status: "Processing" },
        { id: '24', code: 'inv22', date: "27/05/2022", po: 'po22', img: "/img/avatar/avatar7.png", url: "/", status: "Processing" },
        { id: '23', code: 'inv23', date: "27/05/2022", po: 'po23', img: "/img/avatar/avatar6.png", url: "/", status: "Complete", },
        { id: '22', code: 'inv24', date: "26/05/2022", po: 'po24', img: "/img/avatar/avatar5.png", url: "/", status: "Complete", },
        { id: '21', code: 'inv25', date: "26/05/2022", po: 'po25', img: "/img/avatar/avatar4.png", url: "/", status: "Shipped", },
        { id: '20', code: 'inv26', date: "25/05/2022", po: 'po26', img: "/img/avatar/avatar3.png", url: "/", status: "Shipped", },
        { id: '19', code: 'inv27', date: "25/05/2022", po: 'po27', img: "/img/avatar/avatar2.png", url: "/", status: "Canceled", },
        { id: '18', code: 'inv28', date: "24/05/2022", po: 'po28', img: "/img/avatar/avatar2.png", url: "/", status: "Canceled", },
        { id: '17', code: 'inv29', date: "24/05/2022", po: 'po29', img: "/img/avatar/avatar8.png", url: "/", status: "Pending", },
        { id: '15', code: 'inv30', date: "24/05/2022", po: 'po30', img: "/img/avatar/avatar7.png", url: "/", status: "Complete" },
        { id: '14', code: 'inv31', date: "23/05/2022", po: 'po31', img: "/img/avatar/avatar6.png", url: "/", status: "Complete" },
        { id: '13', code: 'inv32', date: "23/05/2022", po: 'po32', img: "/img/avatar/avatar5.png", url: "/", status: "Complete" },
        { id: '12', code: 'inv33', date: "23/05/2022", po: 'po33', img: "/img/avatar/avatar4.png", url: "/", status: "Complete" },
        { id: '11', code: 'inv34', date: "23/05/2022", po: 'po34', img: "/img/avatar/avatar3.png", url: "/", status: "Complete" },
        { id: '10', code: 'inv35', date: "22/05/2022", po: 'po35', img: "/img/avatar/avatar2.png", url: "/", status: "Complete" }
    ]
    // total data & max item per page
    let total_data = data_table.length;
    let data_per_page = 8;
    const latestdata = [...data_table].sort((a, b) => b.id - a.id);

    // pagination
    const [currentPage, setCurrentPage] = useState(1);
    // page changed
    const onPageChanged = useCallback(
        (event, page) => {
            event.preventDefault();
            setCurrentPage(page);
        },
        [setCurrentPage]
    );
    // slice data_table
    const currentData = latestdata.slice(
        (currentPage - 1) * data_per_page,
        (currentPage - 1) * data_per_page + data_per_page
    )
    // Check all
    const [isCheckAll, setIsCheckAll] = useState(false);
    const [isCheck, setIsCheck] = useState([]);
    const handleSelectAll = e => {
        setIsCheckAll(!isCheckAll);
        setIsCheck(currentData.map(li => li.id));
        if (isCheckAll) {
            setIsCheck([]);
        }
    };
    const handleClick = e => {
        const { id, checked } = e.target;
        setIsCheck([...isCheck, id]);
        if (!checked) {
            setIsCheck(isCheck.filter(item => item !== id));
        }
    };

    return (
        <div>
            <div className="md:flex md:justify-end mb-3">
                <div>
                    {/* Search Form */}
                    <SearchForm className="!mx-0" />
                </div>
            </div>

            <table className="table-sorter table-bordered-bottom w-full text-gray-500 dark:text-gray-400 dataTable-table">
                <thead>
                    <tr className="bg-gray-200 dark:bg-gray-900 dark:bg-opacity-40">
                        <th>
                            <Checkbox
                                name="selectAll"
                                id="selectAll"
                                onChange={handleSelectAll}
                                checked={isCheckAll}
                            />
                        </th>
                        <th>
                            {table_title.id}
                        </th>
                        <th>
                            {table_title.code}
                        </th>
                        <th>
                            {table_title.date}
                        </th>
                        <th>
                            {table_title.po}
                        </th>
                        <th>
                            {table_title.status}
                        </th>
                        <th>
                            {table_title.action}
                        </th>
                    </tr>
                </thead>

                <tbody>
                    {currentData.map((order, id) => {
                        const bg_color = order.status === "Complete" ? "text-green-700 bg-green-100" : order.status === "Processing" ? "text-yellow-700 bg-yellow-100" : order.status === "Cancelled" ? "text-red-700 bg-red-100" : order.status === "Shipped" ? "text-indigo-700 bg-indigo-100" : order.status === "Pending" ? "text-cyan-700 bg-cyan-100" : order.status === "Cancelled" ? "text-gray-700 bg-gray-100" : "text-pink-700 bg-pink-100";
                        return (
                            <tr key={id}>
                                <td>
                                    <Checkbox
                                        name={order.code}
                                        id={order.id}
                                        onChange={handleClick}
                                        checked={isCheck.includes(order.id)}
                                    />
                                </td>
                                <td>
                                    <div className="leading-5">{order.id}</div>
                                </td>
                                <td>
                                    <div className="leading-5">{order.code}</div>
                                </td>
                                <td>
                                    <div className="leading-5">{order.date}</div>
                                </td>
                                <td>
                                    <div className="leading-5">{order.po}</div>
                                </td>
                                <td>
                                    <div className={`text-sm px-2 py-1 font-semibold leading-tight text-center rounded-full ${bg_color}`}>{order.status}</div>
                                </td>
                                <td className="text-center">
                                    <a href={order.url}>
                                        <Button color="light" size="small">
                                            <PencilSquare className="inline text-indigo-500" />
                                        </Button>
                                    </a>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <Pagination
                totalData={total_data}
                perPage={data_per_page}
                className="mt-8"
                onPageChanged={onPageChanged}
                currentPage={currentPage} />
        </div>
    );
}

export default PendingInvoiceTable;
