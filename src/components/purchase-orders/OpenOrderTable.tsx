import { useCallback } from "react";
import { SearchForm, Pagination, Button } from "@/components/reactdash-ui";
import { useAsyncEffect, useSetState } from "ahooks";
import { purchaseOpenOrder } from "@/api/purchase-orders";
import to from "await-to-js";

const table_title = {
  id: "PO #",
  date: "PO Date",
  quantity: "Quantity",
  received: "Received",
  missing: "Missing",
  total: "Total",
  status: "Order Status",
  invoice_deadline: "Invoice Deadline",
  action: "Action",
};

type KeyTableTitle = keyof typeof table_title;

type ProductOpenOrderTable = {
  id: number;
  invoice_window_end: string;
  missing: string;
  purchase_order_date: string;
  purchase_order_number: string;
  purchase_order_status: string;
  quantity: string;
  received: string;
  total: string;
};

type DataOpenOrderTable = {
  currentPage: number;
  products: ProductOpenOrderTable[];
  previousProducts: ProductOpenOrderTable[];
  perPage: number;
};

export default function OpenOrderTable() {
  const [state, setState] = useSetState<DataOpenOrderTable>({
    currentPage: 1,
    products: [],
    previousProducts: [],
    perPage: 8,
  });

  useAsyncEffect(async () => {
    const [, res] = await to(purchaseOpenOrder());
    if (res?.length === 0) return;
    setState({ products: res, previousProducts: res });
  }, []);

  // slice data_table
  const currentData = state.products.slice(
    (state.currentPage - 1) * state.perPage,
    (state.currentPage - 1) * state.perPage + state.perPage
  );

  // page changed
  const onPageChanged = useCallback(
    (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, page: number) => {
      event.preventDefault();
      setState({ currentPage: page });
    },
    [setState]
  );

  return (
    <div>
      <div className="flex justify-end mb-3">
        <div>
          {/* Search Form */}
          <SearchForm
            className="!mx-0"
            onSearch={(keyword) => {
              if (keyword === "")
                return setState({ products: state.previousProducts });

              const regex = new RegExp(keyword, "i");
              setState((state) => ({
                products: state.products.filter((product) =>
                  regex.test(product.purchase_order_number)
                ),
              }));
            }}
          />
        </div>
      </div>

      <table className="table-sorter table-bordered-bottom w-full text-gray-500 dark:text-gray-400 dataTable-table">
        <thead>
          <tr className="bg-gray-200 dark:bg-gray-900 dark:bg-opacity-40">
            {Object.keys(table_title).map((key, id) => (
              <th className="text-left" key={id}>
                {table_title[key as KeyTableTitle]}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {currentData.map((order, id) => {
            return (
              <tr key={id}>
                <td>
                  <div className="leading-5">{order.purchase_order_number}</div>
                </td>
                <td>
                  <div className="leading-5">{order.purchase_order_date}</div>
                </td>
                <td>
                  <div className="leading-5">{order.quantity}</div>
                </td>
                <td>
                  <div className="leading-5">{order.received}</div>
                </td>
                <td>
                  <div className="leading-5">{order.missing}</div>
                </td>
                <td>
                  <div className="leading-5">{order.total}</div>
                </td>
                <td>
                  <div className="leading-5">{order.purchase_order_status}</div>
                </td>
                <td>
                  <div className="leading-5">{order.invoice_window_end}</div>
                </td>
                <td className="flex flex-wrap gap-2 text-center">
                  <Button color="success" size="small">
                    View
                  </Button>
                  <Button color="danger" size="small">
                    Close
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Pagination
        totalData={state.products.length}
        perPage={state.perPage}
        className="mt-8"
        onPageChanged={onPageChanged}
        currentPage={state.currentPage}
      />
    </div>
  );
}
