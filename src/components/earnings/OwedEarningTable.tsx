import { useCallback } from "react";
import { SearchForm, Pagination, Button } from "@/components/reactdash-ui";
import { useAsyncEffect, useSetState } from "ahooks";
import to from "await-to-js";
import { EarningOwedInvoice, getEarningOwedInvoice } from "@/api/earning";
import { useNavigate } from "react-router-dom";
import { purcharseDetailLink } from "@/utils/utils";
import Spin from "@/components/reactdash-ui/Spin";

const table_title = {
  po: "PO #",
  date: "PO Date",
  date_of_payment: "Date of Payment",
  invoice_number: "Invoice Number",
  ordered: "Ordered",
  received: "Received",
  pending: "Pending",
  total: "Total",
  action: "Action",
};

type KeyTableTitle = keyof typeof table_title;

type DataOwedEarningTable = {
  currentPage: number;
  products: EarningOwedInvoice[];
  perPage: number;
  loading: boolean;
  keyword: string;
};

const OwedEarningTable = () => {
  const navigate = useNavigate();
  const [state, setState] = useSetState<DataOwedEarningTable>({
    currentPage: 1,
    products: [],
    perPage: 8,
    loading: false,
    keyword: "",
  });

  const fetchOwedEarning = async () => {
    setState({ loading: true });
    const [err, data] = await to(getEarningOwedInvoice());
    if (err) return setState({ loading: false });
    setState({ products: data, loading: false });
  };

  useAsyncEffect(async () => {
    await fetchOwedEarning();
  }, []);

  const currentData = state.products
    .filter((product) => {
      if (!state.keyword) return true;

      const regex = new RegExp(state.keyword, "i");
      return (
        regex.test(product.purchase_order_number) ||
        regex.test(product.purchase_order_date) ||
        regex.test(product.payment_date) ||
        regex.test(product.invoice_numbers) ||
        regex.test(product.ordered.toString()) ||
        regex.test(product.received.toString()) ||
        regex.test(product.total)
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
      <div className="md:flex md:justify-end mb-3">
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
                    <div className="leading-5">{order.payment_date}</div>
                  </td>
                  <td>
                    <div className="leading-5">{order.invoice_numbers}</div>
                  </td>
                  <td>
                    <div className="leading-5">{order.ordered}</div>
                  </td>
                  <td>
                    <div className="leading-5">{order.received}</div>
                  </td>
                  <td>
                    <div className="leading-5">{order.received}</div>
                  </td>
                  <td>
                    <div className="leading-5">{order.total}</div>
                  </td>
                  <td className="text-center">
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
        totalData={state.products.length}
        perPage={state.perPage}
        className="mt-8"
        onPageChanged={onPageChanged}
        currentPage={state.currentPage}
      />
    </div>
  );
};

export default OwedEarningTable;
