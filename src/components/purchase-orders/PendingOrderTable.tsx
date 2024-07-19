import { useCallback } from "react";
import {
  SearchForm,
  Pagination,
  Button,
  SweetAlert,
} from "@/components/reactdash-ui";
import { useAsyncEffect, useSetState } from "ahooks";
import {
  purchaseApproveOrder,
  purchasePendingOrder,
  purchaseRejectOrder,
} from "@/api/purchase-orders";
import to from "await-to-js";
import Spin from "@/components/reactdash-ui/Spin";
import { useNavigate } from "react-router-dom";
import { purcharseDetailLink } from "@/utils/utils";

const table_title = {
  id: "PO #",
  date: "PO Date",
  approval_deadline: "Approval Deadline",
  term_period: "Term Period",
  quantity: "Quantity",
  total: "Total",
  action: "Action",
};

type KeyTableTitle = keyof typeof table_title;

type ProductPendingOrderTable = {
  id: number;
  invoice_window_end: string;
  missing: string;
  purchase_order_date: string;
  purchase_order_status: string;
  approval_deadline: string;
  quantity: string;
  received: string;
  term_period: number;
  total: string;
  purchase_order_number: string;
};

type DataPendingOrderTable = {
  currentPage: number;
  products: ProductPendingOrderTable[];
  perPage: number;
  loading: boolean;
  keyword: string;
};

export default function PendingOrderTable() {
  const navigate = useNavigate();
  const [state, setState] = useSetState<DataPendingOrderTable>({
    currentPage: 1,
    products: [],
    perPage: 8,
    loading: false,
    keyword: "",
  });

  const fetchPendingOrder = async () => {
    setState({ loading: true });
    const [err, data] = await to(purchasePendingOrder());
    if (err) return setState({ loading: false });
    setState({ products: data, loading: false });
  };

  useAsyncEffect(async () => {
    await fetchPendingOrder();
  }, []);

  // slice data_table
  const currentData = state.products.filter((product) => {
    if (!state.keyword) return true;

    const regex = new RegExp(state.keyword, "i");
    return (
      regex.test(product.purchase_order_number) ||
      regex.test(product.purchase_order_date) ||
      regex.test(product.approval_deadline) ||
      regex.test(product.quantity) ||
      regex.test(product.total) ||
      regex.test(`${product.term_period}`)
    );
  });

  // slice data_table
  const sliceData = currentData.slice(
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
              setState({ keyword: e.target.value });
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
            {sliceData.map((order, id) => {
              const classRow =
                id % 2 === 0
                  ? ""
                  : "bg-gray-100 dark:bg-gray-900 dark:bg-opacity-40";

              return (
                <tr key={id} className={classRow}>
                  <td>
                    <div className="leading-5">
                      {order.purchase_order_number}
                    </div>
                  </td>
                  <td>
                    <div className="leading-5">{order.purchase_order_date}</div>
                  </td>
                  <td>
                    <div className="leading-5">{order.approval_deadline}</div>
                  </td>
                  <td>
                    <div className="leading-5">{order.term_period}</div>
                  </td>
                  <td>
                    <div className="leading-5">{order.quantity}</div>
                  </td>
                  <td>
                    <div className="leading-5">{order.total}</div>
                  </td>
                  <td className="flex flex-wrap gap-2">
                    <Button
                      color="success"
                      size="small"
                      onClick={() => {
                        navigate(purcharseDetailLink("pending", order.id));
                      }}
                    >
                      View
                    </Button>
                    <SweetAlert
                      title="Approve"
                      btn_color="info"
                      btn_size="small"
                      data={{
                        title: "Are you sure?",
                        icon: "question",
                        text: "You won't be able to revert this!",
                        showCancelButton: true,
                        confirmButtonText: "Yes, approve it!",
                        cancelButtonText: "No, cancel!",
                        confirmButtonColor: "#3085d6",
                        cancelButtonColor: "#d33",
                      }}
                      onResult={async (result, swal) => {
                        if (result.isConfirmed) {
                          swal.fire({
                            title: "Processing...",
                            html: "Please wait...",
                            allowOutsideClick: false,
                            showConfirmButton: false,
                          });

                          const [err] = await to(
                            purchaseApproveOrder(order.id)
                          );
                          if (err) {
                            swal.fire("Error", "Something went wrong", "error");
                            return;
                          }

                          swal.fire(
                            "Approved!",
                            "Your data has been approved.",
                            "success"
                          );
                          await fetchPendingOrder();
                        }
                      }}
                    />
                    <SweetAlert
                      title="Reject"
                      btn_color="danger"
                      btn_size="small"
                      data={{
                        title: "Are you sure?",
                        icon: "question",
                        text: "You won't be able to revert this!",
                        showCancelButton: true,
                        confirmButtonText: "Yes, reject it!",
                        cancelButtonText: "No, cancel!",
                        confirmButtonColor: "#3085d6",
                        cancelButtonColor: "#d33",
                      }}
                      onResult={async (result, swal) => {
                        if (result.isConfirmed) {
                          swal.fire({
                            title: "Processing...",
                            html: "Please wait...",
                            allowOutsideClick: false,
                            showConfirmButton: false,
                          });

                          const [err] = await to(purchaseRejectOrder(order.id));
                          if (err) {
                            swal.fire("Error", "Something went wrong", "error");
                            return;
                          }

                          swal.fire(
                            "Rejected!",
                            "Your data has been rejected.",
                            "success"
                          );
                          await fetchPendingOrder();
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
        totalData={currentData.length}
        perPage={state.perPage}
        className="mt-8"
        onPageChanged={onPageChanged}
        currentPage={state.currentPage}
      />
    </div>
  );
}
