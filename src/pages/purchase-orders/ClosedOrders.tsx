import React from "react";

// components
import { Preloader, Row, Column, Card } from "@/components/reactdash-ui";
import ClosedOrderTable from "@/components/purchase-orders/ClosedOrderTable";

export default function ClosedOrders() {
  return (
    <Preloader>
      {/* page title  */}
      <Row>
        <Column className="w-full md:w-1/2 px-4">
          <p className="text-xl font-bold mt-3 mb-5">Closed Orders</p>
        </Column>
      </Row>

      {/* content  */}
      <Row>
        <Column className="w-full px-4">
          <Card className="relative p-6">
            <ClosedOrderTable />
          </Card>
        </Column>
      </Row>
    </Preloader>
  );
}
