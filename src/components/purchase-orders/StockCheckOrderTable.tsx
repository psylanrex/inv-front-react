import { useCallback } from "react";
import { SearchForm, Pagination } from "@/components/reactdash-ui";
import { useAsyncEffect, useSetState } from "ahooks";
import { purchaseOrdersStockCheck } from "@/api/purchase-orders";
import to from "await-to-js";

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

type DataStockCheckOrderTable = {
  currentPage: number;
  products: any[];
  perPage: number;
};

export default function StockCheckOrderTable() {
  const [state, setState] = useSetState<DataStockCheckOrderTable>({
    currentPage: 1,
    products: [],
    perPage: 8,
  });

  useAsyncEffect(async () => {
    const [, res] = await to(purchaseOrdersStockCheck());
    if (res?.length === 0) return;
  }, []);

  // page changed
  const onPageChanged = useCallback(
    (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, page: number) => {
      event.preventDefault();
      setState({ currentPage: page });
    },
    [setState]
  );

  // slice data_table
  const currentData = state.products.slice(
    (state.currentPage - 1) * state.perPage,
    (state.currentPage - 1) * state.perPage + state.perPage
  );

  return (
    <div>
      <div className="flex justify-end mb-3">
        <div>
          {/* Search Form */}
          <SearchForm
            className="!mx-0"
            onSearch={(keyword) => {
              if (keyword === "") return setState({ products: [] });

              const regex = new RegExp(keyword, "i");
              setState((state) => ({
                products: state.products.filter(
                  (product) =>
                    regex.test(product.short_name) ||
                    regex.test(product.item_code)
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
          {currentData.map((cur, id) => {
            return (
              <tr key={id}>
                <td>
                  <div className="leading-5">{cur.item_code}</div>
                </td>
                <td>
                  <div className="leading-5">{cur.item_code}</div>
                </td>
                <td>
                  <div className="leading-5">{cur.short_name}</div>
                </td>
                <td>
                  <div className="leading-5">{cur.item_code}</div>
                </td>
                <td>
                  <div className="leading-5">{cur.item_code}</div>
                </td>
                <td>
                  <div className="leading-5">{cur.item_code}</div>
                </td>
                <td>
                  <div className="leading-5">{cur.item_code}</div>
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
