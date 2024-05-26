import { useState, useCallback } from "react";
import { PencilSquare } from "react-bootstrap-icons";
import {
  SearchForm,
  Pagination,
  Button,
  Checkbox,
} from "@/components/reactdash-ui";

export default function OpenOrderTable(props) {
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
    apply: "Apply",
  };
  // data table
  const table_title = {
    id: "PO #",
    date: "PO Date",
    received: "Received",
    total: "Total",
    status: "Order Status",
    quantity: "Quantity",
    action: "Action",
  };
  const data_table = [
    {
      id: "25",
      code: "inv21",
      date: "27/05/2022",
      received: "29/05/2022",
      img: "/img/avatar/avatar8.png",
      url: "/",
      total: 365,
      status: "Processing",
      quantity: 165,
    },
    {
      id: "24",
      code: "inv22",
      date: "27/05/2022",
      received: "29/05/2022",
      img: "/img/avatar/avatar7.png",
      url: "/",
      total: 365,
      status: "Processing",
      quantity: 165,
    },
    {
      id: "23",
      code: "inv23",
      date: "27/05/2022",
      received: "29/05/2022",
      img: "/img/avatar/avatar6.png",
      url: "/",
      total: 365,
      status: "Complete",
      quantity: 165,
    },
    {
      id: "22",
      code: "inv24",
      date: "26/05/2022",
      received: "28/05/2022",
      img: "/img/avatar/avatar5.png",
      url: "/",
      total: 365,
      status: "Complete",
      quantity: 165,
    },
    {
      id: "21",
      code: "inv25",
      date: "26/05/2022",
      received: "28/05/2022",
      img: "/img/avatar/avatar4.png",
      url: "/",
      total: 135,
      status: "Shipped",
      quantity: 35,
    },
    {
      id: "20",
      code: "inv26",
      date: "25/05/2022",
      received: "28/05/2022",
      img: "/img/avatar/avatar3.png",
      url: "/",
      total: 135,
      status: "Shipped",
      quantity: 35,
    },
    {
      id: "19",
      code: "inv27",
      date: "25/05/2022",
      received: "28/05/2022",
      img: "/img/avatar/avatar2.png",
      url: "/",
      total: 135,
      status: "Canceled",
      quantity: 35,
    },
    {
      id: "18",
      code: "inv28",
      date: "24/05/2022",
      received: "26/05/2022",
      img: "/img/avatar/avatar2.png",
      url: "/",
      total: 135,
      status: "Canceled",
      quantity: 35,
    },
    {
      id: "17",
      code: "inv29",
      date: "24/05/2022",
      received: "26/05/2022",
      img: "/img/avatar/avatar8.png",
      url: "/",
      total: 135,
      status: "Pending",
      quantity: 35,
    },
    {
      id: "15",
      code: "inv30",
      date: "24/05/2022",
      received: "26/05/2022",
      img: "/img/avatar/avatar7.png",
      url: "/",
      total: 135,
      status: "Complete",
      quantity: 35,
    },
    {
      id: "14",
      code: "inv31",
      date: "23/05/2022",
      received: "25/05/2022",
      img: "/img/avatar/avatar6.png",
      url: "/",
      total: 135,
      status: "Complete",
      quantity: 35,
    },
    {
      id: "13",
      code: "inv32",
      date: "23/05/2022",
      received: "25/05/2022",
      img: "/img/avatar/avatar5.png",
      url: "/",
      total: 135,
      status: "Complete",
      quantity: 35,
    },
    {
      id: "12",
      code: "inv33",
      date: "23/05/2022",
      received: "25/05/2022",
      img: "/img/avatar/avatar4.png",
      url: "/",
      total: 135,
      status: "Complete",
      quantity: 35,
    },
    {
      id: "11",
      code: "inv34",
      date: "23/05/2022",
      received: "25/05/2022",
      img: "/img/avatar/avatar3.png",
      url: "/",
      total: 265,
      status: "Complete",
      quantity: 165,
    },
    {
      id: "10",
      code: "inv35",
      date: "22/05/2022",
      received: "24/05/2022",
      img: "/img/avatar/avatar2.png",
      url: "/",
      total: 265,
      status: "Complete",
      quantity: 165,
    },
  ];
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
  );
  // Check all
  const [isCheckAll, setIsCheckAll] = useState(false);
  const [isCheck, setIsCheck] = useState([]);
  const handleSelectAll = (e) => {
    setIsCheckAll(!isCheckAll);
    setIsCheck(currentData.map((li) => li.id));
    if (isCheckAll) {
      setIsCheck([]);
    }
  };
  const handleClick = (e) => {
    const { id, checked } = e.target;
    setIsCheck([...isCheck, id]);
    if (!checked) {
      setIsCheck(isCheck.filter((item) => item !== id));
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
            <th>{table_title.id}</th>
            <th>{table_title.date}</th>
            <th>{table_title.quantity}</th>
            <th>{table_title.received}</th>
            <th>{table_title.total}</th>
            <th>{table_title.status}</th>
            <th>{table_title.action}</th>
          </tr>
        </thead>

        <tbody>
          {currentData.map((order, id) => {
            const bg_color =
              order.status === "Complete"
                ? "text-green-700 bg-green-100"
                : order.status === "Processing"
                ? "text-yellow-700 bg-yellow-100"
                : order.status === "Cancelled"
                ? "text-red-700 bg-red-100"
                : order.status === "Shipped"
                ? "text-indigo-700 bg-indigo-100"
                : order.status === "Pending"
                ? "text-cyan-700 bg-cyan-100"
                : order.status === "Cancelled"
                ? "text-gray-700 bg-gray-100"
                : "text-pink-700 bg-pink-100";
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
                  <div className="leading-5">{order.date}</div>
                </td>
                <td>
                  <div className="leading-5">{order.quantity}</div>
                </td>
                <td>
                  <div className="leading-5">{order.received}</div>
                </td>
                <td>
                  <div className="leading-5">{order.total}</div>
                </td>
                <td>
                  <div
                    className={`text-sm px-2 py-1 font-semibold leading-tight text-center rounded-full ${bg_color}`}
                  >
                    {order.status}
                  </div>
                </td>
                <td className="text-center">
                  <a href={order.url}>
                    <Button color="light" size="small">
                      <PencilSquare className="inline text-indigo-500" />
                    </Button>
                  </a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Pagination
        totalData={total_data}
        perPage={data_per_page}
        className="mt-8"
        onPageChanged={onPageChanged}
        currentPage={currentPage}
      />
    </div>
  );
}
