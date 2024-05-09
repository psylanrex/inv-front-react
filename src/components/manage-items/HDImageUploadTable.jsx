import React, { useState, useCallback } from "react";
import { PencilSquare } from 'react-bootstrap-icons';
import { SearchForm, Pagination, Button, Checkbox, Select } from "@/components/reactdash-ui";

export default function HDImageUploadTable(props) {
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
    const table_title = { id: "Item Code", name: "Name", approved: "Approved HD Images", action: "Action" }
    const data_table = [
        { id: '25', code: 'inv21', name: "John doe", img: "/img/avatar/avatar8.png", url: "/", approved: "Processing", currency: "$" },
        { id: '24', code: 'inv22', name: "John doe", img: "/img/avatar/avatar7.png", url: "/", approved: "Processing", currency: "$" },
        { id: '23', code: 'inv23', name: "John doe", img: "/img/avatar/avatar6.png", url: "/", approved: "Complete", currency: "$" },
        { id: '22', code: 'inv24', name: "John doe", img: "/img/avatar/avatar5.png", url: "/", approved: "Complete", currency: "$" },
        { id: '21', code: 'inv25', name: "John doe", img: "/img/avatar/avatar4.png", url: "/", approved: "Shipped", currency: "$" },
        { id: '20', code: 'inv26', name: "John doe", img: "/img/avatar/avatar3.png", url: "/", approved: "Shipped", currency: "$" },
        { id: '19', code: 'inv27', name: "John doe", img: "/img/avatar/avatar2.png", url: "/", approved: "Canceled", currency: "$" },
        { id: '18', code: 'inv28', name: "John doe", img: "/img/avatar/avatar2.png", url: "/", approved: "Canceled", currency: "$" },
        { id: '17', code: 'inv29', name: "John doe", img: "/img/avatar/avatar8.png", url: "/", approved: "Pending", currency: "$" },
        { id: '15', code: 'inv30', name: "John doe", img: "/img/avatar/avatar7.png", url: "/", approved: "Complete", currency: "$" },
        { id: '14', code: 'inv31', name: "John doe", img: "/img/avatar/avatar6.png", url: "/", approved: "Complete", currency: "$" },
        { id: '13', code: 'inv32', name: "John doe", img: "/img/avatar/avatar5.png", url: "/", approved: "Complete", currency: "$" },
        { id: '12', code: 'inv33', name: "John doe", img: "/img/avatar/avatar4.png", url: "/", approved: "Complete", currency: "$" },
        { id: '11', code: 'inv34', name: "John doe", img: "/img/avatar/avatar3.png", url: "/", approved: "Complete", currency: "$" },
        { id: '10', code: 'inv35', name: "John doe", img: "/img/avatar/avatar2.png", url: "/", approved: "Complete", currency: "$" }
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
            <div className="md:flex md:justify-between mb-3">
                <div className="flex gap-1">
                    <form>
                        <div className="flex">
                            <Select
                                className="items-center !mb-0"
                                required
                                layout="horizontal"
                                name="filter"
                                id="filter"
                                label="Filter"
                                selectClassName="rounded-r-none"
                                placeholder="Select a filter"
                                options={[{ "value": "missing", "title": "Missing HD Images" }, { "value": "rejected", "title": "Rejected" }, { "value": "itemcode", "title": "Item Code" }]}
                            />
                            <Button className="rounded-l-none">Submit</Button>
                        </div>
                    </form>
                </div>
                <div>
                    {/* Search Form */}
                    <SearchForm className="!mx-0" label="Item Code" />
                </div>
            </div>

            <div className="overflow-auto">
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
                                {table_title.name}
                            </th>
                            <th>
                                {table_title.approved}
                            </th>
                            <th>
                                {table_title.action}
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {currentData.map((order, id) => {
                            const bg_color = order.approved === "Complete" ? "text-green-700 bg-green-100" : order.approved === "Processing" ? "text-yellow-700 bg-yellow-100" : order.approved === "Cancelled" ? "text-red-700 bg-red-100" : order.approved === "Shipped" ? "text-indigo-700 bg-indigo-100" : order.approved === "Pending" ? "text-cyan-700 bg-cyan-100" : order.approved === "Cancelled" ? "text-gray-700 bg-gray-100" : "text-pink-700 bg-pink-100";
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
                                        <div className="leading-5">INV{order.id}</div>
                                    </td>
                                    <td>
                                        <div className="leading-5">{order.name}</div>
                                    </td>
                                    <td>
                                        <div className={`text-sm px-2 py-1 font-semibold leading-tight text-center rounded-full ${bg_color}`}>{order.approved}</div>
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
            </div>
            <Pagination
                totalData={total_data}
                perPage={data_per_page}
                className="mt-8"
                onPageChanged={onPageChanged}
                currentPage={currentPage} />
        </div>
    );
}
