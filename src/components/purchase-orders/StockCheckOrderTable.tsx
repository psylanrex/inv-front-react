import { useCallback } from "react";
import { SearchForm, Pagination } from "@/components/reactdash-ui";
import { useAsyncEffect, useSetState } from "ahooks";
import { purchaseStockCheckOrder } from "@/api/purchase-orders";
import to from "await-to-js";
import Spin from "@/components/reactdash-ui/Spin";

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

type ProductStockCheckOrder = {
  approval_deadline: string;
  id: number;
  purchase_order_date: string;
  purchase_order_number: string;
  quantity: string;
  term_percent_due: number;
  term_period: number;
  total: string;
};

type DataStockCheckOrderTable = {
  currentPage: number;
  products: ProductStockCheckOrder[];
  perPage: number;
  loading: boolean;
  keyword: string;
};

export default function StockCheckOrderTable() {
  const [state, setState] = useSetState<DataStockCheckOrderTable>({
    currentPage: 1,
    products: [],
    perPage: 8,
    loading: false,
    keyword: "",
  });

  const fetchStockCheckOrder = async () => {
    setState({ loading: true });
    const [err, data] = await to(purchaseStockCheckOrder());
    if (err) return setState({ loading: false });
    setState({ products: data, loading: false });
  };

  useAsyncEffect(async () => {
    await fetchStockCheckOrder();
  }, []);

  // slice data_table
  const currentData = state.products
    .filter((product) => {
      if (!state.keyword) return true;

      const regex = new RegExp(state.keyword, "i");
      return (
        regex.test(product.approval_deadline) ||
        regex.test(product.purchase_order_number) ||
        regex.test(product.purchase_order_date) ||
        regex.test(product.quantity) ||
        regex.test(product.total) ||
        regex.test(`${product.term_period}`) ||
        regex.test(`${product.term_percent_due}`)
      );
    })
    .slice(
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
                  <td>
                    <div className="leading-5"></div>
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
