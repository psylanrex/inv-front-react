import { InvoiceFinishData, getInvoiceFinish } from "@/api/invoice";
import InvoiceInformation from "@/components/invoices/InvoiceInformation";
import LandedItems from "@/components/invoices/LandedItems";
import { Card, Column, Preloader, Row } from "@/components/reactdash-ui";
import Spin from "@/components/reactdash-ui/Spin";
import { currencyFormatter } from "@/utils/utils";
import { useAsyncEffect, useSetState } from "ahooks";
import to from "await-to-js";
import { Pass } from "react-bootstrap-icons";
import { useParams } from "react-router-dom";

type StateInvoiceFinish = {
  data?: InvoiceFinishData;
  loading: boolean;
};

const InvoiceFinish = () => {
  const params = useParams();
  const [state, setState] = useSetState<StateInvoiceFinish>({
    data: undefined,
    loading: false,
  });

  useAsyncEffect(async () => {
    if (!params.invoice_id) return;
    setState({ loading: true });
    const [err, data] = await to(getInvoiceFinish(params.invoice_id));
    if (err) return setState({ loading: false });
    setState({ data, loading: false });
  }, [params]);

  console.log(state.data);

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
                      Invoice # {state.data?.invoice?.id}
                    </p>
                  </Row>
                </Column>
              </Row>
            </Column>
          </Row>

          {/* General Invoice Information */}
          <Row className="mb-5">
            <Column className="w-full px-4">
              <Card className="relative p-6">
                <InvoiceInformation />
              </Card>
            </Column>
          </Row>

          {/* Invoice items */}
          <Row className="mb-5">
            <Column className="w-full px-4">
              <Card className="relative p-6">
                <LandedItems products={state.data?.items || []} />
              </Card>
            </Column>
          </Row>

          {/* page footer */}
          <div className="px-4 w-full">
            <Card>
              <Row className="flex-wrap sm:flex-nowrap gap-2">
                <Column className="w-full">
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

export default InvoiceFinish;
