import { useCallback } from "react";
import { SearchForm, Pagination, Button } from "@/components/reactdash-ui";
import { useNavigate } from "react-router-dom";
import { useAsyncEffect, useSetState } from "ahooks";
import to from "await-to-js";
import { purchaseClosedOrder } from "@/api/purchase-orders";
import Spin from "@/components/reactdash-ui/Spin";
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

type ProductClosedOrderTable = {
  id: number;
  purchase_order_date: string;
  approval_deadline: string;
  quantity: string;
  term_period: number;
  total: string;
  term_percent_due: number;
  purchase_order_number: string;
};

type DataClosedOrderTable = {
  currentPage: number;
  products: ProductClosedOrderTable[];
  perPage: number;
  loading: boolean;
  keyword: string;
};

const CloseOrderTable = () => {
  const navigate = useNavigate();
  const [state, setState] = useSetState<DataClosedOrderTable>({
    currentPage: 1,
    products: [],
    perPage: 8,
    loading: false,
    keyword: "",
  });

  const fetchClosedOrder = async () => {
    setState({ loading: true });
    const [err, data] = await to(purchaseClosedOrder());
    if (err) return setState({ loading: false });
    setState({ products: data, loading: false });
  };

  useAsyncEffect(async () => {
    await fetchClosedOrder();
  }, []);

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
                        navigate(purcharseDetailLink("open", order.id));
                      }}
                    >
                      View
                    </Button>
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
};

export default CloseOrderTable;
