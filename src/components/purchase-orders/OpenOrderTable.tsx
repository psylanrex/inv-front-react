import { useCallback } from "react";
import {
  SearchForm,
  Pagination,
  Button,
  SweetAlert,
} from "@/components/reactdash-ui";
import { useAsyncEffect, useSetState } from "ahooks";
import { purchaseCloseOrder, purchaseOpenOrder } from "@/api/purchase-orders";
import to from "await-to-js";
import Spin from "@/components/reactdash-ui/Spin";
import { useNavigate } from "react-router-dom";
import { purcharseDetailLink } from "@/utils/utils";

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
  loading: boolean;
};

export default function OpenOrderTable() {
  const navigate = useNavigate();
  const [state, setState] = useSetState<DataOpenOrderTable>({
    currentPage: 1,
    products: [],
    previousProducts: [],
    perPage: 8,
    loading: false,
  });

  const fetchOpenOrder = async () => {
    setState({ loading: true });
    const [, res] = await to(purchaseOpenOrder());
    if (res?.length === 0) return setState({ loading: false });
    setState({ products: res, previousProducts: res, loading: false });
  };

  useAsyncEffect(async () => {
    await fetchOpenOrder();
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
            onChange={(e) => {
              const keyword = e.target.value;
              if (keyword === "")
                return setState({ products: state.previousProducts });

              const regex = new RegExp(keyword, "i");
              setState((state) => ({
                products: state.previousProducts.filter(
                  (product) =>
                    regex.test(product.purchase_order_number) ||
                    regex.test(product.purchase_order_date) ||
                    regex.test(product.purchase_order_status) ||
                    regex.test(product.invoice_window_end) ||
                    regex.test(product.quantity) ||
                    regex.test(product.received) ||
                    regex.test(product.missing) ||
                    regex.test(product.total)
                ),
              }));
            }}
          />
        </div>
      </div>

      <Spin loading={state.loading}>
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
                    <div className="leading-5">
                      {order.purchase_order_number}
                    </div>
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
                    <div className="leading-5">
                      {order.purchase_order_status}
                    </div>
                  </td>
                  <td>
                    <div className="leading-5">{order.invoice_window_end}</div>
                  </td>
                  <td className="flex flex-wrap gap-2 text-center">
                    <Button
                      color="success"
                      size="small"
                      onClick={() => {
                        navigate(`${purcharseDetailLink}/${order.id}`);
                      }}
                    >
                      View
                    </Button>
                    <SweetAlert
                      title="Close"
                      btn_color="danger"
                      data={{
                        title: "Are you sure?",
                        icon: "warning",
                        text: "You won't be able to revert this!",
                        showCancelButton: true,
                        confirmButtonText: "Yes, delete it",
                        cancelButtonText: "No, cancel!",
                        confirmButtonColor: "#3085d6",
                        cancelButtonColor: "#d33",
                      }}
                      onResult={async (result, swal) => {
                        if (result.isConfirmed) {
                          const [err] = await to(purchaseCloseOrder(order.id));
                          if (err) {
                            swal.fire("Error", "Something went wrong", "error");
                            return;
                          }

                          swal.fire(
                            "Deleted!",
                            "Your data has been deleted.",
                            "success"
                          );
                          await fetchOpenOrder();
                        }
                      }}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Spin>
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
