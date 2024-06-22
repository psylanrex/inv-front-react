// components
import { Preloader, Row, Column, Card } from "@/components/reactdash-ui";
import OpenOrderTable from "@/components/purchase-orders/OpenOrderTable";
import { useParams } from "react-router-dom";
import { SuitcaseLg } from "react-bootstrap-icons";
import { useAsyncEffect } from "ahooks";
import { purchaseOrderDetails } from "@/api/purchase-orders";
import to from "await-to-js";

export default function DetailsOrder() {
  const params = useParams();

  console.log(params.order_id);

  useAsyncEffect(async () => {
    if (!params.order_id) return;
    const [, res] = await to(purchaseOrderDetails(params.order_id));
    console.log(res);
  }, [params]);

  return (
    <Preloader>
      {/* page title  */}
      <Row>
        <Column className="w-full md:w-1/2 px-4">
          <Row className="items-center gap-2 mt-3 mb-5">
            <SuitcaseLg className="text-xl" />
            <p className="text-xl font-bold">Purchase Order # 259-20240426-1</p>
          </Row>
        </Column>
      </Row>

      {/* content  */}
      <Row>
        <Column className="w-full px-4">
          <Card className="relative p-6">
            <OpenOrderTable />
          </Card>
        </Column>
      </Row>
    </Preloader>
  );
}
