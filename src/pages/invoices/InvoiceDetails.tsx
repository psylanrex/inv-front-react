import { InvoiceDetail, getInvoiceDetails } from "@/api/invoice";
import LandedItems from "@/components/invoices/LandedItems";
import ReturnedItems from "@/components/invoices/ReturnedItems";
import {
  Button,
  Card,
  Column,
  Preloader,
  Row,
} from "@/components/reactdash-ui";
import Spin from "@/components/reactdash-ui/Spin";
import { currencyFormatter, invoicePrintLink } from "@/utils/utils";
import { useAsyncEffect, useSetState } from "ahooks";
import to from "await-to-js";
import { Pass, Printer } from "react-bootstrap-icons";
import { useParams } from "react-router-dom";

type StateInvoiceDetail = {
  data?: InvoiceDetail;
  loading: boolean;
};

const InvoiceDetails = () => {
  const params = useParams();
  const [state, setState] = useSetState<StateInvoiceDetail>({
    data: undefined,
    loading: false,
  });

  useAsyncEffect(async () => {
    if (!params.invoice_id) return;
    setState({ loading: true });
    const [err, data] = await to(getInvoiceDetails(params.invoice_id));
    if (err) return setState({ loading: false });
    setState({ data, loading: false });
  }, [params]);

  return (
    <Preloader>
      <Spin loading={state.loading}>
        <div>
          {/* page title */}
          <Row>
            <Column className="w-full px-4">
              <Row className="items-center justify-between mt-3 mb-5">
                <Column>
                  <Row className="items-center gap-2">
                    <Pass className="text-xl" />
                    <p className="text-xl">
                      Invoice # {state.data?.invoice?.invoice_number}
                    </p>
                  </Row>
                </Column>
                <Button
                  className="inline-flex items-center no-print"
                  onClick={() =>
                    window.open(invoicePrintLink(state.data?.invoice?.id ?? 0))
                  }
                >
                  <Printer className="mr-1 w-4 h-4" /> Print Invoice Label
                </Button>
              </Row>
            </Column>
          </Row>

          {/* ship to */}
          <div className="w-full grid gap-4 px-4 mb-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 xxl:grid-cols-2">
            <Card className="relative p-6">
              <table className="table-sorter table-bordered-bottom w-full text-gray-500 dark:text-gray-400 dataTable-table">
                <thead></thead>
                <tbody>
                  <tr className="bg-gray-100 dark:bg-gray-900 dark:bg-opacity-40">
                    <td className="leading-5 border border-black-600">PO #</td>
                    <td className="leading-5 border border-black-600">
                      {
                        state.data?.invoice?.purchase_order
                          ?.purchase_order_number
                      }
                    </td>
                  </tr>
                  <tr>
                    <td className="leading-5 border border-black-600">
                      PO Status
                    </td>
                    <td className="leading-5 border border-black-600">
                      <span
                        className={`text-sm px-4 py-1 font-semibold leading-tight text-center rounded-full text-yellow-700 bg-yellow-100`}
                      >
                        {
                          state.data?.invoice?.purchase_order
                            ?.purchase_order_status?.purchase_order_status
                        }
                      </span>
                    </td>
                  </tr>
                  <tr className="bg-gray-100 dark:bg-gray-900 dark:bg-opacity-40">
                    <td className="leading-5 border border-black-600">
                      PO Date
                    </td>
                    <td className="leading-5 border border-black-600">
                      {state.data?.invoice?.purchase_order?.purchase_order_date}
                    </td>
                  </tr>
                  <tr>
                    <td className="leading-5 border border-black-600">
                      Invoice ID
                    </td>
                    <td className="leading-5 border border-black-600">
                      {state.data?.invoice?.id}
                    </td>
                  </tr>
                  <tr className="bg-gray-100 dark:bg-gray-900 dark:bg-opacity-40">
                    <td className="leading-5 border border-black-600">
                      Invoice Number
                    </td>
                    <td className="leading-5 border border-black-600">
                      {state.data?.invoice?.invoice_number}
                    </td>
                  </tr>
                  <tr>
                    <td className="leading-5 border border-black-600">
                      Category
                    </td>
                    <td className="leading-5 border border-black-600">
                      {state.data?.invoice?.purchase_order?.category?.name}
                    </td>
                  </tr>
                  <tr className="bg-gray-100 dark:bg-gray-900 dark:bg-opacity-40">
                    <td className="leading-5 border border-black-600">
                      Shipping Date
                    </td>
                    <td className="leading-5 border border-black-600">
                      {state.data?.invoice?.ship_date}
                    </td>
                  </tr>
                  <tr>
                    <td className="leading-5 border border-black-600">
                      Landed / Received Date
                    </td>
                    <td className="leading-5 border border-black-600">
                      {state.data?.invoice?.landed_date}
                    </td>
                  </tr>
                  <tr className="bg-gray-100 dark:bg-gray-900 dark:bg-opacity-40">
                    <td className="leading-5 border border-black-600">
                      Shipping Method
                    </td>
                    <td className="leading-5 border border-black-600">
                      {state.data?.invoice?.ship_method?.ship_method}
                    </td>
                  </tr>
                  <tr>
                    <td className="leading-5 border border-black-600">Terms</td>
                    <td className="leading-5 border border-black-600">
                      Net {state.data?.invoice?.purchase_order?.term_period} /{" "}
                      {state.data?.invoice?.purchase_order?.term_percent_due}%
                    </td>
                  </tr>
                </tbody>
              </table>
            </Card>
            <div className="flex flex-col gap-4">
              <Card className="relative p-6">
                <table className="table-sorter table-bordered-bottom w-full text-gray-500 dark:text-gray-400 dataTable-table">
                  <thead>
                    <tr className="bg-gray-200 dark:bg-gray-900 dark:bg-opacity-40">
                      <th className="text-left">Ship to</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <p className="font-bold">Serrf Corp.</p>
                        <p>3182 Pullman Street</p>
                        <p>Costa Mesa, CA 92626</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </Card>
              <Card className="relative p-6">
                <table className="table-sorter table-bordered-bottom w-full text-gray-500 dark:text-gray-400 dataTable-table">
                  <thead>
                    <tr className="bg-gray-200 dark:bg-gray-900 dark:bg-opacity-40">
                      <th className="text-left">Approved by</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <p>
                          <span className="underline decoration-dotted">
                            Email:
                          </span>{" "}
                          serrfcorp@gmail.com
                        </p>
                        <p>
                          <span className="underline decoration-dotted">
                            Phone:
                          </span>{" "}
                          (877) 677-3040
                        </p>
                        <p>
                          <span className="underline decoration-dotted">
                            Fax:
                          </span>{" "}
                          (714) 556-4900
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </Card>
            </div>
          </div>

          {/* landed items */}
          <Row className="mb-5">
            <Column className="w-full px-4">
              <Card className="relative p-6">
                <LandedItems products={state.data?.items || []} />
              </Card>
            </Column>
          </Row>

          {/* returned items */}
          <Row className="mb-5">
            <Column className="w-full px-4">
              <Card className="relative p-6">
                <ReturnedItems products={state.data?.returned || []} />
              </Card>
            </Column>
          </Row>

          {/* page footer */}
          <div className="px-4 w-full">
            <Card>
              <Row className="flex-wrap sm:flex-nowrap gap-2">
                <Column className="w-full sm:w-1/2">
                  <table className="table-sorter table-bordered-bottom w-full text-gray-500 dark:text-gray-400 dataTable-table">
                    <thead>
                      <tr className="bg-gray-100 dark:bg-gray-900 dark:bg-opacity-40">
                        <th className="text-left border border-black-600">
                          Notes
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td
                          rowSpan={2}
                          className="leading-5 border border-black-600"
                        >
                          ...
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </Column>
                <Column className="w-full sm:w-1/2">
                  <table className="table-sorter table-bordered-bottom w-full text-gray-500 dark:text-gray-400 dataTable-table">
                    <thead>
                      <tr className="bg-gray-100 dark:bg-gray-900 dark:bg-opacity-40">
                        <th
                          colSpan={2}
                          className="text-left border border-black-600"
                        >
                          Complete Total
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="leading-5 border border-black-600">
                          Item Count
                        </td>
                        <td className="leading-5 border border-black-600">
                          {state.data?.item_count}
                        </td>
                      </tr>
                      <tr>
                        <td className="leading-5 border border-black-600">
                          Landed Item Count
                        </td>
                        <td className="leading-5 border border-black-600">
                          {state.data?.landed_count}
                        </td>
                      </tr>
                      <tr>
                        <td className="leading-5 border border-black-600 font-bold">
                          Grand Total
                        </td>
                        <td className="leading-5 border border-black-600">
                          {currencyFormatter.format(
                            +(state.data?.grand_total ?? 0)
                          )}
                        </td>
                      </tr>
                      <tr>
                        <td className="leading-5 border border-black-600 font-bold">
                          Landed Grand Total
                        </td>
                        <td className="leading-5 border border-black-600">
                          {currencyFormatter.format(
                            +(state.data?.landed_grand_total ?? 0)
                          )}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </Column>
              </Row>
            </Card>
          </div>
        </div>
      </Spin>
    </Preloader>
  );
};

export default InvoiceDetails;
