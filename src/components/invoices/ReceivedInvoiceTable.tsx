import { useCallback } from "react";
import { SearchForm, Pagination, Button } from "@/components/reactdash-ui";
import { InvoiceData, getReceivedInvoices } from "@/api/invoice";
import { useAsyncEffect, useSetState } from "ahooks";
import to from "await-to-js";
import Spin from "@/components/reactdash-ui/Spin";
import { useNavigate } from "react-router-dom";
import { invoiceDetailLink } from "@/utils/utils";

const table_title = {
  id: "Invoice ID",
  code: "Invoice #",
  date: "Date Created",
  po: "PO #",
  status: "Status",
  action: "Action",
};

type KeyTableTitle = keyof typeof table_title;

type DataReceivedInvoiceTable = {
  loading: boolean;
  keyword: string;
  invoices: InvoiceData[];
  perPage: number;
  currentPage: number;
};

const ReceivedInvoiceTable = () => {
  const navigate = useNavigate();
  const [state, setState] = useSetState<DataReceivedInvoiceTable>({
    loading: false,
    keyword: "",
    invoices: [],
    currentPage: 1,
    perPage: 8,
  });

  const fetchReceivedInvoice = async () => {
    setState({ loading: true });
    const [err, data] = await to(getReceivedInvoices());
    if (err) return setState({ loading: false });
    setState({ invoices: data, loading: false });
  };

  useAsyncEffect(async () => {
    await fetchReceivedInvoice();
  }, []);

  // slice data_table
  const currentData = state.invoices.filter((invoice) => {
    if (!state.keyword) return true;

    const regex = new RegExp(state.keyword, "i");
    return (
      regex.test(invoice.invoice_status.invoice_status) ||
      regex.test(invoice.id.toString()) ||
      regex.test(invoice.invoice_number) ||
      regex.test(invoice.create_time)
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
            {sliceData.map((invoice, id) => {
              const classRow =
                id % 2 === 0
                  ? ""
                  : "bg-gray-100 dark:bg-gray-900 dark:bg-opacity-40";

              return (
                <tr key={id} className={classRow}>
                  <td>
                    <div className="leading-5">{invoice.id}</div>
                  </td>
                  <td>
                    <div className="leading-5">{invoice.invoice_number}</div>
                  </td>
                  <td>
                    <div className="leading-5">{invoice.create_time}</div>
                  </td>
                  <td>
                    <div className="leading-5">
                      {invoice.purchase_order.purchase_order_number}
                    </div>
                  </td>
                  <td>
                    <div
                      className={`text-sm px-2 py-1 font-semibold leading-tight text-center rounded-full text-cyan-700 bg-cyan-100`}
                    >
                      {invoice.invoice_status.invoice_status}
                    </div>
                  </td>
                  <td className="flex flex-wrap gap-2">
                    <Button
                      color="primary"
                      size="small"
                      onClick={() => {
                        navigate(invoiceDetailLink(invoice.id));
                      }}
                    >
                      View / Print
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

export default ReceivedInvoiceTable;
