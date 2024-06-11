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
  previousProducts: ProductStockCheckOrder[];
  perPage: number;
};

export default function StockCheckOrderTable() {
  const [state, setState] = useSetState<DataStockCheckOrderTable>({
    currentPage: 1,
    products: [],
    previousProducts: [],
    perPage: 8,
  });

  useAsyncEffect(async () => {
    const [, res] = await to(purchaseOrdersStockCheck());
    if (res?.length === 0) return;
    console.log(res);
    setState({ products: res, previousProducts: res });
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
              if (keyword === "")
                return setState({ products: state.previousProducts });

              const regex = new RegExp(keyword, "i");
              setState((state) => ({
                products: state.products.filter((product) =>
                  regex.test(String(product.id))
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
                  <div className="leading-5">{cur.id}</div>
                </td>
                <td>
                  <div className="leading-5">{cur.purchase_order_date}</div>
                </td>
                <td>
                  <div className="leading-5">{cur.approval_deadline}</div>
                </td>
                <td>
                  <div className="leading-5">{cur.term_period}</div>
                </td>
                <td>
                  <div className="leading-5">{cur.quantity}</div>
                </td>
                <td>
                  <div className="leading-5">{cur.total}</div>
                </td>
                <td>
                  {/* <Button color="light" size="small">
                    <PencilSquare className="inline text-indigo-500" />
                  </Button> */}
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
