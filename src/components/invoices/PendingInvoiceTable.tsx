import {
  Button,
  Pagination,
  SearchForm,
  SweetAlert,
} from "@/components/reactdash-ui";
import { useAsyncEffect, useSetState } from "ahooks";
import { useCallback } from "react";
import to from "await-to-js";
import { InvoiceData, cancelInvoice, getPendingInvoices } from "@/api/invoice";
import Spin from "@/components/reactdash-ui/Spin";
import { invoiceFinishLink } from "@/utils/utils";
import { useNavigate } from "react-router-dom";

const table_title = {
  id: "Invoice ID",
  code: "Invoice #",
  date: "Date Created",
  po: "PO #",
  status: "Status",
  action: "Action",
};

type KeyTableTitle = keyof typeof table_title;

type DataPendingInvoiceTable = {
  loading: boolean;
  keyword: string;
  invoices: InvoiceData[];
  perPage: number;
  currentPage: number;
};

const PendingInvoiceTable = () => {
  const navigate = useNavigate();
  const [state, setState] = useSetState<DataPendingInvoiceTable>({
    loading: false,
    keyword: "",
    invoices: [],
    currentPage: 1,
    perPage: 8,
  });

  const fetchPendingInvoice = async () => {
    setState({ loading: true });
    const [err, data] = await to(getPendingInvoices());
    if (err) return setState({ loading: false });
    setState({ invoices: data, loading: false });
  };

  useAsyncEffect(async () => {
    await fetchPendingInvoice();
  }, []);

  // filter data_table
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
                      className={`text-sm px-2 py-1 font-semibold leading-tight text-center rounded-full text-yellow-700 bg-yellow-100`}
                    >
                      {invoice.invoice_status.invoice_status}
                    </div>
                  </td>
                  <td className="flex flex-wrap gap-2">
                    <Button
                      color="primary"
                      size="small"
                      onClick={() => {
                        navigate(invoiceFinishLink(invoice.id));
                      }}
                    >
                      View / Finish
                    </Button>
                    <SweetAlert
                      title="Cancel"
                      btn_color="danger"
                      btn_size="small"
                      data={{
                        title: "Are you sure?",
                        icon: "question",
                        text: "You won't be able to revert this!",
                        showCancelButton: true,
                        confirmButtonText: "Yes, cancel it!",
                        cancelButtonText: "No, keep it",
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
                          const [err] = await to(cancelInvoice(invoice.id));
                          if (err) {
                            swal.fire("Error", "Something went wrong", "error");
                            return;
                          }
                          swal.fire(
                            "Rejected!",
                            "Your data has been rejected.",
                            "success"
                          );
                          await fetchPendingInvoice();
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
};

export default PendingInvoiceTable;
