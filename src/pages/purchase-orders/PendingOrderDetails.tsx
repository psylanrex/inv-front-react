import {
  Preloader,
  Row,
  Column,
  Card,
  Button,
} from "@/components/reactdash-ui";
import { useParams } from "react-router-dom";
import { Printer, SuitcaseLg } from "react-bootstrap-icons";
import { useAsyncEffect, useSetState } from "ahooks";
import {
  PurchaseOrderDetail,
  purchaseOrderDetails,
} from "@/api/purchase-orders";
import to from "await-to-js";
import { currencyFormatter } from "@/utils/utils";
import { useReactToPrint } from "react-to-print";
import { useRef } from "react";
import Spin from "@/components/reactdash-ui/Spin";
import PendingOrderDetailTable from "@/components/purchase-orders/PendingOrderDetailTable";

type DataPendingOrderDetail = {
  data?: PurchaseOrderDetail;
  loading: boolean;
};

export default function PendingOrderDetail() {
  const params = useParams();
  const componentRef = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  const [state, setState] = useSetState<DataPendingOrderDetail>({
    data: undefined,
    loading: false,
  });

  useAsyncEffect(async () => {
    if (!params.order_id) return;
    setState({ loading: true });
    const [err, data] = await to(purchaseOrderDetails(params.order_id));
    if (err) return setState({ loading: false });
    setState({ data, loading: false });
  }, [params]);

  return (
    <Preloader>
      <Spin loading={state.loading}>
        <div ref={componentRef}>
          {/* page title */}
          <Row>
            <Column className="w-full px-4">
              <Row className="items-center justify-between mt-3 mb-5">
                <Column>
                  <Row className="items-center gap-2">
                    <SuitcaseLg className="text-xl" />
                    <p className="text-xl">
                      Purchase Order #{" "}
                      {state.data?.purchase_order?.purchase_order_number}
                    </p>
                  </Row>
                </Column>
                <Button
                  className="inline-flex items-center no-print"
                  onClick={handlePrint}
                >
                  <Printer className="mr-1 w-4 h-4" /> Print Purchase Order
                </Button>
              </Row>
            </Column>
          </Row>

          {/* page detail */}
          <Row className="mb-5">
            <Column className="w-full px-4">
              <Card className="relative p-6">
                <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/3 2xl:w-1/3">
                  <table className="table-sorter table-bordered-bottom w-full text-gray-500 dark:text-gray-400 dataTable-table">
                    <thead></thead>
                    <tbody>
                      <tr className="bg-gray-100 dark:bg-gray-900 dark:bg-opacity-40">
                        <td className="leading-5 border border-black-600">
                          PO #
                        </td>
                        <td className="leading-5 border border-black-600">
                          {state.data?.purchase_order.purchase_order_number}
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
                              state.data?.purchase_order.purchase_order_status
                                .purchase_order_status
                            }
                          </span>
                        </td>
                      </tr>
                      <tr className="bg-gray-100 dark:bg-gray-900 dark:bg-opacity-40">
                        <td className="leading-5 border border-black-600">
                          PO Date
                        </td>
                        <td className="leading-5 border border-black-600">
                          {state.data?.purchase_order.purchase_order_date}
                        </td>
                      </tr>
                      <tr>
                        <td className="leading-5 border border-black-600">
                          Category
                        </td>
                        <td className="leading-5 border border-black-600">
                          {state.data?.purchase_order.category.name}
                        </td>
                      </tr>
                      <tr className="bg-gray-100 dark:bg-gray-900 dark:bg-opacity-40">
                        <td className="leading-5 border border-black-600">
                          Terms
                        </td>
                        <td className="leading-5 border border-black-600">
                          Net {state.data?.purchase_order?.term_period} /{" "}
                          {state.data?.purchase_order.term_percent_due}%
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </Card>
            </Column>
          </Row>

          {/* page content */}
          <Row className="mb-5">
            <Column className="w-full px-4">
              <Card className="relative p-6">
                <PendingOrderDetailTable products={state.data?.items || []} />
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
                      <tr className="bg-gray-100 dark:bg-gray-900 dark:bg-opacity-40">
                        <td className="leading-5 border border-black-600">
                          Grand Total
                        </td>
                        <td className="leading-5 border border-black-600">
                          {currencyFormatter.format(
                            state.data?.grand_total ?? 0
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
}
